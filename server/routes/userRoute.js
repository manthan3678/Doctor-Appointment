import express from "express";
import { userRegister } from "../controllers/userController.js";

const router = express();

router.post("/register", userRegister);

export default router;
