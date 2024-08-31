import ConnectDb from "@/utils/connection/ConnectDb";
import Usermodel from "@/utils/models/Usermodel";

// import {} from "json";
import jwt from "jsonwebtoken";
import NextCors from "nextjs-cors";

const allowedOrigins = [
  "https://job-portal-chi-taupe.vercel.app",
  "https://job-portal-davj.vercel.app",
  "https://job-portal-management.netlify.app", // Add your Netlify URL here
];

export default async (req, res) => {
  await ConnectDb();

  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: allowedOrigins,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401).send({
        message: "All fields are required",
      });
      return;
    }

    const user = await Usermodel.findOne({ email });
    const payload = {
      id: user._id,
    };

    const usermatch = (await user.password) === password;
    const token = jwt.sign(payload, process.env.JWT_TOKEN, {
      expiresIn: "30d",
    });

    if (usermatch) {
      res.status(200).send({
        message: "user login successfully",
        user: user,
        token,
      });
      return;
    } else {
      res.status(401).send({
        message: "user not found",
      });
    }
    //! i want to set cookies
  } catch (error) {
    res.status(400).send({
      message: "error in login controller" + error,
    });
  }
};
