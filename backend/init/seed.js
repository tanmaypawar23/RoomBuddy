import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { Listings } from "../models/listing.models.js";
import { data } from "./data.js";

// Tell dotenv exactly where .env is (one folder up, in /backend)
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env") });

const uri = process.env.MONGODB_URI;

const initDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to DB:", mongoose.connection.host);

    await Listings.deleteMany({}); // optional: clears old data first
    await Listings.insertMany(data);
    console.log("Data was inserted!");
  } catch (error) {
    console.log("Seeding failed:", error);
  } finally {
    await mongoose.connection.close(); // lets the script exit
  }
};

initDB();
