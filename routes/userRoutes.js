const Router = require('express');
const {getAllUsers, addUser, deleteUser, updateUser,getSingleUser,userDataToCsv, getUsersByFoodPreference, getAllColleges, getUsersByCollege} = require('../controllers/userCntrl');
const {registration} = require('../controllers/registrationCntrl')

const router = Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/get_user_csv').get(userDataToCsv);
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/register').post(registration);
router.route('/filter-by-food').post(getUsersByFoodPreference)
router.route('/getcolleges').get(getAllColleges)
router.post('/filter-users',getUsersByCollege)
module.exports = router;
