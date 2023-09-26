const Router = require('express');
const {getAllProblems,addProblem,updateProblem,deleteProblem,getSingleProblem,getPreference, fetchAssignedProblems} = require('../controllers/problemCntrl');

const router = Router();

router.route('/').get(getAllProblems).post(addProblem);
router.route('/get-it').get(getPreference)
router.route('/:id').get(fetchAssignedProblems).put(updateProblem).delete(deleteProblem)

module.exports = router;