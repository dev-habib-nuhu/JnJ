import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import deviceRoutes from './routes/devices.js';
import usersRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import {authenticatetoken} from './middlewares/authMiddleware.js';
import connectDB from './config/db.js';

dotenv.config()
connectDB()
const app = express();
app.use(express.json())
app.use(cors())
app.use('/api/devices',authenticatetoken,deviceRoutes)
app.use('/api/users/login',authRoutes)
app.use('/api/users',usersRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{console.log(`Server listening on port ${PORT}`)})