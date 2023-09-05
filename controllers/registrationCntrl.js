const asyncHandler = require('express-async-handler');
const {User} = require('../models/userModel');
const {Team} = require('../models/teamModel');
const {Problem} = require('../models/problemModel');
const {sendVerification, generateToken} = require('../utils/email')

const registration = asyncHandler(async (req, res) => {
    try{
        const { usersToAdd, leaderEmail, name, problemPreference, techStack } = req.body;

    if (!Array.isArray(usersToAdd)) {
        res.status(400);
        throw new Error("Invalid user data format");
    }

    if(usersToAdd.length > 4 ){
        return res.status(400).message("Not more than 4 members can be added");
    }

    

    const insertedUsers = await User.insertMany(usersToAdd);

    const leaderId = await User.findOne({ email: leaderEmail });
    leaderId.isTeamLeader = true;
    leaderId.inTeam = null; // Clear previous team association
    const verificationToken = generateToken(leaderId.email);
    leaderId.verificationToken = verificationToken
    await sendVerification(leaderId.email, verificationToken, leaderId.fname)
    await leaderId.save();

    const newTeam = new Team({
        name,
        problemPreference,
        techStack
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