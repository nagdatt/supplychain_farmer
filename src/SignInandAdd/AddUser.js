import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl } from '@mui/material';
import { useState } from "react";
import Snackbar from '@mui/material/Snackbar';
import axios from "axios";

const theme = createTheme();

export default function AddUser() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  
  const roles=['Raw Materials Mng.',"Production Warehouse Mng.","Warehouse Mng.","Distributor Mng."]
  const [role,setRole]=useState(roles[0])
  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);
  const   name = data.get("firstName") + " " +data.get("lastName")
    const email=data.get("email")
    const password=data.get("password")
    const phno=data.get("phno")
    const Role=role
    const obj={
      "email":email,
      "password":password,
      "name":name,
      "phoneNo":phno,
      "role":"farmer",
      "createdBy":"62fa061a130d5d44136176ad"
  }
  axios.post("/admin/adduser",obj).then((res)=>{
    setOpenSnackbar(true);
  })

    console.log(obj)
   
  };


  return (
    <ThemeProvider theme={theme}>
     <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add User
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phno"
                  label="Phone Number"
                  type="number"
                  id="phno"
                  autoComplete="new-password"
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        message="User Added Successfully"
       
      />
      </Container>

   
    </ThemeProvider>
  );
}

