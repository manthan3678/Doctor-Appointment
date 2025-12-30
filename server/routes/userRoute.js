import express from "express";
import { userLogin, userRegister } from "../controllers/userController.js";

const router = express();

router.post("/register", userRegister);
router.post("/login", userLogin);

export default router;
