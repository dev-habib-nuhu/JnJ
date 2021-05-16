import Device from '../models/devices.js';
import mongoose from 'mongoose';

export const getAllDevices= async (req,res)=>{
    let devices = [];
    try{
        devices = await Device.find({})
        res.status(200).json({status:true,data:devices})
    }
    catch(err){
        console.log('Error fetching device list',err.message)
        res.status(500).json({status:false,data:devices})
    }
}

export const getDevice = async (req,res)=>{
    try{
        let device_id = req.params.id;
        let device = await Device.findById(device_id)
        res.status(200).json({status:true,data:device})
    }
    catch(err){
        console.log('Error fetching device list',err.message)
        res.status(500).json({status:false,message:'Some Internal error occured'})
    }
}

export const addDevice = async (req,res)=>{
    let device = req.body;
    let new_device = new Device(device);
    try{
        await new_device.save()
        res.status(201).json({status:true,message:'Device added successfully.'})
    }
    catch(err){
        console.log('Error fetching device list',err.message)
        res.status(500).json({status:true,message:'Error occurred while adding device.'})
    }
}


export const updateDevice = async (req,res)=>{
    try{
        const {id:_id} = req.params;
        const device = req.body;

        if (!mongoose.Types.ObjectId.isValid(_id)){
            res.status(404).json({status:false,message:'Error updating record, Invalid Id'})
        }
        const updated_device = await Device.findByIdAndUpdate(_id,device,{new:true})
        res.status(201).json({status:true,data:updated_device,message:'Device record updated successfully.'})
    }
    catch(err){
        console.log('Error updating device ',err.message)
        res.status(500).json({status:false,message:'Error occurred while updating device.'})
    }
}


export const deleteDevice = async (req,res)=>{
    try{
        const id = req.params.id;
        console.log('ID',req.params)
        if (!mongoose.Types.ObjectId.isValid(id)){
            res.status(404).json({status:false,message:'Error deleting record, Invalid Id'})
        }
        else{
        await Device.findByIdAndRemove(id)
        res.status(201).json({status:true,message:'Device has been deleted successfully.'})
        }
    }
    catch(err){
        console.log('Error deleting device ',err.message)
        res.status(500).json({status:false,message:'Error occurred while deleting device.'})
    }
}