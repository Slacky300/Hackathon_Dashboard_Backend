const mongoose = require("mongoose");

const ProblemSchema = mongoose.Schema({


    title: {
        type: String,
        required: [true, "Title is required"]
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },

    preferences: [{
        team: {
            type: mongoose.Types.ObjectId,
            ref: "Team",
            required: true
        },
        preferenceOrder: {
            type: Number,
            required: true
        }
    }],
    keyPoints: [String],
    image: {
        type: String,
        required: false
    }
},
    { timestamps: true }
);









const Problem = mongoose.model("Problem", ProblemSchema);

module.exports = { Problem, ProblemSchema };
