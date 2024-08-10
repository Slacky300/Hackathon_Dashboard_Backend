const mongoose = require('mongoose');

const mealRecordSchema = new mongoose.Schema({

    meal: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Meal'
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    consumedAt: {
        type: Date,
        required: true
    }

});

module.exports = mongoose.model('MealRecord', mealRecordSchema);