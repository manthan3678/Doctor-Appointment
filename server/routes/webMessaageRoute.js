import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessage,
} from "../controllers/webMessageController.js";
import { adminAuth } from "../middleware/authMiddkeware.js";

const router = express.Router();

// create message
router.post("/create", createMessage);
// get All Messages
router.get("/get-all", getAllMessage);
// delete Messages
router.delete("/delete/:id", adminAuth, deleteMessage);

export default router;
