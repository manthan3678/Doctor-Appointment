// const express = require("express");
import express from "express";

// res object
const app = express();

//route
app.get("/", (req, res) => {
  res.send("<h2>Port Running On 8080</h2>");
});

const PORT = 8080;
// run server
app.listen(PORT, () => {
  console.log("SERVER RUNNING ON localhost:8080");
});
