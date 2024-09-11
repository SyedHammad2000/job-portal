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
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  try {
    const changeStream = await Receivermodal.watch();

    changeStream.on("change", (data) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    });

    res.on("close", () => {
      changeStream.close();
      res.end();
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "invalid request",
      success: false,
    });
  }
};
