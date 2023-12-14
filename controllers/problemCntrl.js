const asyncHandler = require('express-async-handler');
const { Problem } = require('../models/problemModel');
const {Team} = require('../models/teamModel')

const getAllProblems = asyncHandler(async (req, res) => {
    const problems = await Problem.find({});
    res.status(200).json(problems);
});


const addProblem = asyncHandler(async (req, res) => {

    const { title, description, keyPoints } = req.body;
    
    try {
        // const newProblem = new Problem({
            
        //     title,
        //     description,
        //     keyPoints
        // });

        // const savedProblem = await newProblem.save();
        const savedProblem = await Problem.insertMany(req.body);
        res.status(201).json(savedProblem);
    } catch (error) {
        res.status(400);
        throw new Error("Failed to execute")
    }
});


const updateProblem = asyncHandler(async(req,res)=>{

    const {id: problmId} = req.params;
    const problemToUpdate =  await Problem.findById(problmId);
    if(!problemToUpdate){
        res.status(404);
        throw new Error("Problem does not exists");
    }
    const {title, keyPoints, description} = req.body;
    problemToUpdate.title = title,
    problemToUpdate.keyPoints = keyPoints,
    problemToUpdate.description = description

    const updatedProblem = await problemToUpdate.save();
    res.status(200).json(updatedProblem);

});

const getSingleProblem = asyncHandler(async(req,res) => {
    const {id: problmId} = req.params;
    const existingProblem =  await Problem.findById(problmId);
    if(!existingProblem){
        res.status(404);
        throw new Error("Problem does not exists");
    }
    res.status(200).json(existingProblem)
});

const deleteProblem = asyncHandler(async (req, res) => {
    const { id: problemId } = req.params;

    try {
        const problemToDelete = await Problem.findById(problemId);
        if (!problemToDelete) {
            return res.status(404).json({ message: "Problem not found" });
        }

       
        for (const preference of problemToDelete.preferences) {
            const team = await Team.findById(preference.team);
            if (team) {
                team.problemPreference = team.problemPreference.filter(p => p.problems.toString() !== problemId);
                await team.save();
            }
        }

        await Problem.deleteOne({ _id: problemId });
        res.status(204).json({ message: "Problem deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting problem", error: error.message });
    }
});

const getPreference = asyncHandler(async (req, res) => {
    const dataFrame = [];
    const problem = await Problem.find({});
    
    for (const prob of problem) {
        const dataset = []; // Initialize dataset for each problem
        
        for (const pref of prob.preferences) {
            const team = await Team.findById(pref.team);
            if (!team) {
                continue;
            }
            // Reverse the preference score: 1 becomes 5, 2 becomes 4, and so on
            
            dataset.push({
                'teamsTook': team.name,
                'preferenceGiven': 6 - pref.preferenceOrder
            });
        }
        
        dataFrame.push({
            'problemTitle': prob.title,
            'data': dataset
        });
    }
    
    res.status(200).json(dataFrame);
});

const fetchAssignedProblems = asyncHandler(async(req,res) => {
    const idu = req.params.id;
    
    const team = await Team.findById(idu);
    if(!team){
        res.status(404).json({message: "Team not found"})
    }
    const data = {
        "name": team.selectedProblem.name,
        "abstract": team.selectedProblem.abstract
    };
    res.status(200).json(data);
})

module.exports = { getAllProblems, addProblem, updateProblem,deleteProblem,getSingleProblem,getPreference,fetchAssignedProblems};
