import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import axios from "axios";
import styles from "../style/allListings.module.css";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

export default function AllListing() {
  const location = useLocation();

  const [listings, setListings] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (location.state?.message) {
      setAlertMessage(location.state.message);
      setShowAlert(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allListings")
      .then((result) => setListings(result.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <Snackbar
        open={showAlert}
        autoHideDuration={3000}
        onClose={() => setShowAlert(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          variant="filled"
          severity="success"
          onClose={() => setShowAlert(false)}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
      <div className={styles.container}>
        {listings.map((listing) => {
          return (
            <Link
              to={`/allListing/${listing._id}`}
              className={styles.cardLink}
              key={listing._id}
            >
              <div className={styles.card}>
                <p>Tanmay Pawar</p>
                <p>
                  <LocationPinIcon fontSize="small" />
                  {listing.address}
                </p>
                <p>₹{listing.rent} per person</p>
                <p>{listing.gender}</p>
              </div>
            </Link>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
