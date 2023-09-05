const Router = require('express');
const {getAllProblems,addProblem,updateProblem,deleteProblem,getSingleProblem} = require('../controllers/problemCntrl');

const router = Router();

router.route('/').get(getAllProblems).post(addProblem);
router.route('/:id').get(getSingleProblem).put(updateProblem).delete(deleteProblem)

module.exports = router;