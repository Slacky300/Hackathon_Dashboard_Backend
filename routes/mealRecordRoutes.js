const router = require("express").Router();

const {createMealRecord, getAvailableMealsForAUser, getMealRecordById, getUserMealStatistics, getDashboardData} = require("../controllers/mealRecordCntrl");
const {validateToken, isAdmin} = require('../middleware/validateToken')

router.route("/").post(validateToken, isAdmin, createMealRecord);
router.route("/stats").get(getDashboardData);
router.route("/:id").get(validateToken, isAdmin, getAvailableMealsForAUser);
router.route("/record/:id").get(validateToken, isAdmin, getMealRecordById);
router.route("/stats/:id").get(validateToken, getUserMealStatistics);

module.exports = router;