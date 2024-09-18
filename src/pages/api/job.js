import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import JobPostSchema from "@/utils/models/JobPostSchema";
import Usermodel from "@/utils/models/Usermodel";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await ConnectDb();
      JobPost(req, res);
      break;
    case "GET":
      JobGet(req, res);
      break;
    case "GET":
      JobGetById(req, res);
      break;
  }
};

const JobPost = async (req, res) => {
  await ConnectDb();
  try {
    //   !Auth middleware
    Auth(req, res, async () => {
      console.log("auth");

      if (req.method !== "POST") {
        return res.status(400).send({
          message: "Invalid Request",
        });
      }
      const userId = req.user._id;

      const { title, description, company, postedBy, location } = req.body;

      if (!title || !description || !company) {
        return res.status(400).send({
          message: "All fields are required",
        });
      }
      console.log(userId);

      //&   Validation
      const user = await Usermodel.findById({ _id: userId }).populate();
      console.log(user._id);
      const userMatch = (await userId) == user._id;
      console.log(userMatch);

      //&   Add Job Post
      if (userMatch && user.role !== "applicant") {
        const jobpost = new JobPostSchema({
          title,
          description,
          company,
          postedBy: user._id,
          location,
        });

        jobpost.save();

        res.status(200).send({
          message: "Job Post Added Successfully",
          data: jobpost,
          success: true,
        });
      } else {
        res.status(401).send({
          message: "Applicant cannot post job opening",
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "error in job controller" + error,
    });
  }
};

const JobGet = async (req, res) => {
  await ConnectDb();
  try {
    const posts = await JobPostSchema.find({}).populate("postedBy");
    res.status(200).send({
      message: "success",
      posts,
    });
  } catch (error) {
    console.log(error + "in getting job");
    res.status(401).send({
      message: "error in getting jobs" + error,
    });
  }
};

const JobGetById = async (req, res) => {
  const { id } = req.query;

  await JobPostSchema.findById(id);

  res.status(200).send({
    message: "successfully fetched ",
    success: true,
  });
};
