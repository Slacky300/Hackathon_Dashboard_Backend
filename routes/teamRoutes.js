const Router = require('express');
const {teamJsonResp, addTeam, deleteTeam, getShortListedTeams,updateTeam,shortListTeam, removeTeamFromDb, removeAssignedProblem, getSingleTeam,exportTeam, unShortListTeam, assignProblem} = require('../controllers/teamCntrl');
const {User} = require("../models/userModel")
const {Team} = require("../models/teamModel")
const {sendVerificationStatus} = require('../utils/email')
const router = Router();

router.route('/').get(teamJsonResp).post(addTeam);
router.route('/get-selected-teams').get(getShortListedTeams);
router.route('/csv').get(exportTeam)
router.route('/:email').get(getSingleTeam)
router.route('/:id').put(updateTeam).delete(deleteTeam);
router.route('/select-teams').patch(shortListTeam);
router.route('/unselect-teams').patch(unShortListTeam);
router.route('/assign-problem').patch(assignProblem);
router.route('/remove-assigned-problem').patch(removeAssignedProblem)
router.route('/disqualify-team').patch(removeTeamFromDb)

router.get('/verifyemail/:tokenId', async (req, res) => {
    const tokenId = req.params.tokenId;
    try {

        const user = await User.findOne({ verificationToken: tokenId });

        if (!user) {
            res.status(404);
            throw new Error("User not found");
        }
        user.isVerified = true;
        user.verificationToken = null;
        await user.save();
        const team = await Team.findOne({leader: user});
        if(!team){
            res.status(404).json({"message": "Team does not exists with this user"})
        }
        team.isVerified = true;
        await team.save()
        for (const user of team.members) {
            const userm = await User.findById(user)
            await sendVerificationStatus(userm.email, team.name, team.members)
        }

        res.status(200).json({ message: "Team verified successfully" });


    } catch (error) {
        res.status(500).json({ message: "Error verifying user", error: error.message });
    }

})
module.exports = router;