import mongoose from "mongoose";import mongoose from "mongoose";

const PledgeSchema = new mongoose.Schema({
  name: String,
  selfieUrl: String,
  badgeUrl: String,
  pledgeDate: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Pledge || mongoose.model("Pledge", PledgeSchema);
