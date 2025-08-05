import mongoose from "mongoose";

const VisitorSchema = new mongoose.Schema({
  type: String, // "visit", "pledge", "download"
  timestamp: { type: Date, default: Date.now },
  name: String,
  image: String,
});


const VisitorData = mongoose.models.VisitorData || mongoose.model("VisitorData",VisitorSchema)

export default VisitorData