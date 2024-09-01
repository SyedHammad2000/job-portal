import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import JobPostSchema from "@/utils/models/JobPostSchema";
import Usermodel from "@/utils/models/Usermodel";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await ConnectDb();
      JobGetById(req, res);
      break;
  }
};

const JobGetById = async (req, res) => {
  const { id } = req.query;
  console.log(id);

  const post = await JobPostSchema.findById({ _id: id })
    .populate("postedBy")
    .select("-password -email ");

  res.status(200).send({
    message: "successfully fetched ",
    success: true,
    post,
  });
};
