import mongoose from "mongoose";

const Usermodel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      enum: ["employer", "applicant"],
      default: "applicant",
    },
    pic: {
      type: String,
      default:
        " https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User || mongoose.model("User", Usermodel);
