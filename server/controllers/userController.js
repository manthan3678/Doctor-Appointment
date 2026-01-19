import userModel from "../models/userModel.js";
import appointmentModel from "../models/appointmentModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import doctorModel from "../models/doctorModel.js";

// ***************** Register ***********************
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
// ***************** Login ***********************
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please Add Email & Password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        message: "Something Went Wrong User Not Found",
      });
    }
    // match password
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      return res.status(402).send({
        success: false,
        message: "Something Went Wrong Password Incorrect",
      });
    }
    // token
    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong User login",
      error,
    });
  }
};
// ***************** update user details *********************
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(404).send({
        success: false,
        message: "User Id Not Found",
        error,
      });
    }
    const { name, phone, dob, address, gender, image } = req.body;
    const photoToBase64 = req.file && req.file.buffer.toString("base64");

    const user = await userModel.findByIdAndUpdate(
      id,
      {
        $set: { name, dob, address, gender, phone, image: photoToBase64 },
      },
      { returnOriginal: false },
    );

    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Something went wrong User Update",
      error,
    });
  }
};
// Password Reset
export const updatePassword = async (req, res) => {
  try {
    // user id
    const { id } = req.params;
    if (!id) {
      return res.status(404).send({
        success: false,
        message: "user id not found password-update",
      });
    }
    // req.body
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.status(500).send({
        success: false,
        message: "Provide OLD OR NEW Password",
      });
    }
    // find user
    const user = await userModel.findById(id);

    if (!user) {
      return res.status(402).send({
        success: false,
        message: "User Not Found : Update Password",
      });
    }
    // check old password

    const isMatch = await bcrypt.compare(oldPassword, user?.password);

    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Old Password Not Matched",
      });
    }
    // hash new password
    const salt = await bcrypt.genSalt(10);

    const hashpassword = await bcrypt.hash(newPassword, salt);

    user.password = hashpassword;
    await user.save();

    res.status(200).send({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Password Update",
      error,
    });
  }
};
// get all user
export const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});

    res.status(200).send({
      success: true,
      message: "Get Successfully A;; Users",
      totalUser: users.length,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Getting Users",
      error,
    });
  }
};
// get user details & appointment details
export const getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).send({
        success: false,
        message: "Provide User Id",
      });
    }
    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "No User Found With  This Id",
      });
    }
    // find appointment
    const appointments = await appointmentModel.find({ userId: user?._id });

    return res.status(200).send({
      success: true,
      message: "User Details Fetched",
      user,
      appointments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Getting User Details",
      error,
    });
  }
};
// ********************************************************
// ********************************************************
// ********************************************************
// HOME PAGE DATA CONTROLLER
export const getStat = async (req, res) => {
  try {
    const users = await userModel.find({});
    const doctors = await doctorModel.find({});
    const appointments = await appointmentModel.aggregate([
      {
        $group: { _id: null, totalEarning: { $sum: { $toDouble: `$amount` } } },
      },
    ]);
    const total = appointments.length > 0 ? appointments[0].totalEarning : 0;
    res.status(200).send({
      success: true,
      message: "Get Successfully All Statistic",
      stats: {
        totalUser: users.length,
        totalDoctor: doctors.length,
        totalEarning: total,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Getting Statistic",
      error,
    });
  }
};
