// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/DB.js";

import userRoute from "./routes/userRoute.js";
// config env variable
dotenv.config();
// Connect DB
connectDB();
// res object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//route
app.use("/api/v1/user", userRoute);

app.get("/", (req, res) => {
  res.send("<h2>Port Running On 8080</h2>");
});

const PORT = process.env.PORT || 5000;
// run server
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON ${process.env.NODE_DEV} localhost:${PORT}`);
});
