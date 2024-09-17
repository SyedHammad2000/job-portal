import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";

export default async (req, res) => {
  await ConnectDb();
  if (req.method === "GET") {
    try {
      //   console.log(userId);
      await Auth(req, res, async () => {
        const chats = await ChatModel.find({
          $or: [{ senderId: req.user._id }, { receiverId: req.user._id }],
        }).populate("receiverId").populate("senderId");

        if (!chats) {
          return res.status(200).json({ message: "No chat found" });
        }
        res.status(200).send({
          success: true,
          chats,
        });

        return;
      });
    } catch (error) {
      console.log(error, "error in try catch block");
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
