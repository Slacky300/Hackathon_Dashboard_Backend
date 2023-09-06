const fs = require('fs');
const path = require('path');

// const imagePath = path.join(__dirname, 'hacklogo.png');
// const imageContent = fs.readFileSync(imagePath, { encoding: 'base64' });

const generateVerificationEmail = (email, userFullName) => `

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
            color: rgb(170, 170, 170);
        }

        .mailTemplateMainContainer {
            margin: 5px auto;
            width: 768px;
            background-color: #0b0b0b;
            background-image: url('./email2.png');
            background-size: cover;
            background-position: top;
            background-repeat: no-repeat;
            padding: 5px 10px;
            border-radius: 10px;
        }

        .mailTemplateMainContainer .mailDiv .collegeDetails {
            text-align: center;
        }

        .mailTemplateMainContainer .mailDiv .collegeDetails .collegeLogo {
            width: 50px;
            aspect-ratio: 1/1;
            background-image: url('./clg_logo.png');
            background-size: cover;
            margin: 5px auto;
        }

        .mailTemplateMainContainer .mailDiv .collegeDetails .collegeName {
            font-size: 18px;
        }

        .mailTemplateMainContainer .mailDiv .collegeDetails .collegeAddress {
            font-size: 14px;
        }

        .mailTemplateMainContainer .mailDiv .hackathon {
            padding: 10px;
            text-align: center;
        }

        .mailTemplateMainContainer .mailDiv .hackathon .department {
            font-size: 20px;
        }

        .mailTemplateMainContainer .mailDiv .hackathon .hackathonLogo {
            max-width: 768px;
            object-fit: contain;
            /* aspect-ratio: 5/1; */
            overflow: hidden;
            /* border: 2px solid black; */
        }

        .mailTemplateMainContainer .mailDiv .hackathon .hackathonLogo img {
            width: 80%;
            transform: rotate(0.7deg);
        }

        .mailTemplateMainContainer .mailDiv .mailContent {
            width: 90%;
            margin: 0 auto;
        }

        .mailTemplateMainContainer .mailDiv .mailContent .mainMessage {
            background-color: #103825;
            width: max-content;
            margin: 0 auto;
            text-align: center;
            padding: 5px 20px;
            font-size: 24px;
            border-radius: 15px;
            color: #2bca80;
            letter-spacing: 0.4px;
        }

        .mailTemplateMainContainer .mailDiv .mailContent .longMessage {
            padding: 20px 10px;
            color: rgb(215, 215, 215);
            font-weight: 400;
            text-align: justify;
            font-size: 18px;
        }

        .mailTemplateMainContainer .mailDiv .mailContent .longMessage a {
            text-decoration: none;
            color: rgb(134, 242, 248);
        }

        .note {
            width: 100vw;
            text-align: center;
            font-size: 15px;
            font-weight: 300;
            color: #252525;
        }

        @media only screen and (max-width: 425px) {
            .mailTemplateMainContainer {
                width: 95%;
            }

            .mailTemplateMainContainer .mailDiv .collegeDetails .collegeName {
                font-size: 14px;
            }

            .mailTemplateMainContainer .mailDiv .collegeDetails .collegeAddress {
                font-size: 10px;
            }

            .mailTemplateMainContainer .mailDiv .hackathon {
                font-size: 10px;
            }

            .mailTemplateMainContainer .mailDiv .hackathon .department {
                font-size: 15px;
            }

            .mailTemplateMainContainer .mailDiv .mailContent .mainMessage {
                font-size: 20px;
            }

            .mailTemplateMainContainer .mailDiv .mailContent .longMessage {
                font-size: 15px;
            }

            .note {
                font-size: 12px;
            }

        }
    </style>

</head>

<body>
    <div class="mailTemplateMainContainer">
        <div class="mailDiv">
            <div class="collegeDetails">
                <div class="collegeLogo">
                </div>
                <div class="collegeName">
                    Vidyavardhini's College of Engineering & Technology
                </div>
                <div class="collegeAddress">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, amet!
                </div>
            </div>
            <div class="hackathon">
                <div class="department">Department of Information Technology</div>
                <div>presents</div>
                <div class="hackathonLogo">
                    <img src="./hackLogo2.png" alt="">
                </div>
            </div>
            <div class="mailContent">
                <div class="mainMessage">
                    Successfully registered !
                </div>
                <div class="longMessage">
                    Hey ${userFullName},
                    <br>
                    You have succesfully registered for VCET Hackathon 2023. The event will take place on 6th & 7th of
                    October, 2023 at the premises of Vidyavardhini's College of Engineering & Technology. <br> Visit our
                    <a href="https://vcet-hackathon.web.app" target="_blank">official website</a> for more details.
                </div>
            </div>
        </div>
    </div>
    <div class="note">
        This is a system genereated mail, please do not reply to this.
    </div>
</body>

</html>

`;


const generateTeamSelection = (teamName, teamLeader, teamMembers) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>VCET Hackathon Team Selection</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="color: #333333;">VCET Hackathon Team Selection</h1>
              <p style="color: #777777;">Hello Team ${teamName},</p>
              <p style="color: #777777;">Congratulations ${teamLeader} and your team on being selected to participate in VCET Hackathon 23 as a team!</p>
              <p style="color: #777777;">Your team members are:</p>
              <ul style="color: #777777; list-style-type: disc; padding-left: 20px;">
                ${teamMembers.map(member => `<li>${member}</li>`).join("")}
              </ul>
              <p style="color: #777777;">Please work together, brainstorm ideas, and get ready for an exciting hackathon experience!</p>
              <p style="color: #777777;">If you have any questions or need assistance, please reply to this email.</p>
              <p style="color: #777777;">Best regards,<br>VCET Hackathon 23 Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

const generateTeamRejection = (teamName,teamLeader) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>VCET Hackathon Team Rejection</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="color: #333333;">VCET Hackathon Team Rejection</h1>
              <p style="color: #777777;">Hello ${teamLeader} your team -  ${teamName},</p>
              <p style="color: #77777;">We regret to inform you that your team's application for VCET Hackathon 23 has been rejected.</p>
              <p style="color: #777777;">Thank you for your interest in participating. We encourage you to keep exploring opportunities and stay engaged with our events.</p>
              <p style="color: #777777;">If you have any questions or need further clarification, please reply to this email.</p>
              <p style="color: #777777;">Best regards,<br>VCET Hackathon 23 Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;


const verifiedTeam = (teamName, teamMembers) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Team Verified</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="color: #333333;">Team Verified for vcet hackathon</h1>
              <p style="color: #777777;">Hello Team ${teamName},</p>
              <p style="color: #777777;">Some random text!</p>
              <p style="color: #777777;">Your team members are:</p>
              <ul style="color: #777777; list-style-type: disc; padding-left: 20px;">
                ${teamMembers.map(member => `<li>${member}</li>`).join("")}
              </ul>
              <p style="color: #777777;">Please work together, brainstorm ideas, and get ready for an exciting hackathon experience!</p>
              <p style="color: #777777;">If you have any questions or need assistance, please reply to this email.</p>
              <p style="color: #777777;">Best regards,<br>VCET Hackathon 23 Team</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

module.exports = {
    generateVerificationEmail,
    generateTeamSelection,
    generateTeamRejection,
    verifiedTeam

}