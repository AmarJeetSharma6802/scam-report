import mongoose from "mongoose";

const roadSafetyHerosSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
});


const roadSafetyHerosSchemaData = mongoose.model.roadSafetyHerosSchemaData || mongoose.models("roadSafetyHerosSchemaData",roadSafetyHerosSchema)

export default roadSafetyHerosSchemaData