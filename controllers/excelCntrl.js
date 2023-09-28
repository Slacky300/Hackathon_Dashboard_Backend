const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const { Team } = require('../models/teamModel');
const { Parser } = require('json2csv');
const { getAllTeams } = require('./teamCntrl');

const exportTeam = asyncHandler(async (req, res) => {
    try {
        const teams = [];
        const formattedTeams = await getAllTeams();

        for (const team of formattedTeams) {
            const { name, problems, _id } = team;
            const user_data = await User.find({ inTeam: _id });

            let counter = 0;
            for (const user of user_data) {
                const {
                    fname,
                    lname,
                    email,
                    phoneNo,
                    college,
                    dept,
                    gender,
                    degree,
                    state,
                    year,
                    city,
                    pincode,
                } = user;

                teams.push({
                    "Team Name": name,
                    "First Name": fname,
                    "Last Name": lname,
                    "Email": email,
                    "Phone no.": phoneNo,
                    "Gender": gender,
                    "College": college,
                    "Branch": dept,
                    "Degree": degree,
                    "Year": year,
                    "City": city,
                    "State": state,
                    "Pincode": pincode,
                    "Problem Name": problems[counter].problemTitle,
                    "Abstract": problems[counter].problemAbstract,
                    "Tech Stack": problems[counter].problemTechStack,
                });
                counter++;
            }

            // Fill in the remaining rows with null values for "Team Name"
            for (let k = counter; k < 5; k++) {
                teams.push({
                    "Team Name": name,
                    "First Name": null,
                    "Last Name": null,
                    "Email": null,
                    "Phone no.": null,
                    "Gender": null,
                    "College": null,
                    "Branch": null,
                    "Degree": null,
                    "Year": null,
                    "City": null,
                    "State": null,
                    "Pincode":null,
                    "Problem Name": problems[k].problemTitle,
                    "Abstract": problems[k].problemAbstract,
                    "Tech Stack": problems[k].problemTechStack,
                });
            }
        }

        const teamHeaders = [
            "Team Name",
            "First Name",
            "Last Name",
            "Email",
            "Phone no.",
            "Gender",
            "College",
            "Branch",
            "Degree",
            "Year",
            "City",
            "State",
            "Pincode",
            "Problem Name",
            "Abstract",
            "Tech Stack",
        ];
        const json2csvParser = new Parser({ fields: teamHeaders });

        const csv = json2csvParser.parse(teams);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=teamData.csv");
        res.status(200).end(csv);
    } catch (error) {
        res.status(500).json({ error: "Error occurred: " + error.message });
    }
});

module.exports = exportTeam;
