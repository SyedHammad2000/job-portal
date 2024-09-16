import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";

export default async (req, res) => {
  await ConnectDb();
  if (req.method === "POST") {
    try {
      const { id,message } = req.body;

      //   console.log(userId);
      await Auth(req, res, async () => {
        req.user._id;
        const chat = await new ChatModel({
          senderId: req.user._id,
          receiverId: id,
          messages: [{ text:message, timestamp: new Date(), sender: req.user._id }],
        });
        res.status(200).send({
          success: false,
          chat,
        });

        await chat.save();

        return;
      });
    } catch (error) {
      console.log(error, "error in try catch block");
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
