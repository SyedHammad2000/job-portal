import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";
import NextCors from "nextjs-cors";
// import NextCors from "nextjs-cors";
export default async (req, res) => {
  await ConnectDb();
  await NextCors(req, res, {
    // Optionssers (IE11, various SmartTVs) choke on 204

    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "https://job-portal-management.netlify.app",
    optionsSuccessStatus: 200, // some legacy brow
  });
  switch (req.method) {
    case "GET":
      await ChatGet(req, res);
      break;
  }
};

export const ChatGet = async (req, res) => {
  try {
    //   console.log(userId);
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
