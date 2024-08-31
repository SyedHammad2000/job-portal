import mongoose from "mongoose";

const JobPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    postedAt: {
      type: Date,
      default: Date.now,
    },
    company: {
      type: String,
      required: true,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model("JobPost", JobPostSchema);
export default mongoose.models.Jobpost ||
  mongoose.model("Jobpost", JobPostSchema);
