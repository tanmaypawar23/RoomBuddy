import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "../style/allListings.module.css";
import LocationPinIcon from "@mui/icons-material/LocationPin";

export default function AllListing() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/allListings")
      .then((result) => setListings(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {listings.map((listing) => {
          return (
            <div className={styles.card} key={listing._id}>
              <p>Tanmay Pawar</p>
              <p>
                <LocationPinIcon fontSize="small" />
                {listing.address}
              </p>
              <p>₹{listing.rent} per person</p>
              <p>{listing.gender}</p>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
