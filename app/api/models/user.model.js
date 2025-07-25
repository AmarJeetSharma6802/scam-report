import mongoose from "mongoose";

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
    password: {
    type: String,
    trim: true,
    required: function () {
        return this.provider === "manual";
    }
},
    refreshToken:{
        type:String
    },
     provider: { type: String, default: "manual" },
},
{
    timestamps:true
})


const user = mongoose.models.user || mongoose.model("user",userschema)

export default user