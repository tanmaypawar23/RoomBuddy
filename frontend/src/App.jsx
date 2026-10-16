import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./contexts/AuthContext";
import AllListing from "./pages/allListing";
import CreateListing from "./pages/createListing";
import ShowListing from "./pages/showListing";
import UpdateListing from "./pages/updateListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/allListing" element={<AllListing />} />
            <Route path="/allListing/:id" element={<ShowListing />} />
            <Route path="/createListing" element={<CreateListing />} />
            <Route path="/allListing/update/:id" element={<UpdateListing />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
