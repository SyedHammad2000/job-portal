import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";

export default async (req, res) => {
  await ConnectDb();

  switch (req.method) {
    case "GET":
      await ChatGet(req, res);
      break;
  }
};

export const ChatGet = async (req, res) => {
  try {
    await Auth(req, res, async () => {
      if (!req.user._id) {
        return res.status(401).send({ message: "Unauthorized" });
      }

      const chats = await ChatModel.find({
        $or: [{ senderId: req.user._id }, { receiverId: req.user._id }],
      })
        .populate("receiverId")
        .populate("senderId");
      console.log(chats);

      res.status(200).send({
        success: true,
        chats,
      });
    });
  } catch (error) {
    console.log(error, "error in try catch block");
    res.status(401).send({ message: "Internal Server Error" });
  }
};
