import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
export const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //   validation
    if (!name || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Details",
      });
    }
    //   hash
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const userData = { name, email, password: hashedpassword };

    //save user
    const newUser = new userModel(userData);
    const user = await newUser.save();
    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong User Register",
      error,
    });
  }
};
