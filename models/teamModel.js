const mongoose = require("mongoose");


const TeamSchema = mongoose.Schema({

    
  
    name: {
        type: String,
        unique: [true, "Team name is already taken"],
        required: [true, "Must be provided"]
    },

    leader: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "leader must be provided"]
    },

    members: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],

    problemPreference: [{
        problems: {
            type: mongoose.Types.ObjectId,
            ref: "Problem"
        },

        abstract: {
            type: String,
            required: true
        },

        preferenceNumber:{
            type: Number,
            enum: [1,2,3,4,5],
            required: true

        },
        techStack: {
            type: String,
            required: false
        }
    }],

    isSelected: {
        type: Boolean,
        default: false
    },
    hasPaid:{
        type: Boolean,
        default: false
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    techStack:{
        type: String,
        required: [false, "Tech stack required"]
        
    },
    selectedProblem: {
        
        id:{
            type: mongoose.Types.ObjectId,
            ref: "Problem"
        },
        name: {
            type:String
        },
        abstract: {
            type: String
        }
       
    }
},
    { timestamps: true }
);



const Team = mongoose.model("Team", TeamSchema)

module.exports = { Team, TeamSchema }