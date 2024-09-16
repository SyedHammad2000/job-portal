// pages/api/socket.js
import { initSocket } from "@/utils/socket/initSocket";
import NextCors from "nextjs-cors";

export default async (req, res) => {
  // ! cors

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "https://job-portal-management.netlify.app/",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (res.socket.server.io) {
    console.log("Socket.IO already initialized");
    return res.end();
  }

  console.log("Initializing Socket.IO");
  initSocket(res.socket.server);
  res.end();
};
