import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  type: String, // "visit", "pledge", "download"
  timestamp: { type: Date, default: Date.now },
  name: String,
  image: String,
});


const VisitorData = mongoose.model.VisitorData || mongoose.models("VisitorData",VisitorSchema)

export default VisitorData