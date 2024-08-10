const router = require("express").Router();

const {createMeal, updateMeal, deleteMeal, getMealById, getMeals} = require("../controllers/mealCntrl");
const {validateToken, isAdmin} = require('../middleware/validateToken')

router.route("/").get(getMeals).post(validateToken, isAdmin, createMeal);
router.route("/:id").get(validateToken, isAdmin, getMealById).put(validateToken, isAdmin, updateMeal).delete(validateToken, isAdmin, deleteMeal);

module.exports = router;