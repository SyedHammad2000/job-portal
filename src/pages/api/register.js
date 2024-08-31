// eslint disabled

import ConnectDb from "@/utils/connection/ConnectDb";
import { Auth } from "@/utils/middleware/auth";
import Usermodel from "@/utils/models/Usermodel";

import jwt from "jsonwebtoken";

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await RegisterPost(req, res);
      break;
    case "GET":
      await RegisterGet(req, res);
      break;
    case "PUT":
      //^ i want to wrap in Auth
      await RegisterPut(req, res);
      break;
  }
};

const RegisterPost = async (req, res) => {
  try {
    await ConnectDb();
    const { name, email, password, role, contact, address, pic } = req.body;

    if (!name || !email || !password) {
      res.status(401).send({
        message: "All fields are required",
      });
      return;
    }
    const userexisted = await Usermodel.findOne({ email });

    if (userexisted) {
      res.status(401).send({
        message: "user already existed",
      });
      return;
    }
    const user = await new Usermodel({
      name,
      email,
      password,
      role,
      contact,
      address,
      pic,
    });
    console.log(role);
    await user.save();

    res.status(200).send({
      message: "user created successfully",
      user,
    });
  } catch (error) {
    res.status(401).send({
      message: "error in register controller" + error,
    });
  }
};

const RegisterGet = async (req, res) => {
  await ConnectDb();
  Auth(req, res, async () => {
    const userId = req.user.id;
    console.log();
    try {
      const users = await Usermodel.findById(userId);
      res.status(200).send({
        message: "users fetched successfully",
        users,
      });
    } catch (error) {
      res.status(401).send({
        message: "error in register controller" + error,
      });
    }
  });
};

const RegisterPut = async (req, res) => {
  Auth(req, res, async () => {
    await ConnectDb();
    try {
      const userId = req.user.id;
      console.log(userId);
      const { name, email, password, role, contact, address, pic } = req.body;

      await Usermodel.findByIdAndUpdate(userId, {
        name,
        email,
        password,
        role,
        contact,
        address,
        pic,
      });

      res.status(200).send({
        message: "user updated successfully",
        user: {
          _id: userId,
          name,
          email,
          role,
          password,
          contact,
          address,
          pic,
        },
      });
    } catch (error) {
      res.status(401).send({
        message: "error in register controller" + error,
      });
    }
  });
};
