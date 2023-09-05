const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
    {
       
        fname: {
            type: String,
            required: [true, "First name is required"]
        },
        lname: {
            type: String,
            required: [true, "Last name is required"]
        },
        email: {
            type: String,
            required: [true, "Please provide a email"],
            unique: [true, "This email is already in use"],
        },
        phoneNo: {
            type: String,
            required: [true, "Phone number must be provided"],
            unique: [true, "This phone number is already in use"],
        },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: [true, "Gender is required"],
        },
        food:{
            type: String,
            enum: ["Veg", "Non-veg", "Jain"],
            required: [false, "Do you want to starve"]
        },
        city:{
            type: String,
            required: true,
        },
        isTeamLeader:{
            type: Boolean,
            default: false
        },
        pincode: {
            type: Number,
            required: true
        },
        state:{
            type: String,
            required: true,
        }, 
        college:{
            type: String,
            required: true
        },
        dept:{
            type:String,
            required: true
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
        }
    },
    { timestamps: true }
);




const User = mongoose.model("User", UserSchema);
module.exports = { User, UserSchema };