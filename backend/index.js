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
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", users);

app.get("/allListings", async (req, res) => {
  await Listings.find({})
    .then((listings) => res.json(listings))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/allListings/:id", async (req, res) => {
  let { id } = req.params;
  await Listings.findById(id)
    .then((listings) => res.json(listings))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/createListing", (req, res) => {
  Listings.create(req.body)
    .then((listings) => res.json(listings))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getListing/:id", async (req, res) => {
  const id = req.params.id;
  Listings.findById(id)
    .then((listings) => res.json(listings))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.put("/updateListing/:id", (req, res) => {
  const id = req.params.id;
  Listings.findByIdAndUpdate(
    id,
    {
      address: req.body.address,
      description: req.body.description,
      rent: req.body.rent,
      deposit: req.body.deposit,
      occupancy: req.body.occupancy,
      gender: req.body.gender,
    },
    { new: true },
  )
    .then((listings) => res.json(listings))
    .catch((err) => res.status(500).json({ error: err.message }));
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
