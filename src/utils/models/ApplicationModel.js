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
      //! file
      type: String,
      default:
        " https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Application ||
  mongoose.model("Application", ApplicationModel);
