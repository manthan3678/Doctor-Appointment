import express from "express";
import {
  bookAppointment,
  cancelAppointment,
  getAllAppointment,
  getAppointmentDetails,
  getUserAppointment,
  getUserAppointmentDetails,
  updateAppointmentStatus,
} from "../controllers/appointmentController.js";
import { adminAuth, userAuth } from "../middleware/authMiddkeware.js";

const router = express.Router();
// create appointment
router.post("/create", userAuth, adminAuth, bookAppointment);
// get all appointment
router.get("/get-all", userAuth, adminAuth, getAllAppointment);
// get appointment details
router.get("/get-details/:id", userAuth, adminAuth, getAppointmentDetails);
// update appointment status
router.patch(
  "/update-status/:id",
  userAuth,
  adminAuth,
  updateAppointmentStatus
);
// update all user appointment
router.get(
  "/get-user-appointments/:id",
  userAuth,
  adminAuth,
  getUserAppointment
);
// get user appointment details
router.get(
  "/get-user-appointment-details/:id",
  userAuth,
  getUserAppointmentDetails
);
// cancel user appointment
router.post("/cancel/:id", userAuth, cancelAppointment);

export default router;
