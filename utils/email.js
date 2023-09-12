const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')
const { generateVerificationEmail, generateTeamSelection, generateTeamRejection, verifiedTeam } = require('./emailTemplate')
require('dotenv').config();


const generateToken = (email) => {
    return jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const sendVerification = async (recipientEmail, username) => {
    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        })

        const emailcontent = generateVerificationEmail(recipientEmail, username);
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Registration Successful',
            html: emailcontent
        })

        console.log("verification email has been sent")
    } catch (error) {
        console.log(error)
    }
}

const sendTeamSelection = async (recipientEmail, teamName, teamLeader, teamMembers, problemTitle) => {
    try {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }

        })

        const emailcontent = generateTeamSelection(teamName, teamLeader, teamMembers, problemTitle);

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Team Selection',
            html: emailcontent
        })

    }
    catch (error) {
        console.log(error)
    }
}

const sendTeamRejection = async (recipientEmail, teamName, teamLeader) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }

        })

        const emailcontent = generateTeamRejection(teamName, teamLeader);
        console.log(process.env.EMAIL + "email this is")


        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Team Rejection',
            html: emailcontent
        })

    }
    catch (error) {
        console.log(error)
    }
}


const sendVerificationStatus = async (recipientEmail, teamName, teamMembers) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }

        })

        const emailcontent = verifiedTeam(teamName, teamMembers);
     


        await transporter.sendMail({
            from: process.env.EMAIL,
            to: recipientEmail,
            subject: 'Your Team has been Verified Successfully',
            html: emailcontent
        })

    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {
    sendVerification,
    generateToken,
    sendTeamSelection,
    sendTeamRejection,
    sendVerificationStatus
}
