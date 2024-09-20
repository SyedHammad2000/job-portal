// graphql/resolvers.js

import ChatModel from "@/utils/models/ChatModel";

const resolvers = {
  Query: {
    chats: async (_, __, { user }) => {
      if (!user || !user._id) {
        throw new Error("Unauthorized");
      }

      const userId = user._id;
      const chats = await ChatModel.find({
        $or: [{ senderId: userId }, { receiverId: userId }],
      })
      .populate("receiverId", "name email")
      .populate("senderId", "name email");

      console.log("Fetched Chats:", chats);
      return chats;
    },
  },
};

export default resolvers;
