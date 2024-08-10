const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const { Team } = require('../models/teamModel');
const { Problem } = require('../models/problemModel');
const { sendVerification } = require('../utils/email');
const { generateRandomPassword } = require('./userCntrl');

// Helper functions for validation
const validateTeamName = (name) => {
    if (name.length > 30 || name.length < 5) {
        throw new Error("Team name should be greater than 5 and less than 30 characters");
    }
};

const validateUsers = (users) => {
    if (!Array.isArray(users)) {
        throw new Error("Invalid user data format");
    }

    if (users.length > 4) {
        throw new Error("Not more than 4 members can be added");
    }

    users.forEach((user, i) => {
        for (let j = i + 1; j < users.length; j++) {
            if (user.phoneNo === users[j].phoneNo) {
                throw new Error("Duplicate phone numbers are not allowed");
            }
            if (user.email === users[j].email) {
                throw new Error("Duplicate emails are not allowed");
            }
        }
    });
};

// Function to check if users or team already exist
const checkExistingUsersAndTeam = async (usersToAdd, teamName) => {
    for (const user of usersToAdd) {
        const userExists = await User.findOne({ email: user.email });
        if (userExists) {
            throw new Error(`${user.email} - Email already exists`);
        }
        const phoneExists = await User.findOne({ phoneNo: user.phoneNo });
        if (phoneExists) {
            throw new Error(`${user.phoneNo} - Phone number already exists`);
        }
    }

    const existingTeamName = await Team.findOne({ name: teamName });
    if (existingTeamName) {
        throw new Error("Team name already exists");
    }
};

// Function to create a new team
const createTeam = async (name, leader, problemPreference) => {
    const newTeam = new Team({ name, leader, problemPreference });
    await newTeam.save();
    return newTeam;
};

// Function to update problems with team preferences
const updateProblemPreferences = async (team) => {
    for (const preference of team.problemPreference) {
        const problem = await Problem.findById(preference.problems);
        if (problem) {
            problem.preferences.push({
                team: team._id,
                preferenceOrder: preference.preferenceNumber,
            });
            await problem.save();
        }
    }
};

// Function to send verification email to team members
const sendVerificationEmails = async (team, leaderId) => {
    const teamMembers = await Promise.all(
        team.members.map(async (member) => {
            const user = await User.findById(member);
            return user.email;
        })
    );

    await sendVerification(leaderId.email, leaderId.fname);
};

// Main registration handler
const registration = asyncHandler(async (req, res) => {
    try {
        let { usersToAdd, leaderEmail, name, problemPreference } = req.body;

        usersToAdd = usersToAdd.map((user) => {
            return{
                ...user,
                meals:[{
                    type: "breakfast",
                },{
                    type: "lunch",
                },
                {
                    type: "dinner",
                }],
                password: generateRandomPassword()
            }
        });

        // Validate inputs
        validateTeamName(name);
        validateUsers(usersToAdd);

        // Check if users or team already exist
        await checkExistingUsersAndTeam(usersToAdd, name);

        // Insert users and create a new team
        const insertedUsers = await User.insertMany(usersToAdd);
        const leaderId = await User.findOne({ email: leaderEmail });
        leaderId.isTeamLeader = true;
        leaderId.inTeam = null;
        await leaderId.save();

        const newTeam = await createTeam(name, leaderId, problemPreference);
        newTeam.members.push(...insertedUsers);
        await newTeam.save();

        // Associate users with the team
        for (const user of insertedUsers) {
            user.inTeam = newTeam._id;
            await user.save();
        }

        // Update problem preferences
        await updateProblemPreferences(newTeam);

        // Send verification emails
        // await sendVerificationEmails(newTeam, leaderId);

        res.status(201).json({
            users: insertedUsers,
            team: newTeam,
            message: "Registration confirmation email has been sent",
        });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Something went wrong!" });
    }
});

module.exports = { registration };
