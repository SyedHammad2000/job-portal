import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ApplicationModel from "@/utils/models/ApplicationModel";
import JobPostSchema from "@/utils/models/JobPostSchema";
// import { connect } from "mongoose";

export default async (req, res) => {
  await ConnectDb();
  try {
    //! params
    const { id } = req.query;

    await Auth(req, res, async () => {
      const { JobPostId, ApplicantId, resume } = req.body;
      const userId = req.user.id;
      const jobId = await JobPostSchema.findById({
        _id: JobPostId,
      });

      if (!jobId) {
        return res.status(400).send({
          message: "Invalid Request",
        });
      }
      if (jobId === userId) {
        return res.status(400).send({
          message: "You can't apply for your own job",
        });
      }

      let application = await new ApplicationModel({
        JobPostId: jobId._id,
        ApplicantId: userId,
        resume,
      });

      await application.save();

      res.status(201).send({
        message: "Application created successfully",
      });
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Invalid Request",
    });
  }
};
