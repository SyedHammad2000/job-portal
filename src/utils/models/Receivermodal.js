import mongoose from "mongoose";

const ReceiverSchema = new mongoose.Schema(
  {
    AppliedFor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Jobpost",
    },
    to: {
      type: String,
    },
    from: {
      type: String,
    },
    message: {
      type: String,
      default: "No message",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Receiver ||
  mongoose.model("Receiver", ReceiverSchema);
