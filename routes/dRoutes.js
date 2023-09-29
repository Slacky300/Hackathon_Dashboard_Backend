const Router = require('express');
const router = Router();

const {getTeamMembDetails} = require('../controllers/userCntrl');
router.route('/:id').get(getTeamMembDetails);


module.exports = router