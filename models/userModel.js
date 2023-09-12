const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
    {
       
        fname: {
            type: String,
            
        },
        lname: {
            type: String,
            
        },
        email: {
            type: String,
            unique: [true, "This email is already in use"],
        },
        phoneNo: {
            type: String,
            unique: [true, "This phone number is already in use"],
        },
        gender: {
            type: String,
            enum: ["male", "female"],
        },
        food:{
            type: String,
            enum: ["Veg", "Non-veg", "Jain"],
        },
        city:{
            type: String,
        },
        isTeamLeader:{
            type: Boolean,
            default: false
        },
        pincode: {
            type: Number,
        },
        state:{
            type: String,
        }, 
        college:{
            type: String,
        },
        dept:{
            type:String,
        },
        inTeam:{
            type: mongoose.Types.ObjectId,
            ref: "Team"
        },
        isVerified: {
            type: Boolean,
            default: false
        },
        verificationToken: {
            type: String,
            default: null
        },
        degree:{
            type:String
        },
        year:{
            type: String,
            enum: ["FE", "SE", "TE", "BE"]
        }
    },
    { timestamps: true }
);




const User = mongoose.model("User", UserSchema);
module.exports = { User, UserSchema };