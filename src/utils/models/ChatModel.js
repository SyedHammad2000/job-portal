import receiver from "@/pages/api/receiver/receiver";
import mongoose from "mongoose";

const ChatModel = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  messages: [
    // Array of message objects
    {
      text: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now,
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
});

export default mongoose.models.Chat || mongoose.model("Chat", ChatModel);
