import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import baseLink from "./../ENV/axiosLink";
import AddUser from "./AddUser";

const theme = createTheme();

export default function SignIn(props) {
  const roles = [
    "Raw Materials Mng.",
    "Production Warehouse Mng.",
    "Warehouse Mng.",
    "Distributor Mng.",
  ];
  const [open, setOpen] = React.useState(false);

  const [token, setToken] = React.useState("");

  const handleSubmit = (event) => {
    sessionStorage.setItem("farmerId", "62fa061a130d5d44136176ad");
    sessionStorage.setItem("phno", "8421035260");

    // props.setIsLoggedIn(true)
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const obj = {
      email: data.get("email"),
      password: data.get("password"),
      role: "farmer",
    };

    axios
      .post(baseLink + "users/login", obj)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("user1", res.data.user.name);
        sessionStorage.setItem("email1", res.data.user.email);
        sessionStorage.setItem("phoneNo1", res.data.user.phoneNo);
        sessionStorage.setItem("id1", res.data.user._id);
        console.log(res.data)
        props.setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        setOpen(true);
      });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
           
            

          </Box>
        </Box>
      </Container>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Invalid Credentials"
      />
    </ThemeProvider>
  );
}

const Home = () => {};
