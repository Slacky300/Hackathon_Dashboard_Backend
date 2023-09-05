const generateVerificationEmail = (verificationToken, userFullName) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>VCET Hackathon 23 - Email Verification</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%; margin: 20px auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <tr>
            <td style="padding: 20px;">
              <h1 style="color: #333333;">Welcome to VCET Hackathon 23!</h1>
              <p style="color: #777777;">Hello ${userFullName},</p>
              <p style="color: #777777;">Thank you for registering for VCET Hackathon 23. To complete your registration, please verify your email address by clicking the button below:</p>
              <a href="http://localhost:8000/api/v1/teams/verifyemail/${verificationToken}" style="display: inline-block; background-color: #007bff; color: #ffffff; text-align: center; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
              <p style="color: #777777;">If the button above does not work, you can also copy and paste the following link in your browser:</p>
              <p style="color: #777777;">http://localhost:8000/api/v1/teams/verifyemail/${verificationToken}</p>
              <p style="color: #777777;">Please note that this verification link is valid for a limited time. If you did not register for the VCET Hackathon 23, you can ignore this email.</p>
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