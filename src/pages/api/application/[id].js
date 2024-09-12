import { Auth } from "@/utils/middleware/auth";
import ApplicationModel from "@/utils/models/ApplicationModel";

export default async (req, res) => {
  switch (req.method) {
    case "DELETE":
      await ApplicationDel(req, res);
      break;
  }
};

export const ApplicationDel = async (req, res) => {
  const { id } = req.query;
  await ApplicationModel.findByIdAndDelete(id);
  res.status(200).send({
    message: "Success",
    success: true,
  });
};
