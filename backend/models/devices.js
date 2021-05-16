import mongoose from 'mongoose';

//Create Device Schema

const deviceSchema = mongoose.Schema({
    device:{
        type:String,
        required:true
    },
    os:{
        type:String,
        required:true
    },
    manufacturer:{
        type:String,
        required:true
    },
    lastCheckedOutDate:{
        type:Date,
        default:Date.now()
    },
    lastCheckedOutBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:false
    },
    isCheckedOut:{
        type:Boolean,
        default:false
    }
})

const Device = mongoose.model('Device',deviceSchema);
export default Device;