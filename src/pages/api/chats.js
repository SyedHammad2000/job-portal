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
  await ConnectDb();
  await Auth(req, res, async () => {
    if (!req.user._id) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const userId = req.user._id;
    const chats = await ChatModel.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    })
      .populate("receiverId", "name email")
      .populate("senderId", "name email");

    console.log(chats);

    res.status(200).send({
      success: true,
      chats,
    });
  });
};
