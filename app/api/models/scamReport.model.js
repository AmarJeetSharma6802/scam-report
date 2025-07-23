import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  location: String,
  carrier: String,
  lineType: String,
  country: String,

  reports: [
    {
      reason: {
        type: String,
        required: true,
      },
      reportedBy: {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
          required: true,
        },
        name: String,
        email: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const ScamReport = mongoose.models.ScamReport ||
  mongoose.model("ScamReport", reportSchema);

  export default ScamReport