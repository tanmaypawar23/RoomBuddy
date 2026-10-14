import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import users from "./routes/user.routes.js";
import { Listings } from "./models/listing.models.js";

dotenv.config();

const PORT = process.env.PORT || 8080;
const uri = process.env.MONGODB_URI;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", users);

app.get("/allListings", async (req, res) => {
  await Listings.find({})
    .then((listings) => res.json(listings))
    .catch((err) => res.json(err));
});

const start = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`Connected to DataBase! ${mongoose.connection.host}`);

    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  } catch (error) {
    console.log("Database connection failed:", error);
    process.exit(1);
  }
};

start();
