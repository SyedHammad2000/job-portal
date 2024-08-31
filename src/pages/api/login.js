import ConnectDb from "@/utils/connection/ConnectDb";
import Usermodel from "@/utils/models/Usermodel";
// import {} from "json";
import jwt from "jsonwebtoken";

export default async (req, res) => {
  await ConnectDb();
  res.header(
    "Access-Control-Allow-Origin",
    "https://job-portal-davj.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }

  //! get method
  // if (req.method !== "POST") {
  //   res.status(400).send({
  //     message: "Invalid Request",
  //   });
  //   return;
  // }
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
