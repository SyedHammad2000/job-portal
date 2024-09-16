// pages/api/socket.js
import { initSocket } from "@/utils/socket/initSocket";

export default (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket.IO already initialized");
    return res.end();
  }

  console.log("Initializing Socket.IO");
  initSocket(res.socket.server);
  res.end();
};
