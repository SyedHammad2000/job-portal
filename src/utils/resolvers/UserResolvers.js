import Usermodel from "../models/Usermodel";

export const UserResolvers = {
  Mutation: {
    // create user

    createUser: async (_, { name, email, password, contact, address }) => {
      const userexited = await Usermodel.find({ email });
      if (userexited) {
        return console.log("user already existed");
      }
      const newUser = await Usermodel.create({
        name,
        email,
        password,
        address,
        contact,
      });
      await newUser.save();
      console.log(newUser, "newUser");
      return newUser;
    },
  },
};
