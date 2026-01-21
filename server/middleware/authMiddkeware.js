import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// user auth
// user validate rahega to update functionality chalegi

export const userAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(402).send({
        success: false,
        message: "Token Not Found ",
      });
    }
    // 🔥 THIS IS THE BUG FIX
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
    res.status(402).send({
      success: false,
      message: "Error in Auth Middleware",
      error,
    });
  }
};

export const adminAuth = async (req, res, next) => {
  try {
    const user = userModel.findById(req.user.id);
    if (user.isAdmin === !true) {
      res.status(402).send({
        success: false,
        message: "Unauthorized Access : Admin",
        error,
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(402).send({
      success: false,
      message: "Error in Auth Middleware Admin",
      error,
    });
  }
};
