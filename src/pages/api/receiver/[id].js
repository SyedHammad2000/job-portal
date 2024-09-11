import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import JobPostSchema from "@/utils/models/JobPostSchema";
import Receivermodal from "@/utils/models/Receivermodal";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await ReceiverGet();
      break;

    case "POST":
      await ReceiverPost(req, res);
      break;

    case "DELETE":
      await ReceiverDelete(req, res);
      break;
  }
};

export const ReceiverPost = async (req, res) => {
  await ConnectDb();
  try {
    await Auth(req, res, async () => {
      const { id } = req.query;
      const { to, message } = req.body;
      const useremail = req.user.email;
      const postmatch = await JobPostSchema.findById({ _id: id });
      console.log(postmatch);

      if (!postmatch) {
        return res.status(400).send({
          message: "Job Unidentified",
          success: false,
        });
      }
      const receiver = await new Receivermodal({
        AppliedFor: postmatch._id,
        to,
        from: useremail,
        message,
      });
      await receiver.save();

      return res.status(200).send({
        message: "Success",
        success: true,
        receiver,
      });
    });
  } catch (error) {
    res.status(400).send({
      message: "Invalid Request",
      success: false,
    });
  }
};

export const ReceiverDelete = async (req, res) => {
  await ConnectDb();
  const { id } = req.query;
  const receiver = await Receivermodal.findByIdAndDelete({
    _id: id,
  });
  res.send({ receiver });
};
