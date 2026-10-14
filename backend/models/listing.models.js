import mongoose, { Schema } from "mongoose";

const listingsSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
    },
    rent: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Any"],
      required: true,
    },
    deposit: {
      type: Number,
      default: 0,
    },
    occupancy: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
const Listings = mongoose.model("Listings", listingsSchema);

export { Listings };
