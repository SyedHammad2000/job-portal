import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import JobPostSchema from "@/utils/models/JobPostSchema";
import Receivermodal from "@/utils/models/Receivermodal";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await ReceiverGet(req, res);
      break;

    case "POST":
      break;
  }
};

export const ReceiverGet = async (req, res) => {
  await ConnectDb();
  try {
    await Auth(req, res, async () => {
      const useremail = req.user.email;
      const receiver = await Receivermodal.find({ to: useremail }).populate(
        "AppliedFor"
      );

      res.status(200).send({
        message: "success",
        success: true,
        receiver,
      });

      
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "invalid request",
      success: false,
    });
  }
};
