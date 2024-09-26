import ApplicationModel from "../models/ApplicationModel";
import JobPostSchema from "../models/JobPostSchema";
import Usermodel from "../models/Usermodel";

export const ApplicationResolver = {
  Mutation: {
    applyUser: async (_, { JobPostId, resume, postBy }, user) => {
      const userId = user._id;
      console.log(userId, "userId");
      console.log(JobPostId, resume, user, "application resolver");
      const applications = await new ApplicationModel({
        JobPostId,
        ApplicantId: userId,
        resume,
        postBy,
      });
      await applications.save();
      const JobPostid = await JobPostSchema.findById(JobPostId);
      const postby = await Usermodel.findById(postBy);
      console.log(applications);
      // return {
      //   ...applications._doc,
      //   _id: applications.id,
      //   JobPostId: JobPostid,
      //   postBy: postby,
      //   ApplicantId: userId,
      // };
    },
  },
};
