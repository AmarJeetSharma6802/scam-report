import mongoose from "mongoose";
import { type } from "os";

const userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    image:{
        type:String,
        required:true,
        },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    refreshToken:{
        type:String
    }
},
{
    timestamps:true
})


const user = mongoose.models.user || mongoose.model("user",userschema)

export default user