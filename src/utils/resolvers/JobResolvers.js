import JobPostSchema from "../models/JobPostSchema";
import Usermodel from "../models/Usermodel";

export const JobResolvers = {
  Query: {
    jobs: async (_, __, user) => {
      return await JobPostSchema.find({}).populate("postedBy");
    },
    job: async (_, { id }) => {
      console.log(id, "id");
      return await JobPostSchema.findById(id).populate("postedBy");
    },
  },
};
