import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
//Verify access token
export const authenticatetoken = (req,res,next) =>{
    let token = req.headers?.authorization?.split(' ')[1] || null
    if(token != null){
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err){
                console.log('Error occurred verifying token');
                res.status(403).json({status:false,message:'Authentication is required'});
            }
            else{
                req.user = user;
                next();
            }
        })
    }
    else{
        res.status(401).json({status:false,message:'Authentication is required'});
    }
}