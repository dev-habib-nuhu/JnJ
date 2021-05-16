import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

export const createUser = async (req,res)=>{

    try{
        let user = req.body;
            const {username,email} = req.body;
            let username_exist = await User.findOne({username});
            let email_exist = await User.findOne({email});

            if (username_exist){
                res.status(200).json({status:false,message:'The username is already registered'});
            }
            else if (email_exist){
                console.log('Email is registered')
                res.status(200).json({status:false,message:'The Email address is already registered'});
            }
            else{
                let password = req.body.password;
                let salt = await bcrypt.genSalt();
                let hashed_password = await bcrypt.hash(password,salt)
                user = {...user,password:hashed_password}
                let new_user = new User(user);
                await new_user.save()
                res.status(201).json({status:true,message:'Account created successfully.'});
            }
    }
    catch(err){
        console.log('Error creating account ',err.message)
        res.status(500).json({status:false,message:'Error occurred while creating account.'})
    }
}

export const getAllUsers = async (req,res)=>{
    let users = [];
    try{
        users = await User.find({})
        res.status(200).json({status:true,data:users})
    }
    catch(err){
        console.log('Error fetching users',err.message)
        res.status(500).json({status:false,data:users})
    }
}

export const getUser = async (req,res)=>{
    try{
        let user_id = req.params.id;
        let user = await User.findById(user_id);
        res.status(200).json({status:true,data:user})
    }
    catch(err){
        console.log('Error fetching user',err.message)
        res.status(500).json({status:false,message:'Some Internal error occured'})
    }
}

export const authenticateUser = async (req,res)=>{
    try{
        const {username,password} = req.body;
        let user = await User.findOne({username:username})
        if (user){
            let hashed_password = user.password
            if(await bcrypt.compare(password,hashed_password)){
                user = {fullname:user.fullname,user:user.username,email:user.email}
                //Create Json web token
                const access_token = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
                res.status(200).json({status:true,data:user,access_token,message:'Logged in successfully.'});
            }
            else{
                res.status(200).json({status:false,message:'Invalid login details.'});
            }
        }
        else{
            res.status(200).json({status:false,message:'Invalid login details.'});
        }
    }
    catch(err){
        console.log('Error logging in ',err.message)
        res.status(500).json({status:false,message:'Error occurred while logging in.'})
    }
}