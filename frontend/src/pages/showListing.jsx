import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function ShowListing() {
  const [listing, setListing] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/allListings/" + id)
      .then((result) => setListing(result.data))
      .catch((err) => console.log(err));
  }, []);

  if (!listing) {
    return (
      <>
        <Navbar />
        <p>Loading...</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div>
        <h3>Listing Details:</h3>
        <ul>
          <li>{listing.address}</li>
          <li>{listing.description}</li>
          <li>{listing.rent}</li>
          <li>{listing.gender}</li>
          <li>{listing.deposit}</li>
          <li>{listing.occupancy}</li>
        </ul>
        <Link to={`/allListing/update/${id}`}>
          <Button variant="contained" startIcon={<EditIcon />}>
            Edit
          </Button>
        </Link>

        <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </div>
      <Footer />
    </>
  );
}
