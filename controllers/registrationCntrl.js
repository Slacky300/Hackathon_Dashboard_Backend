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

    for(var i = 0; i<=usersToAdd.length-1;i++){
        console.log(usersToAdd[i].phoneNo)
        if(usersToAdd[i].phoneNo == usersToAdd[i+1].phoneNo){

            return res.status(400).json({message: "Duplicate phone no. are not allowed"})
        }else if(usersToAdd[i].email == usersToAdd[i+1].email){
            return res.status(400).json({message: "Duplicate emails are not allowed"})
        }
    }

    if(name.length>30 || name.length<5){
        return res.status(400).json({message: "Team name should be greater than 5 and less than 30"})
    }

    for(var i = 0; i< usersToAdd.length; i++){
        const isExisting = await User.findOne({email: usersToAdd[i].email});
        const isExisting2 = await User.findOne({phoneNo: usersToAdd[i].phoneNo});
        if(isExisting){
            return res.status(400).json({message: "Email already exists"})
        }else if(isExisting2){
            return res.status(400).json({message: "Phone no. already exists"})
        }
    }

    const existing_team_name = await Team.findOne({name: name});
    if(existing_team_name){
        res.status(405).json({message: "Team name already exists"})
    }
    const insertedUsers = await User.insertMany(usersToAdd);

    const leaderId = await User.findOne({ email: leaderEmail });
    leaderId.isTeamLeader = true;
    leaderId.inTeam = null; // Clear previous team association
    await sendVerification(leaderId.email, verificationToken, leaderId.fname)
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

    res.status(201).json({ users: insertedUsers, team: newTeam, message: "Please confirm your email address" });
    }catch(error){
        res.status(400).json({"message": `Error occured: ${error}`})
    }
});

module.exports = {registration};