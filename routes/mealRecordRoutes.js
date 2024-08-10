const router = require("express").Router();

const {createMealRecord, getAvailableMealsForAUser, getMealRecordById, getUserMealStatistics} = require("../controllers/mealRecordCntrl");

router.route("/").post(createMealRecord);
router.route("/:id").get(getAvailableMealsForAUser);
router.route("/record/:id").get(getMealRecordById);
router.route("/stats/:id").get(getUserMealStatistics);

module.exports = router;