import { createContext, useState, useContext } from "react";
import { Router, useNavigate } from "react-router-dom";
import axios from "axios";

export const AuthContext = createContext({});

const client = axios.create({
  baseURL: "http://localhost:8080/api/users",
});

export const AuthProvider = ({ children }) => {
  const authContext = useContext(AuthContext);

  const [userData, setUserData] = useState(authContext);

  const router = useNavigate();

  const handleSignUp = async (name, email, password) => {
    try {
      let request = await client.post("/signup", {
        name: name,
        email: email,
        password: password,
      });

      if (request.status === 201) {
        return request.data.message;
      }
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async (email, password) => {
    try {
      let request = await client.post("/login", {
        email: email,
        password: password,
      });

      if (request.status === 200) {
        localStorage.setItem("token", request.data.token);
        router("/");
      }
    } catch (err) {
      throw err;
    }
  };

  const data = {
    userData,
    setUserData,
    handleSignUp,
    handleLogin,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
