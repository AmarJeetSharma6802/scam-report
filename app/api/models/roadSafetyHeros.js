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


const roadSafetyHeroesSchemaData = mongoose.models.roadSafetyHerosSchemaData || mongoose.model("roadSafetyHerosSchemaData",roadSafetyHerosSchema)

export default roadSafetyHeroesSchemaData