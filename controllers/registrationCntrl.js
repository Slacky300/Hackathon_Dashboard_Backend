const asyncHandler = require('express-async-handler');
const {User} = require('../models/userModel');
const {Team} = require('../models/teamModel');
const {Problem} = require('../models/problemModel');
const {sendVerification, generateToken} = require('../utils/email')

const registration = asyncHandler(async (req, res) => {
    try{
        const { usersToAdd, leaderEmail, name, problemPreference } = req.body;

    if (!Array.isArray(usersToAdd)) {
        res.status(400);
        throw new Error("Invalid user data format");
    }

    if(usersToAdd.length > 4 ){
        return res.status(400).message("Not more than 4 members can be added");
    }

    if(usersToAdd.length>=2){
        for (var i = 0; i <= usersToAdd.length - 2; i++) {
        
    
            // Check for duplicate phone numbers
            for (var j = i + 1; j < usersToAdd.length; j++) {
                if (usersToAdd[i].phoneNo == usersToAdd[j].phoneNo) {
                    return res.status(400).json({ message: "Duplicate phone numbers are not allowed" });
                }
            }
        
            // Check for duplicate emails
            for (var j = i + 1; j < usersToAdd.length; j++) {
                if (usersToAdd[i].email == usersToAdd[j].email) {
                    return res.status(400).json({ message: "Duplicate emails are not allowed" });
                }
            }
        }
    }

    if(name.length>30 || name.length<5){
        return res.status(400).json({message: "Team name should be greater than 5 and less than 30"})
    }

    

    const existing_team_name = await Team.findOne({name: name});
    if(existing_team_name){
        res.status(405).json({message: "Team name already exists"})
    }
    
    let k = 0;
    for(const user of usersToAdd){
        const user_exists = await User.findOne({email: usersToAdd[k].email});
        if(user_exists){
            return res.status(400).json({message: `${usersToAdd[k].email} - Email already exists`})
        }
        const phone_exists = await User.findOne({phoneNo: usersToAdd[k].phoneNo});
        if(phone_exists){
            return res.status(400).json({message: `${usersToAdd[k].phoneNo} - Phone number already exists`})
        }
        k++;
    }

    const insertedUsers = await User.insertMany(usersToAdd);
    
    const leaderId = await User.findOne({ email: leaderEmail });
    leaderId.isTeamLeader = true;
    
    
    leaderId.inTeam = null; // Clear previous team association
    const team_members = []
   
    await leaderId.save();

    const newTeam = new Team({
        name,
        problemPreference,
    });

    newTeam.leader = leaderId;
    await newTeam.save();
   

    for (const user of insertedUsers) {
        newTeam.members.push(user);
    }
    await newTeam.save();

    for (const user of insertedUsers) {
        
        user.inTeam = newTeam._id;
        await user.save();
    }

    for (const preference of newTeam.problemPreference) {
        const problem = await Problem.findById(preference.problems);
        if (problem) {
            problem.preferences.push({
                team: newTeam._id,
                preferenceOrder: preference.preferenceNumber
            });
            await problem.save();
        }
    }

    for(const user of newTeam.members){
        const memberTemp = await User.findById(user);
        if(memberTemp.email !== null){
            team_members.push(memberTemp.email)
        }
        
    }
    await sendVerification(leaderId.email, leaderId.fname)

    res.status(201).json({ users: insertedUsers, team: newTeam, message: "We have sent a registration confirmation mail to your mail id" });
    }catch(error){
        console.log(error)
        res.status(400).json({"message": `Something went wrong!`})
    }
});

module.exports = {registration};