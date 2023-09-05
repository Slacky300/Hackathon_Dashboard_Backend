const Router = require('express');
const {getAllUsers, addUser, deleteUser, updateUser,getSingleUser,userDataToCsv, getUsersByFoodPreference, getAllColleges} = require('../controllers/userCntrl');
const {registration} = require('../controllers/registrationCntrl')

const router = Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/get_user_csv').get(userDataToCsv);
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/register').post(registration);
router.route('/filter-by-food').post(getUsersByFoodPreference)
router.get('getcolleges', getAllColleges)
module.exports = router;
