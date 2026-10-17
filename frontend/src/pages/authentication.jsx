import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import { AuthContext } from "../../src/contexts/AuthContext";
import Alert from "@mui/material/Alert";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px",
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  backgroundColor: "#091534",
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export default function Authentication(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [messages, setMessages] = React.useState();
  const [fromState, setFromState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleSignUp, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async (e) => {
    try {
      if (fromState === 0) {
        await handleLogin(email, password);
      }
      if (fromState === 1) {
        let result = await handleSignUp(name, email, password);
        console.log(result);
        setMessages("Registered successfully! You can login now.");
        setOpen(true);
        setError("");
        setFromState(0);
        setPassword("");
      }
    } catch (error) {
      console.log("Registration error:", error);

      const message = error.response?.data?.message || "Something went wrong";

      setError(message);
    }
  };

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer
        direction="column"
        sx={{ justifyContent: "space-between" }}
      >
        <Card variant="outlined">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/logo.png"
              style={{ width: "60px", marginRight: "1rem" }}
            />
            <h2>RoomBuddy</h2>
          </div>

          <div style={{ textAlign: "center" }}>
            {fromState === 0 ? <h3>Login</h3> : <h3>SignUp</h3>}
          </div>
          <Box
            component="form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              handleAuth();
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              {fromState === 1 && (
                <FormControl>
                  <TextField
                    margin="normal"
                    id="name"
                    name="name"
                    label="Your Full Name"
                    placeholder="eg.Tanmay Pawar"
                    autoComplete="name"
                    value={name}
                    required
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
              )}

              <TextField
                margin="normal"
                id="email"
                type="email"
                name="email"
                label="Email"
                placeholder="eg.your@email.com"
                autoComplete="email"
                value={email}
                autoFocus
                required
                fullWidth
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                label="Password"
                autoComplete="current-password"
                value={password}
                required
                fullWidth
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <p style={{ color: "red" }}>{error}</p>
            <Button type="submit" fullWidth variant="contained">
              {fromState === 0 ? "LogIn" : "SignUp"}
            </Button>
          </Box>
          <Divider>or</Divider>
          {fromState === 0 ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography sx={{ textAlign: "center" }}>
                Don't have an account?{" "}
                <Button onClick={() => setFromState(1)}>SignUp</Button>
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography sx={{ textAlign: "center" }}>
                Already have an account?{" "}
                <Button onClick={() => setFromState(0)}>LogIn</Button>
              </Typography>
            </Box>
          )}
        </Card>

        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            variant="filled"
            severity="success"
            onClose={() => setOpen(false)}
            sx={{ width: "100%" }}
          >
            {messages}
          </Alert>
        </Snackbar>
      </SignInContainer>
    </>
  );
}
