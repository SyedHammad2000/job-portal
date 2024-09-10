import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import ApplicationModel from "@/utils/models/ApplicationModel";
import JobPostSchema from "@/utils/models/JobPostSchema";
import Usermodel from "@/utils/models/Usermodel";
import nodemailer from "nodemailer";
// import { connect } from "mongoose";

export default async (req, res) => {
  await ConnectDb();

  switch (req.method) {
    case "POST":
      await ApplicationPost(req, res);
      break;
    // !Auth apply middleware
    case "GET":
      await ApplicationGet(req, res);
      break;

    case "PUT":
      await ApplicationPut(req, res);
      break;
  }
};

export const ApplicationPost = async (req, res) => {
  await ConnectDb();
  try {
    //! params
    // const { id } = req.query;
    await Auth(req, res, async () => {
      const { JobPostId, ApplicantId, resume, postById, message } = req.body;

      const jobId = await JobPostSchema.findById({
        _id: JobPostId,
      });
      const user = await Usermodel.findOne({ _id: postById });
      console.log(user);
      // console.log(jobId.postedBy._id);

      if (!jobId) {
        return res.status(400).send({
          message: "Invalid Request",
        });
      }

      let application = await new ApplicationModel({
        ApplicantId,
        JobPostId: jobId._id,
        postBy: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        resume,
        message,
        notify: false,
      });

      await application.save();

      console.log(application);

      res.status(201).send({
        message: "Application Sent successfully",
        success: true,
        data: application,
      });
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      message: "Invalid Request",
    });
  }
};

export const ApplicationGet = async (req, res) => {
  try {
    await Auth(req, res, async () => {
      const userId = req.user.id;
      const applications = await ApplicationModel.find({
        postBy: userId,
      })
        .populate("ApplicantId")
        .populate("JobPostId");

      // if (applications.length == 0) {
      //   return res.status(404).send({
      //     success: false,
      //     message: "No applications found",
      //   });
      // }

      res.status(200).send({
        success: true,
        message: "Applications fetched successfully",
        applications,
        userId: userId,
        count: applications.length,
      });
    });
  } catch (error) {
    console.log(error, "error in ApplicationGet method");
    res.status(404).send({
      success: false,
    });
  }
};
