// utils/socket.js
import { Server } from "socket.io";

let io;

export const initSocket = (server) => {
  if (io) return io; // Avoid re-initializing

  io = new Server(server, {
    path: "/api/socket", // The path used to establish the WebSocket connection
    cors: {
      origin: "*", // Adjust according to your needs
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    // Handle joining rooms
    socket.on("joinRoom", ({ room }) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room ${room}`);
    });

    // Handle sending messages
    socket.on("sendMessage", ({ room, message }) => {
      io.to(room).emit("newMessage", message);
      console.log(`Message sent to room ${room}`, message);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
    });
  });

  return io;
};
