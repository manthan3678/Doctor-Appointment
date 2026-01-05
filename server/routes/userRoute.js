import express from "express";
import {
  getAllUser,
  getUserDetails,
  updatePassword,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userController.js";
import { adminAuth, userAuth } from "../middleware/authMiddkeware.js";
import upload from "../middleware/multer.js";

const router = express();

router.post("/register", userRegister);
router.post("/login", userLogin);

// Update Profile Route
router.patch("/update/:id", userAuth, upload.single("image"), updateUser);
// Update Password Route
router.patch("/update-password/:id", userAuth, updatePassword);
// get all user
router.get("/get-allusers", userAuth, adminAuth, getAllUser);
// get user details
router.get("/get-userdetails", userAuth, adminAuth, getUserDetails);

export default router;
