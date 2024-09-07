import mongoose from "mongoose";

const ApplicationModel = new mongoose.Schema(
  {
    ApplicantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    JobPostId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobpost",
    },
    postBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
