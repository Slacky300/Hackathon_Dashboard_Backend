const MealRecord = require('../models/mealRecords');

const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const Meal = require('../models/mealModel');

const createMealRecord = asyncHandler(async (req, res) => {

    const { meal, user } = req.body;

    const userExists = await User.findById(user);

    if (!userExists) {
        res.status(404);
        throw new Error('User not found');
    }

    const mealExists = await Meal.findById(meal);

    if (!mealExists) {
        res.status(404);
        throw new Error('Meal not found');
    }

    const mealRecord = new MealRecord({
        meal,
        user,
        consumedAt: new Date()
    });

    await mealRecord.save();
    res.status(201).json({ message: 'Meal record created successfully', mealRecord });
}

);

const getAvailableMealsForAUser = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;

    const user = await User.findById
        (userId);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const mealRecords = await MealRecord.find({ user: userId });
    const meals = await Meal.find({ _id: { $nin: mealRecords.map((mealRecord) => mealRecord.meal) } });

    res.json(meals).status(200);

});


const getMealRecordById = asyncHandler(async (req, res) => {
    const mealRecord = await MealRecord.findById(req.params.id).populate('meal user');
    if (mealRecord) {
        res.json(mealRecord);
    } else {
        res.status(404);
        throw new Error('Meal record not found');
    }
});


const getUserMealStatistics = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;

    const user = await User.findById(userId);
    if (!user) {
        res.status(404);
        throw new Error('User not found');
    }

    const mealRecords = await MealRecord.find({ user: userId });
    const mealIds = mealRecords.map((mealRecord) => mealRecord.meal);

    const meals = await Meal.find({ _id: { $in: mealIds } });

    let mealStatistics;

    if (meals.length > 0) {
        mealStatistics = meals.reduce((acc, meal) => {
            const record = mealRecords.find(record => record.meal.toString() === meal._id.toString());
            const consumedAt = record?.consumedAt;

            if (consumedAt) {
                const timeElapsed = Math.floor((Date.now() - new Date(consumedAt).getTime()) / 1000); // time in seconds

                let timeMessage;
                if (timeElapsed < 60) {
                    timeMessage = `${timeElapsed} seconds ago`;
                } else if (timeElapsed < 3600) {
                    timeMessage = `${Math.floor(timeElapsed / 60)} minutes ago`;
                } else {
                    timeMessage = `${Math.floor(timeElapsed / 3600)} hours ago`;
                }

                acc[meal.name] = acc[meal.name] || { count: 0, lastConsumed: timeMessage };
                acc[meal.name].count += 1;
            } else {
                acc[meal.name] = acc[meal.name] || { count: 0, lastConsumed: "Never" };
            }

            return acc;
        }, {});
    } else {
        const allMeals = await Meal.find({});
        mealStatistics = allMeals.reduce((acc, meal) => {
            acc[meal.name] = { count: 0, lastConsumed: "Never" };
            return acc;
        }, {});
    }

    res.status(200).json(mealStatistics);
});


module.exports = { createMealRecord, getAvailableMealsForAUser, getMealRecordById, getUserMealStatistics };

