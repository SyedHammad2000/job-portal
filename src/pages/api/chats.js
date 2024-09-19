import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";

export default async (req, res) => {
  try {
    // Establish database connection
    await ConnectDb();

    // Authenticate user
    await Auth(req, res, async () => {
      if (!req.user || !req.user._id) {
        return res.status(401).send({ message: "Unauthorized" });
      }

      const userId = req.user._id;

      // Fetch chats involving the authenticated user
      const chats = await ChatModel.find({
        // $or: [{ senderId: userId }, { receiverId: userId }],
      })
        .populate("receiverId", "name email")
        .populate("senderId", "name email")
        .limit(1);

      // Send the chat data in the response
      res.status(200).send({
        success: true,
        chats,
      });
    });
  } catch (error) {
    console.error("Error fetching chats:", error);
    res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};
