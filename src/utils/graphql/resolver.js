// graphql/resolvers.js

import ChatModel from "@/utils/models/ChatModel";

export const resolver = {
  Query: {
    chats: async (_, __, user) => {
      console.log("user", user);
      const chats = await ChatModel.find({
        $or: [{ senderId: user._id }, { receiverId: user._id }],
      })
        .populate("receiverId")
        .populate("senderId");

      console.log("Fetched Chats:", chats);
      return chats;
    },
  },
};
