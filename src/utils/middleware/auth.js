import jwt from "jsonwebtoken";

export const Auth = async (req, res, next) => {
  const Authheader = await req.headers.authorization;
  try {
    if (Authheader) {
      const token = await Authheader.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_TOKEN);
      req.user = decode;
      next();
    }
  } catch (error) {
    console.log("error in Auth middleware" + error);
  }
};
