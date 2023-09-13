const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel')
const { Team } = require('../models/teamModel');
const { Parser } = require('json2csv');



const getAllUsers = asyncHandler(async (req, res) => {
    const registered_members = await User.find({});
    let users = [];
    for(const user of registered_members){
        const team = await Team.findById(user.inTeam);
        users.push({
            'fname': user.fname,
            'lname': user.lname,
            'email': user.email,
            'phoneNo': user.phoneNo,
            'inTeam': team.name,
            "college": user.college,
            "city": user.city,
            "degree": user.degree,
            "year": user.year
        })
    }
    res.status(200).json(registered_members);
});



const addUser = asyncHandler(async (req, res) => {

    const {
        fname,
        lname,
        email,
        phoneNo,
        gender,
        food,
        dept,
        city,
        pincode,
        college,
        degree

    } = req.body;

    try {
        //check the existing user
        existingUser = await User.find({ email: email });
        if (existingUser) {
            return res.status(400).json({message: "User already exists"});
           
        }

       

        const newUser = new User({

            fname,
            lname,
            email,
            phoneNo,
            gender,
            dept,
            food,
            city,
            pincode,
            college,
            degree

        });



        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400);
        throw new Error("Failed to register" + error)
    }
});

const updateUser = asyncHandler(async (req, res) => {


    const { id: userId } = req.params;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.status(200).json(updatedUser);

});

const userDataToCsv = asyncHandler(async (req, res) => {
    try {
        let users = [];
        const allUsers = await User.find({});

        for (const user of allUsers) {
            const { fname, lname, email, phoneNo, gender, food, state, city, pincode, dept, inTeam } = user;
            const team = await Team.findById({ _id: inTeam });
            const teamName = team ? team.name : '';

            users.push({
                "First Name": fname,
                "Last Name": lname,
                "Email": email,
                "Team Name": teamName,
                "Phone no.": phoneNo,
                "Gender": gender,
                "State": state,
                "City": city,
                "Pin Code": pincode,
                "Department": dept
            });
        }

        const userHeaders = ["First Name", "Last Name", "Email", "Team Name", "Phone no.", "Gender", "State", "City", "Pin Code", "Department"];
        const json2csvParser = new Parser({ fields: userHeaders });

        const csv = json2csvParser.parse(users);

        res.setHeader("Content-Type", "text/csv");
        res.setHeader("Content-Disposition", "attachment; filename=userData.csv");

        res.status(200).send(csv); // Use send() instead of end()

    } catch (error) {
        res.status(500).json({ error: "Error occurred: " + error.message });
    }
});


const deleteUser = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;

    try {
        const existing_user = await User.findById(userId);
        if (!existing_user) {
            res.status(404);
            throw new Error("User not found");
        }

        const team = await Team.findById(existing_user.inTeam);
        if (team) {
            await team.members.pull(existing_user);
            await team.save();
        }

        await User.deleteOne({ _id: userId })

        res.status(204).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});

const getSingleUser = asyncHandler(async (req, res) => {
    const { id: userId } = req.params;
    const existing_user = await User.findById(userId);
    if (!existing_user) {
        res.status(404);
        throw new Error("User does not exists");
    }
    res.status(200).json(existing_user);
})


async function getUsersByFoodPreference(req, res) {
    try {
      const { food, city, college } = req.body;

      // Build a filter object based on the provided criteria
      const filter = {};
      if (food) {
        filter.food = food;
      }
      if (city) {
        filter.city = city;
      }
      if (college) {
        filter.college = college;
      }
  
      const users = await User.find(filter).select('fname lname email food city college');

    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found with the specified criteria.' });
    }

    // Return the filtered users in the response
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
  }
  

const getAllColleges = asyncHandler(async (req, res) => {
    console.log("hello-")
    const colleges = await User.find().distinct('colleges');
    console.log("hello")
    
    // if (colleges.length === 0) {
    //   return res.status(404).json({ message: 'No colleges found.' });
    // }
    
    res.status(200).json({'colleges': colleges});
  });


  const getUsersByCollege = asyncHandler(async(req,res) => {
    console.log('hello')
    const {college,city, inTeam} = req.body;
    const filter = {}
    let users = []
    if(college){
        filter.college = college
    }
    if(city){
        filter.city = city
    }
    if(inTeam){
        filter.inTeam = inTeam
    }
    const filtere_users = await User.find(filter)
    for(const user of filtere_users){
        const team = await Team.findById(user.inTeam);
        users.push({
            'fname': user.fname,
            'lname': user.lname,
            'email': user.email,
            'phoneNo': user.phoneNo,
            'inTeam': team.name,
            "college": user.college,
            "city": user.city,
            "degree": user.degree
        })
    }
    if(!college && !city && !inTeam){
        getAllUsers(req,res)
        return
    }else{
        return res.status(200).json(users)
    }
  })
  
 
  
  
  

  
 
  
  
  
  
  
  

module.exports = { getAllUsers, getUsersByCollege, addUser, deleteUser, updateUser, getSingleUser, getAllColleges ,userDataToCsv, getUsersByFoodPreference}