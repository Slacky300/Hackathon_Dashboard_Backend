const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async(req,res,next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("Current user is not authenticated");
            }

            req.user = decoded.user;
            next();
        });

        if(!token){
            res.status(401);
            throw new Error("Either user is not authorized or token is missing")
        }
    }
});

const isAdmin = asyncHandler(async(req,res,next) => {
    if(req.user && req.user.isAdmin){
        next();
    }else{
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
});

module.exports = {validateToken, isAdmin};