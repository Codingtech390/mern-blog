import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

// Dotenv configuration
dotenv.config();

// Connection to mongo database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDb database connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
