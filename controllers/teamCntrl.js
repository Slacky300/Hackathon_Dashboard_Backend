const asyncHandler = require('express-async-handler');
const { Team } = require('../models/teamModel');
const {User} = require('../models/userModel');
const {Problem} = require('../models/problemModel')
// const { createObjectCsvWriter } = require('csv-writer');
const {generateTeamSelection,generateTeamRejection} = require('../utils/emailTemplate')
const {sendTeamSelection,sendTeamRejection} = require('../utils/email')

const { Parser } = require('json2csv');

const getAllTeams = asyncHandler(async (req, res) => {
    const teams = await Team.find({}).populate({
        path: 'leader',
        select: '-_id email'
      })
      .populate({
        path: 'members',
        select: '-_id email'
      })
      .populate({
        path: 'problemPreference.problems',
        select: '-_id title'
      });

      const formattedTeams = teams.map(team => {
        const membersEmails = team.members.map(member => member.email);
        const problemInfo = team.problemPreference.map(preference => {
          const problemTitle = preference.problems.title;
          const problemAbstract = preference.abstract;
          const preferenceNumber = preference.preferenceNumber;
        //   return `${problemTitle} - Preference: ${preferenceNumber} -Abstract: ${problemAbstract}`;
            const ans = {
                problemTitle: problemTitle,
                problemAbstract: problemAbstract,
                problemPreference: preferenceNumber
            }
            return ans;
        });
        
        
        
        return {
            _id: team._id,
            isSelected: team.isSelected,
            name: team.name,
            selectedProblem: team.selectedProblem.name,
            leader: team.leader.email,
            members: membersEmails,
            problems: problemInfo, 
        };
      });
      
      return formattedTeams

      
      
   
      
      
   
});

const teamJsonResp = asyncHandler(async(req,res) => {
    const teams = await getAllTeams();
    res.status(200).json(teams);
})

const exportTeam = asyncHandler(async (req, res) => {
    try {
        let teams = [];
        const formattedTeams = await getAllTeams(); 

        formattedTeams.forEach((team) => {
            const { name, leader, members, problems } = team;
            const formattedProblems = [];
            problems.forEach((problem) => {
                const { problemTitle, problemAbstract, problemPreference } = problem;
                formattedProblems.push({
                    problemTitle,
                    problemAbstract,
                    problemPreference
                });
            });

            let problem0Abstract,problem1Abstract,problem2Abstract,problem3Abstract,problem4Abstract;

            for(var i =0;i<formattedProblems.length;i++){

                if(formattedProblems[i].problemTitle === "Virtual Study Buddy Platform"){
                    problem0Abstract = `${formattedProblems[i].problemPreference} - ${formattedProblems[i].problemAbstract}`;
                }else if(formattedProblems[i].problemTitle === "Telehealth Connect Platform"){
                    problem1Abstract = `${formattedProblems[i].problemPreference} - ${formattedProblems[i].problemAbstract}`;
                }else if(formattedProblems[i].problemTitle === "Blockchain Certificate Verification System"){
                    problem2Abstract = `${formattedProblems[i].problemPreference} - ${formattedProblems[i].problemAbstract}`;
                }else if(formattedProblems[i].problemTitle === "Scholarship Awareness Portal"){
                    problem3Abstract = `${formattedProblems[i].problemPreference} - ${formattedProblems[i].problemAbstract}`;
                }else if(formattedProblems[i].problemTitle === "Interactive Language Learning Games"){
                    problem4Abstract = `${formattedProblems[i].problemPreference} - ${formattedProblems[i].problemAbstract}`;
                }
            }

            
            
            
           
           
            let member2 = members[1] !== undefined ? members[1] : "null";
            let member3 = members[2] !== undefined ? members[2] : "null";
            let member4 = members[3] !== undefined ? members[3] : "null";
            
            teams.push({
                "Team Name": name,
                "Leader": leader,
                "Member 2": member2,
                "Member 3": member3,
                "Member 4": member4,
                "Virtual Study Buddy Platform": problem0Abstract,
                "Telehealth Connect Platform": problem1Abstract,
                "Blockchain Certificate Verification System": problem2Abstract,
                "Scholarship Awareness Portal": problem3Abstract,
                "Interactive Language Learning Games": problem4Abstract

            });
            
        });

        const teamHeaders = ["Team Name", "Leader", "Member 2", "Member 3", "Member 4", "Virtual Study Buddy Platform", "Telehealth Connect Platform", "Blockchain Certificate Verification System", "Scholarship Awareness Portal", "Interactive Language Learning Games"];
        const json2csvParser = new Parser({fields: teamHeaders });

        const csv = json2csvParser.parse(teams);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=teamData.csv");
        res.status(200).end(csv)

    } catch (error) {
        res.status(500).json({ error: "Error occurred: " + error.message });
    }
});


// Use the exportTeam function as a route handler




const addTeam = asyncHandler(async (req, res) => {
    const { name, leader, members,problemPreference } = req.body;

    try {

        const leaderId = await User.findOne({ email: leader });
        const membersId  = await User.find({ email: { $in: members } });
        
        const newTeam = new Team({
           
            name,
            leader: leaderId._id,
            members: membersId.map(memberM => memberM._id),
            problemPreference
        });

        newTeam.members.push(leaderId);
        const team_leader = await User.findById({_id: leaderId._id});
        team_leader.isTeamLeader = true;
        await team_leader.save()
        const savedTeam = await newTeam.save();
        let i = 1;

        for (const preference of savedTeam.problemPreference) {
            
            const problem = await Problem.findById({_id: preference.problems});
            if (problem) {
                problem.preferences.push({
                    team: savedTeam._id,
                    preferenceOrder: i
                });
                await problem.save();
            }
            i++;
        }

        for (const member of savedTeam.members) {
            const user = await User.findById(member);
            user.inTeam = savedTeam._id;
            await user.save();
        }


        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400);
        throw new Error("Not able to add teams" +error)
    }
});

const updateTeam = asyncHandler(async (req, res) => {
    const { id: teamId } = req.params;
    const { name, leader, members, problemPreference } = req.body;

    try {
        const teamToUpdate = await Team.findById(teamId);
        if (!teamToUpdate) {
            return res.status(404).json({ message: "Team not found" });
        }


        teamToUpdate.name = name;
        teamToUpdate.leader = leader;
        teamToUpdate.members = members;
        teamToUpdate.problemPreference = problemPreference;

        
        const updatedTeam = await teamToUpdate.save();

       
        let i = 1;
        for (const preference of updatedTeam.problemPreference) {
            const problem = await Problem.findById(preference.problems);
            if (problem) {
                problem.preferences.push({
                    team: updatedTeam._id,
                    preferenceOrder: i
                });
                await problem.save();
            }
            i++;
        }


        for (const member of updatedTeam.members) {
            const user = await User.findById(member);
            user.inTeam = updatedTeam._id;
            await user.save();
        }

        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json({ message: "Error updating team", error: error.message });
    }
});


const deleteTeam = asyncHandler(async (req, res) => {
    const { id: teamId } = req.params;

    try {
        const teamToDelete = await Team.findById(teamId);
        if (!teamToDelete) {
            return res.status(404).json({ message: "Team not found" });
        }

        
        for (const member of teamToDelete.members) {
            const user = await User.findById(member);
            user.inTeam = null;
            await user.save();
        }

        
        for (const preference of teamToDelete.problemPreference) {
            const problem = await Problem.findById(preference.problems);
            if (problem) {
                problem.preferences = problem.preferences.filter(p => p.team.toString() !== teamId);
                await problem.save();
            }
        }

        await Team.deleteOne({_id: teamId});

        res.status(204).json({ message: "Team deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting team", error: error.message });
    }
});
const getSingleTeam = asyncHandler(async (req, res) => {
   

    const { email: leaderemail } = req.params;

    try {
        const user = await User.findOne({ email: String(leaderemail) });
        if (!user) {
            res.status(404);
            throw new Error("User does not exist");
        }
        const team = await Team.findOne({ leader: user._id }).populate({
            path: 'problemPreference.problems',
            select: '-_id title'
        });

        const problemInfo = team.problemPreference.map(preference => {
            const problemTitle = preference.problems.title;
            const problemAbstract = preference.abstract;
            const preferenceNumber = preference.preferenceNumber;

            const ans = {
                problemTitle: problemTitle,
                problemAbstract: problemAbstract,
                problemPreference: preferenceNumber
            };
            return ans;
        });

        const formattedTeam = {
            problems: problemInfo
        };

        res.status(200).json(formattedTeam.problems); // Use formattedTeam.problems

    } catch (error) {
        res.status(500).json({ message: "Error getting team", error: error.message });
    }
});

const shortListTeam = asyncHandler(async(req,res)=>{

    const {teams} = req.body
    
    try {
        for(const team of teams){
            const team_members = []
            const existing_team = await Team.findById(team);
            const teamLeader = await User.findById(existing_team.leader);
            console.log(existing_team.members.length)
            if(existing_team.members){
                for(const user of existing_team.members){
                    
                    const memberTemp = await User.findById(user);
                    if(!memberTemp){
                        res.status(404).json({message: "User not exists"})
                    }
                    team_members.push(memberTemp.email)
                }
            }
            existing_team.isSelected = true;
            await existing_team.save();
            await sendTeamSelection(teamLeader.email,existing_team.name,teamLeader.fname,team_members, existing_team.selectedProblem.name)
            console.log("email-sent")

        }

        res.status(200).json({"message": "Teams selected successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error getting team", error: error.message });
    }
    
})


const unShortListTeam = asyncHandler(async(req,res)=>{

    console.log("hello--")
    const {teams} = req.body
    
    try {
        for(const team of teams){

            const existing_team = await Team.findById(team);
            const teamLeader = await User.findById(existing_team.leader);
            existing_team.isSelected = false;
            await existing_team.save();
            await sendTeamRejection(teamLeader.email,existing_team.name,teamLeader.fname)

        }

        res.status(200).json({message: "Teams unselected successfully"});
    } catch (error) {
        res.status(500).json({ message: "Error getting team", error: error.message });
    }
    
})
const getShortListedTeams = asyncHandler(async(req,res) => {

    
    
    const shortListedTeams = await Team.find({ isSelected: true }).populate({
        path: 'leader',
        select: '-_id email'
      })
      .populate({
        path: 'members',
        select: '-_id email'
      })
    if(!shortListedTeams){
        res.status(404).json("No teams selected");
        
    }
    
    res.status(200).json(shortListedTeams);
   
    
});

const assignProblem = asyncHandler(async (req, res) => {
    const { problemId, teamId } = req.body;
  
    try {
      const problem = await Problem.findById(problemId);
      if (!problem) {
        return res.status(404).json({ message: "Problem with the given id not found" });
      }
  
      const team = await Team.findById(teamId);
      if (!team) {
        return res.status(404).json({ message: "Team with the given id not found" });
      }
  
      // Update the selectedProblem object
      team.selectedProblem.id = problemId; // Store the problemId directly
      team.selectedProblem.name = problem.title;
  
      // Find the matching preference and update abstract
      for (const preference of team.problemPreference) {
        if (preference.problems.toString() === problemId) {
            team.selectedProblem.abstract = preference.abstract;
        }
      }
  
      // Save the updated team
      await team.save();
  
      return res.status(200).json({ message: "Problem assigned successfully" });
    } catch (error) {
      console.error("Error assigning problem:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  

const removeAssignedProblem = asyncHandler(async(req,res) => {
    const {teamId} = req.body
    const team = await Team.findById(teamId);
    team.selectedProblem.id = null 
    team.selectedProblem.name = null
    team.selectedProblem.abstract = null
    await team.save()
    res.status(200).json({message: "Problem removed successfully"})
})


const removeTeamFromDb = asyncHandler(async(req,res) => {
    const {teamId} = req.body
    const team = await Team.findById(teamId);
    team.isSelected = false;
    await team.save()
    res.status(200).json({message: "Team disqualified"});
})

module.exports = { teamJsonResp, addTeam, unShortListTeam, updateTeam, deleteTeam, getShortListedTeams,
     getSingleTeam, exportTeam, shortListTeam, assignProblem, removeAssignedProblem, removeTeamFromDb};
