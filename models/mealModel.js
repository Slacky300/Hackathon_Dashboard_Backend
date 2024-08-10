const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    beginTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],

});

module.exports = mongoose.model('Meal', mealSchema);