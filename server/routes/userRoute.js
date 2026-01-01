import express from "express";
import {
  updatePassword,
  updateUser,
  userLogin,
  userRegister,
} from "../controllers/userController.js";
import { userAuth } from "../middleware/authMiddkeware.js";
import upload from "../middleware/multer.js";

const router = express();

router.post("/register", userRegister);
router.post("/login", userLogin);

// Update Profile Route
router.patch("/update/:id", userAuth, upload.single("image"), updateUser);
// Update Password Route
router.patch("/update-password/:id", userAuth, updatePassword);
export default router;
