import mongoose from "mongoose";
const MONGO_URI =
  "mongodb+srv://hammadimran260:eg39IcZ6A3ZIJaxz@chat.mp1sb.mongodb.net/?retryWrites=true&w=majority&appName=Chat";
const ConnectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  await mongoose.connect(MONGO_URI);
  console.log(MONGO_URI);
};
export default ConnectDb;
