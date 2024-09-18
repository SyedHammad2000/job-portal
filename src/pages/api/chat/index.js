import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ChatModel from "@/utils/models/ChatModel";
import NextCors from "nextjs-cors";
// import NextCors from "nextjs-cors";
export default async (req, res) => {
  await NextCors(req, res, {
    // Optionssers (IE11, various SmartTVs) choke on 204

    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "https://job-portal-management.netlify.app",
    optionsSuccessStatus: 200, // some legacy brow
  });
  await ConnectDb();

  try {
    //   console.log(userId);
    await Auth(req, res, async () => {
      const chats = await ChatModel.find({
        $or: [{ senderId: req.user._id }, { receiverId: req.user._id }],
      })
        .populate("receiverId")
        .populate("senderId");

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
