const router = require("express").Router();

const {createMeal, updateMeal, deleteMeal, getMealById, getMeals} = require("../controllers/mealCntrl");

router.route("/").get(getMeals).post(createMeal);
router.route("/:id").get(getMealById).put(updateMeal).delete(deleteMeal);

module.exports = router;