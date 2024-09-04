import mongoose from "mongoose";

const ApplicationModel = new mongoose.Schema(
  {
    JobPostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobpost",
    },
    ApplicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    resume: {
      //! file type must be pdf
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationModel);
