import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";
import { initSocket } from "@/utils/socket/initSocket";
import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_APP_CLUSTER,
  useTLS: true,
});

export default async (req, res) => {
  await ConnectDb();

  await ConnectDb();
  switch (req.method) {
    case "POST":
      await ChatCreatePost(req, res);
      break;

    case "GET":
      await ChatGet(req, res);
      break;
  }
};

export const ChatGet = async (req, res) => {
  await ConnectDb();
  try {
    await Auth(req, res, async () => {
      const { id } = req.query;
      const senderId = req.user._id;
      const chat = await ChatModel.findOne({
        $or: [
          { senderId: senderId, receiverId: id },
          { senderId: id, receiverId: senderId },
        ],
      }).sort({ createdAt: -1 });

      if (!chat) {
        return res.status(200).send({
          success: false,
        });
      }

      res.status(200).send({
        success: true,
        chat,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "error in chat controller",
      success: false,
    });
  }
};
export const ChatCreatePost = async (req, res) => {
  await ConnectDb();
  try {
    await Auth(req, res, async () => {
      //! implement socket
      const { text } = req.body;
      const { id } = req.query;
      const userId = req.user._id;
      let chat = await ChatModel.findOne({
        $or: [
          { senderId: userId, receiverId: id },
          { senderId: id, receiverId: userId },
        ],
      });
      if (chat) {
        chat.messages.push({
          text,
          timestamp: new Date(),
          sender: req.user.name,
        });

        const Channelname = `abc`;
        const push = await pusher.trigger(Channelname, "newMessage", {
          sender: userId,
          text,
          timestamp: new Date(),
        });
        await chat.save();
        res.status(200).send({
          success: true,
          chat,
          push,
        });
      }
      if (!chat) {
        const chat = await new ChatModel({
          senderId: req.user._id,
          receiverId: id,
          messages: [
            { text: text, timestamp: new Date(), sender: req.user.name },
          ],
        });
        await chat.save();

        return res.status(200).send({
          success: true,
          msg: "chat is created",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "error in chat controller",
      success: false,
    });
  }
};
