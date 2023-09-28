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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins","Arial";
        color: #fff;
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

      .imgg {
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
      .bold{
        font-weight:500;
        text-decoration: underline;
        }

      .note {
        width: 100%;
        text-align: center;
        font-size: 15px;
        font-weight: 300;
        color: #252525;
        padding: 10px;
      }
      .upi{
            width: 30%;
        }
    .FooterHeader{
        font-size: 20px;
        }
      .imp{
        color: rgb(134, 242, 248);
      }
      @media only screen and (max-width: 768px) {
        .mailTemplateMainContainer {
          width: 95%;
        }

        .upi{
            width: 45%;
        }

        .mailTemplateMainContainer .mailDiv .collegeDetails .collegeName {
          font-size: 14px;
        }

        .mailTemplateMainContainer .mailDiv .collegeDetails .collegeAddress {
          font-size: 10px;
        }
        p{
            font-size: 10px;
        }

        .FooterHeader{
            font-size: 15px !important;
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
              class="imgg"
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
              class="imgg"

              alt=""
            />
          </div>
        </div>
        <div class="mailContent">
          <div class="mainMessage">Congratulations ! 🥳</div>
          <div class="v-text-align" style="font-size: 14px; color: #ffffff; line-height: 140%; text-align: justify; word-wrap: break-word;"><br>
    <p style="line-height: 140%; margin: 0px;">Dear ${teamLeader},</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">We are pleased to inform you that your team, " ${teamName}," has been selected to participate in <b style="color: #08b2aa;" >VCET HACKATHON ’23</b>, scheduled to be held on <b style="color: #08b2aa;"> 6th and 7th October, 2023</b>. Congratulations on your team's selection!</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<p style="line-height: 140%; margin: 0px;"><b style="color: yellow; ">Here are the essential details and instructions for your participation :</b>

<p style="line-height: 140%; margin: 0pxl" class="bold"><b>Payment Details :</b></p>
<p style="line-height: 140%; margin: 0px; ;">- Registration Fee : <b style="color: #08b2aa;">Rs. 500 per person.</b></p>
<p style="line-height: 140%; margin: 0px;">- Deadline for Payment :<b style="color: #08b2aa;"> 1st October, 2023 </b></p>
<p style="line-height: 140%; margin: 0px;">- Payment Method: Online (NEFT/ UPI)</p>
<p style="line-height: 140%; margin: 0px;">- Payment should be made in a single transaction per team.</p>
<p style="line-height: 140%; margin: 0px;">- Write the Team Name in note while doing transaction.</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>

<table style="width:100%; padding: 1px; text-align: left;" >
    <tr>
      <td style="vertical-align: top; width: 50%;">
        <p style="line-height: 140%; margin: 0px;text-align: left;" class="bold"><b>Payment Details for NEFT :</b></p>
        <p style="line-height: 140%; margin: 0px;text-align: left;">- Name : ARCHANA BABAJI RAWOOL</p>
        <p style="line-height: 140%; margin: 0px;text-align: left;">- Bank Name : BANK OF MAHARASHTRA</p>
        <p style="line-height: 140%; margin: 0px;text-align: left;">- Account No. : 68012823017 </p>
        <p style="line-height: 140%; margin: 0px;text-align: left;">- IFSC Code : MAHB0000299 </p>
        <p style="line-height: 140%; margin: 0px;text-align: left;">- Branch : SANTACRUZ WEST</p>
      </td>
      <td style="vertical-align: top; width: 48%;">
        <p style="line-height: 140%; margin: 0px;text-align: left" class="bold"><b>Payment Details for UPI :</b></p>
        <p style="line-height: 140%; margin: 0px;text-align: left;">- UPI ID : rawoolaniruddha3@okhdfcbank</p>
        <img src="https://hackathonvcet.s3.amazonaws.com/hack2.png" class="upi"  alt="">
      </td>
    </tr>
  </table>

<p style="line-height: 140%; margin: 0px;" class="bold"><br><b>Payment Confirmation :&nbsp;</b></p>
<p style="line-height: 140%; margin: 0px;">Once you have completed the online payment, please take a screenshot of the transaction and upload it on the provided google form link :</p>
<p style="line-height: 140%; margin: 0px;"><a style="color: yellow;" href="https://forms.gle/SfkBFnA7fBu5mUTR7">https://forms.gle/SfkBFnA7fBu5mUTR7</a></p>
<p style="line-height: 140%; margin: 0px;" class="bold"><br><b>Confirmation and Important Dates :</b></p>
<p style="line-height: 140%; margin: 0px;">- Confirmation of the selected abstract will be sent to you on 5th September, 2023.</p>
<p style="line-height: 140%; margin: 0px;">- Reporting Time: 6:00 am, 6th October, 2023&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<p style="line-height: 140%; margin: 0px;" class="bold"><b>General Instructions :</b></p>
<p style="line-height: 140%; margin: 0px;">- Please have your college ID card, transaction ID, bank details, and Identity Proof ready while attending the event.&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">-&nbsp;Ensure you have your own laptops and chargers.</p>
<p style="line-height: 140%; margin: 0px;">- Make sure you fill the undertaking form attached to this email with your and&nbsp; your parent's signature and bring the hard copy on the event day(i.e 6th October) with you.&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">For a detailed schedule and additional information, please visit our official website: <br><a style="color: yellow; text-decoration: none;" href="www.vcet-hackathon.web.app">www.vcet-hackathon.web.app</a></p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">For any inquiries or assistance, please feel free to reach out to us.</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<p style="line-height: 140%; margin: 0px;">Thank you for being a part of VCET HACKATHON ’23, and we look forward to your active participation in this exciting event.</p>
<p style="line-height: 140%; margin: 0px;">&nbsp;</p>
<div style="">
<p style="line-height: 140%; margin: 0px; ">Best Regards,</p>
<p style="line-height: 140%; margin: 0px;">Team Hackathon,</p>
<p style="line-height: 140%; margin: 0px;">VCET-IT.</p>
</div>
  
<br>
      </td>
    </tr>
  </tbody>
</table>
</div>
<div class="v-text-align" style="font-size: 14px; color: #000000; line-height: 140%; text-align: justify; word-wrap: break-word;">

  <div class="FooterHeader" style=" line-height: 140%; text-align: center; margin: 0px;"><span style=" line-height: 28px;"><strong>For more details</strong></span></div>

<p style="font-size: 14px; line-height: 140%; text-align: center; margin: 0px;">Contact - Ramesh Yadav : +91 9096377491 | Kashish bhanushali : +91 9561650242</p> <br>
</div>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>

<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  
    <!--[if gte mso 9]>
      </v:textbox></v:rect>
    </td>
    </tr>
    </table>
    <![endif]-->
    


  
  
<br>
  </body>
  <p style="text-align: center; margin-top: 20px; color: black !important">This is a system generated mail; Please do not reply to this email</p>

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
        background-color: #c42c2c;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 5px 20px;
        font-size: 16px;
        border-radius: 15px;
        color: #fff;
        letter-spacing: 0.4px;
        white-space: nowrap !important;
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
        font-size: 15px;
      }

      .mailTemplateMainContainer .mailDiv .mailContent .longMessage a {
        text-decoration: none;
        color: yellow;
      }

      .note {
        width: 100%;
        text-align: center;
        font-size: 12px;
        font-weight: 300;
        color: #252525;
        padding: 10px;
      }
      .FooterHeader{
        font-size: 20px;
        }

      @media only screen and (max-width: 768px) {
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
          white-space: nowrap;
        }



        .mailTemplateMainContainer .mailDiv .mailContent .longMessage {
          font-size: 15px;
        }

        .note {
          font-size: 12px;
          color: black !important;
        }
        .FooterHeader{
        font-size: 15px;
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
          <div class="mainMessage">Better Luck Next Time🥺</div>
          <div class="longMessage">
            Dear ${teamLeader},
            <br />
            We hope this email finds you well. We want to express our sincere appreciation for your team's interest and participation in the  VCET Hackathon '23 selection process. The enthusiasm and effort displayed by all the participating teams were truly commendable
            <br />
            While your team wasn't selected this time, we sincerely encourage you to continue refining your skills and look forward to welcoming you to future events. Your dedication to coding and innovation is truly commendable, and we firmly believe in your tremendous potential.
            <br />
            Thank you for your interest in VCET HACKATHON 2023, and we look forward to seeing you in our future events.
            <br>
            Best Regards,
            <br>
            Team Hackathon,
            <br>
            VCET-IT
            <a href="https://vcet-hackathon.web.app" target="_blank"
              >official website</a
            >.
          </div>
        </div>
        <div class="v-text-align" style="font-size: 14px; color: #000000; line-height: 140%; text-align: justify; word-wrap: break-word;">

            <div class="FooterHeader" style=" line-height: 140%; text-align: center; margin: 0px;"><span style=" line-height: 28px;"><strong>For more details</strong></span></div>
          
          <p style="font-size: 14px; line-height: 140%; text-align: center; margin: 0px;">Contact - Ramesh Yadav : +91 9096377491 | Kashish bhanushali : +91 9561650242</p>
          </div><br>
      </div>
      
    </div>
  </body>
  <div class="note">
        This is a system-generated email. Please do not reply to this.
  </div>
</html>`

module.exports = {
    generateVerificationEmail,
    generateTeamSelection,
    generateTeamRejection,

}