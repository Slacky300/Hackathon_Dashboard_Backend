const Router = require('express');
const {getAllUsers, loginUser, addUser, deleteUser, updateUser,getSingleUser,userDataToCsv, getUsersByFoodPreference, getAllColleges, getUsersByCollege} = require('../controllers/userCntrl');
const {registration} = require('../controllers/registrationCntrl')
const {validateToken} = require('../middleware/validateToken')
const { generateQR, validateQr } = require('../controllers/foodCntrl');

const router = Router();

router.route('/').get(getAllUsers).post(addUser);
router.route('/get_user_csv').get(userDataToCsv);
router.route('/getcolleges').get(getAllColleges)
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);
router.route('/register').post(registration);
router.route('/filter-by-food').post(getUsersByFoodPreference)
router.post('/filter-users',getUsersByCollege)
router.post('/login', loginUser);
router.post('/generate-qr',validateToken, generateQR);
router.get('/validate-qr/:qrvalue', validateQr);
module.exports = router;
