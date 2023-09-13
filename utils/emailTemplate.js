const generateVerificationEmail = (user, teamLeader) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins","Arial";
        color: #fff;
        text-align: center;
      }
      
      .mailTemplateMainContainer {
        margin: 5px auto;
        max-width: 768px;
        background-color: #0b0b0b;
        background-image: url("https://hackathonvcet.s3.amazonaws.com/email2.png");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
        overflow: hidden;
      }

      .mailTemplateMainContainer .mailDiv .collegeDetails {
        text-align: center;
      }

      .mailTemplateMainContainer .mailDiv .collegeDetails .collegeLogo {
        width: 80px; /* Increased size */
        height: 80px; /* Increased size */
        background-image: url("https://hackathonvcet.s3.amazonaws.com/CLG+LOGO.png");
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
        max-width: 400px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .hackathon .hackathonLogo img {
        width: 100%;
        transform: rotate(0.7deg);
      }

      .mailTemplateMainContainer .mailDiv .mailContent {
        width: 90%;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .mailContent .mainMessage {
        background-color: #34e8da75;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 5px 20px;
        font-size: 24px;
        border-radius: 15px;
        color: rgb(255, 255, 255);
        /* font-weight: 450; */
        letter-spacing: 0.5px;
        text-transform: capitalize;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .mailContent .longMessage {
        padding: 20px 10px;
        /* color: rgb(215, 215, 215); */
        font-weight: 400;
        text-align: justify;
        font-size: 18px;
        text-align: justify;
        font-size: 15px;
        font-weight: 500;
      }

      .mailTemplateMainContainer .mailDiv .mailContent .longMessage a {
        text-decoration: none;
        color: rgb(134, 242, 248);
      }

      .note {
        width: 100%;
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        color: #252525;
        padding: 10px;
      }
      .imp{
        color: rgb(134, 242, 248);
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
          font-size: 8px;
        }

        .mailTemplateMainContainer .mailDiv .hackathon .department {
          font-size: 12px;
        }

        .mailTemplateMainContainer .mailDiv .mailContent .mainMessage {
          font-size: 12px;
        }

        .mailTemplateMainContainer .mailDiv .mailContent .longMessage {
          font-size: 10px;
        }

        .note {
          font-size: 8px;
        }
      }
    </style>
  </head>

  <body>
    <div class="mailTemplateMainContainer">
      <div class="mailDiv">
        <div class="collegeDetails">
          <div class="collegeLogo">
            <img
              src="https://hackathonvcet.s3.amazonaws.com/CLG+LOGO.png"
              alt=""
            />
          </div>
          <div class="collegeName">
            Vidyavardhini's College of Engineering & Technology
          </div>
          <div class="collegeAddress">
            K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra - 401202
          </div>
        </div>
        <div class="hackathon">
          <div class="department">Department of Information Technology</div>
          <div>PRESENTS</div>
          <div class="hackathonLogo">
            <img
              src="https://hackathonvcet.s3.amazonaws.com/hack+(1)+(1).png"
              alt=""
            />
          </div>
        </div>
        <div class="mailContent">
          <div class="mainMessage">Successfully registered !</div>
          <div class="longMessage">
            Dear ${teamLeader},
            <br /><br/>  
            We hope this message finds you well. We are delighted to inform you that your registration for the VCET Hackathon: Unleash The Unreal has been successfully received. Thank you for expressing your interest in our event!
            We have received an overwhelming response, and we are excited about the incredible projects that will come to life during this hackathon. Our team is dedicated to ensuring a fair and competitive selection process for all participants.
            <br/>
            <br/>
            Here are the next steps in the process:
            <br/>
            <b class="imp">Abstract Review:</b> Our team will now begin the process of reviewing the abstracts submitted by all registered participants. The abstract is a critical part of the selection process, and it provides us with insight into your project idea and its potential impact.
            <br/>
            <b class="imp">Shortlisting Teams:</b> After carefully reviewing all abstracts, we will shortlist teams based on the quality and feasibility of the project ideas presented. Shortlisted teams will be notified via email.
            <br/>
            <b class="imp">Hackathon Details:</b> Once teams are finalized, we will share additional details about the hackathon, including the schedule, rules, and resources, to help you prepare for the event.
            <br/><br/>
            We encourage you to check your email regularly for updates and announcements regarding the hackathon. If you have any questions or require further assistance, please do not hesitate to reach out to us at <a href="mailto:vcet.hackathon@vcet.edu.in">vcet.hackathon@vcet.edu.in</a>.
            
            We appreciate your enthusiasm and commitment to making VCET Hackathon: Unleash The Unreal a success. We look forward to seeing your innovative ideas come to life during the event.

            <br />
            <br />
            Visit our
            <a href="https://vcet-hackathon.web.app" target="_blank"
              >official website-https://vcet-hackathon.web.app</a
            >
            for more details and updates.
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      This is a system-generated email; please do not reply to this.
    </div>
  </body>
</html>

`;


const generateTeamSelection = (teamName, teamLeader, teamMembers) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: #fff;
        text-align: center;
      }

      .mailTemplateMainContainer {
        margin: 5px auto;
        max-width: 768px;
        background-color: #0b0b0b;
        background-image: url("https://hackathonvcet.s3.amazonaws.com/email2.png");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
        overflow: hidden;
      }

      .mailTemplateMainContainer .mailDiv .collegeDetails {
        text-align: center;
      }

      .mailTemplateMainContainer .mailDiv .collegeDetails .collegeLogo {
        width: 80px; /* Increased size */
        height: 80px; /* Increased size */
        background-image: url("https://hackathonvcet.s3.amazonaws.com/CLG+LOGO.png");
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
        max-width: 400px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .hackathon .hackathonLogo img {
        width: 100%;
        transform: rotate(0.7deg);
      }

      .mailTemplateMainContainer .mailDiv .mailContent {
        width: 90%;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .mailContent .mainMessage {
        background-color: #103825;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 5px 20px;
        font-size: 24px;
        border-radius: 15px;
        color: #2bca80;
        letter-spacing: 0.4px;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
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
        width: 100%;
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        color: #252525;
        padding: 10px;
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
            <img
              src="https://hackathonvcet.s3.amazonaws.com/CLG+LOGO.png"
              alt=""
            />
          </div>
          <div class="collegeName">
            Vidyavardhini's College of Engineering & Technology
          </div>
          <div class="collegeAddress">
            K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra - 401202
          </div>
        </div>
        <div class="hackathon">
          <div class="department">Department of Information Technology</div>
          <div>PRESENTS</div>
          <div class="hackathonLogo">
            <img
              src="https://hackathonvcet.s3.amazonaws.com/hack+(1)+(1).png"
              alt=""
            />
          </div>
        </div>
        <div class="mailContent">
          <div class="mainMessage">Successfully registered !</div>
          <div class="longMessage">
            Hey ${teamLeader}, 
            <br />
            You have successfully registered for VCET Hackathon 2023. The event
            will take place on 6th & 7th of October, 2023, at the premises of
            Vidyavardhini's College of Engineering & Technology. <br />
            We are excited to have you on board for this thrilling 30-hour
            hacking experience! VCET Hackathon is a platform to challenge your
            problem-solving skills, ignite your creativity, and foster
            innovation. Get ready to take on real-world problems and turn your
            ideas into reality.
            <br />
            Teams will be shortlisted based on your preferences, and further
            details will be provided soon. Stay tuned!
            <br />
            Visit our
            <a href="https://vcet-hackathon.web.app" target="_blank"
              >official website</a
            >
            for more details and updates.
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      This is a system-generated email; please do not reply to this.
    </div>
  </body>
</html>

`;

const generateTeamRejection = (teamName, teamLeader) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        color: #fff;
        text-align: center;
      }

      .mailTemplateMainContainer {
        margin: 5px auto;
        max-width: 768px;
        background-color: #0b0b0b;
        background-image: url("https://hackathonvcet.s3.amazonaws.com/email2.png");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        padding: 5px 10px;
        border-radius: 10px;
        text-align: center;
        overflow: hidden;
      }

      .mailTemplateMainContainer .mailDiv .collegeDetails {
        text-align: center;
      }

      .mailTemplateMainContainer .mailDiv .collegeDetails .collegeLogo {
        width: 80px; /* Increased size */
        height: 80px; /* Increased size */
        background-image: url("https://hackathonvcet.s3.amazonaws.com/CLG+LOGO.png");
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
        max-width: 400px;
        height: auto;
        overflow: hidden;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .hackathon .hackathonLogo img {
        width: 100%;
        transform: rotate(0.7deg);
      }

      .mailTemplateMainContainer .mailDiv .mailContent {
        width: 90%;
        margin: 0 auto;
      }

      .mailTemplateMainContainer .mailDiv .mailContent .mainMessage {
        background-color: #d83006;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 5px 20px;
        font-size: 24px;
        border-radius: 15px;
        color: #fff;
        letter-spacing: 0.4px;
      }

      img {
        max-width: 100%;
        height: auto;
        display: block;
        margin: 0 auto;
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
        width: 100%;
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        color: #252525;
        padding: 10px;
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
          <div class="collegeLogo" style="align-items: center">
            <img
              src="https://hackathonvcet.s3.amazonaws.com/CLG+LOGO.png"
              alt=""
            />
          </div>
          <div class="collegeName" style="font-size: 100%">
            Vidyavardhini's College of Engineering & Technology
          </div>
          <div class="collegeAddress" style="font-size: 100%">
            K.T. Marg, Vasai Road (W), Dist. Palghar, Maharashtra - 401202
          </div>
        </div>
        <div class="hackathon">
          <div class="department">Department of Information Technology</div>
          <div>PRESENTS</div>
          <div class="hackathonLogo">
            <img
              src="https://hackathonvcet.s3.amazonaws.com/hack+(1)+(1).png"
              alt=""
            />
          </div>
        </div>
        <div class="mailContent">
          <div class="mainMessage">Team Rejection Notification</div>
          <div class="longMessage">
            Dear ${teamLeader},
            <br />
            We appreciate your interest and application for VCET Hackathon 2023.
            While your team's application was carefully reviewed, we regret to
            inform you that it was not selected for participation this time.
            <br />
            Please don't be disheartened. The competition was tough, and we
            received many exceptional applications. We encourage you to continue
            pursuing your passion for innovation and problem-solving. Your
            determination and skills are valuable, and we hope to see you in
            future events.
            <br />
            For more details , please visit our
            <a href="https://vcet-hackathon.web.app" target="_blank"
              >official website</a
            >.
          </div>
        </div>
      </div>
    </div>
    <div class="note">
      This is a system-generated email. Please do not reply to this.
    </div>
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