import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import TextField from "@mui/material/TextField";
import styles from "../style/createListing.module.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";

export default function UpdateListing() {
  const { id } = useParams();
  const router = useNavigate();

  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [rent, setRent] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [occupancy, setOccupancy] = useState(1);
  const [gender, setGender] = useState("Any");

  useEffect(() => {
    axios
      .get("http://localhost:8080/getListing/" + id)
      .then((result) => {
        console.log(result);
        setAddress(result.data.address);
        setDescription(result.data.description);
        setRent(result.data.rent);
        setDeposit(result.data.deposit);
        setOccupancy(result.data.occupancy);
        setGender(result.data.gender);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/updateListing/" + id, {
        address,
        description,
        rent,
        deposit,
        occupancy,
        gender,
      })
      .then((result) => {
        console.log(result);
        router("/allListing", {
          state: { message: "Listing updated successfully!" },
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.formDiv}>
          <h2>Edit Listing</h2>
          <form className={styles.form} onSubmit={handleUpdate}>
            <TextField
              margin="normal"
              fullWidth
              required
              id="address"
              label="address"
              name="address"
              value={address}
              autoFocus
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              id="description"
              label="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              label="Rent as per Person"
              placeholder="eg.4000/-"
              name="rent"
              id="rent"
              type="number"
              margin="normal"
              value={rent}
              required
              onChange={(e) => setRent(Number(e.target.value))}
              sx={{ width: 300 }}
              slotProps={{
                htmlInput: {
                  min: 0,
                },
              }}
            />
            <TextField
              name="deposit"
              id="deposit"
              label="Deposit"
              type="number"
              value={deposit}
              margin="normal"
              placeholder="eg.10,000/-"
              required
              onChange={(e) => setDeposit(Number(e.target.value))}
              sx={{ width: 300 }}
              slotProps={{
                htmlInput: {
                  min: 0,
                },
              }}
            />

            <TextField
              name="occupancy"
              id="occupancy"
              label="No. of Roommate Required"
              type="number"
              margin="normal"
              value={occupancy}
              required
              onChange={(e) => setOccupancy(Number(e.target.value))}
              sx={{ width: 300 }}
              slotProps={{
                htmlInput: {
                  min: 1,
                  max: 50,
                },
              }}
            />

            <FormControl sx={{ width: 300 }} margin="normal">
              <InputLabel id="gender-label">Gender</InputLabel>

              <Select
                labelId="gender-label"
                id="gender"
                name="gender"
                value={gender}
                label="Gender"
                required
                onChange={(e) => setGender(e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Any">Any</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" startIcon={<EditIcon />}>
              Edit
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
