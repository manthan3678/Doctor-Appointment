import express from "express";
import { adminAuth, userAuth } from "../middleware/authMiddkeware.js";
import upload from "../middleware/multer.js";
import {
  addDoctor,
  deleteDoctor,
  getAllDoctor,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post(
  "/create-doctor",
  userAuth,
  adminAuth,
  upload.single("image"),
  addDoctor
);
router.get("/get-alldoctor", getAllDoctor);
// single doc data
router.get("/get-doctor/:id", getSingleDoctor);
// doc data update
router.patch(
  "/update-doctor/:id",
  userAuth,
  adminAuth,
  upload.single("image"),
  updateDoctor
);
// delete doc data
router.delete("/delete-doctor/:id", userAuth, adminAuth, deleteDoctor);
export default router;
