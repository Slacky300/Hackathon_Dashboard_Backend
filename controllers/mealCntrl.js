const Meal = require('../models/mealModel');
const asyncHandler = require('express-async-handler');

const createMeal = asyncHandler(async (req, res) => {
    const { name, beginTime, endTime } = req.body;

    const meal = new Meal({
        name,
        beginTime,
        endTime
    });

    await meal.save();
    res.status(201).json({ message: 'Meal created successfully', meal });
});

const getMeals = asyncHandler(async (req, res) => {
    const meals = await Meal.find({});
    res.json(meals);
});

const getMealById = asyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    if (meal) {
        res.json(meal);
    } else {
        res.status(404);
        throw new Error('Meal not found');
    }
});

const updateMeal = asyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    if (meal) {
        meal.name = req.body.name || meal.name;
        meal.beginTime = req.body.beginTime || meal.beginTime;
        meal.endTime = req.body.endTime || meal.endTime;

        const updatedMeal = await meal.save();
        res.json({ message: 'Meal updated successfully', meal: updatedMeal });
    } else {
        res.status(404);
        throw new Error('Meal not found');
    }
});

const deleteMeal = asyncHandler(async (req, res) => {
    const meal = await Meal.findById(req.params.id);
    if (meal) {
        await meal.remove();
        res.json({ message: 'Meal deleted successfully' });
    } else {
        res.status(404);
        throw new Error('Meal not found');
    }
});

module.exports = { createMeal, getMeals, getMealById, updateMeal, deleteMeal };