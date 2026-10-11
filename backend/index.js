import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import users from "./routes/user.routes.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGODB_URI;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", users);

app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

app.listen(PORT, async () => {
  console.log(`App started on port ${PORT}`);
  try {
    await mongoose.connect(uri);
    console.log(`Connected to DataBase! ${mongoose.connection.host}`);
  } catch (error) {
    console.log("Database connection failed:", error);
  }
});
