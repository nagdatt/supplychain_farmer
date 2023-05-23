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
import  baseLink  from './../ENV/axiosLink';

const theme = createTheme();

export default function AddRawMaterials(props) {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [categories,setCatagories]=React.useState(["A1","A2","A3"])   
     const [rawMaterials,setRawMaterials]=React.useState(["raw1","raw2","raw3"])
     const [rawmaterial,setRawMaterial]=React.useState(rawMaterials[0])
     const [phno,setPhno]=React.useState("")
     const [qty,setQty]=React.useState("")
     const [cost,setCost]=React.useState("")
     const [location,setLocation]=React.useState("")
     

    const getRawMaterialsStore=()=>{
        const arrName = [];
        const unitsOrignal=[]
        const BigArray=[]
        const returnArray=[]
        const cat=[]
        axios.get(baseLink+"admin/getall").then((data) => {
            console.log(data.data)
          const temp = data.data;
          const raws=[]
          for (var i in temp){
            arrName.push({ label: temp[i].name ,id:temp[i]._id});
            const pre= temp[i]
            const types=[]
            const units=new Set()
    
           for (var j in  pre.rowmaterials){
            raws.push({label:pre.rowmaterials[j].name,id:pre.rowmaterials[j]._id})

            types.push({label:pre.rowmaterials[j].name,id:pre.rowmaterials[j]._id})
            if(!units.has(pre.rowmaterials[j].unit)){
              unitsOrignal.push({ label:pre.rowmaterials[j].unit });
    
            }
            units.add(pre.rowmaterials[j].unit)
          }
    
          BigArray.push({label: temp[i].name ,rawMaterials:types,units:unitsOrignal})
         cat.push(temp[i].name)
         
        }
        console.log("Raws",raws)
        returnArray.push(BigArray)
        returnArray.push(BigArray[0].rawMaterials)
        returnArray.push(BigArray[0].units)
        returnArray.push(arrName)
        setCatagories(arrName)
        setRawMaterials(raws)
    
          })
    
          .catch((error) =>{        console.log(error)
           });
    
            return returnArray;
    }


React.useEffect(()=>{
    getRawMaterialsStore()
},[])
  const [category,setCategory]=React.useState(categories[0])
  const [selectedFile,setSelectedFile]=React.useState(null)

  const handleSubmit = (event) => {

    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log(data.files[0])
    const obj={
        category:"62fa3817130c3ffb2f76c07e",
        rawmaterial:rawmaterial?.id,
        phoneNo:phno,
        qty:qty,
        cost:cost,
        location:location,
        farmerId:sessionStorage.getItem("id1")
        
    }
    console.log(obj,"locha")
    console.log(selectedFile)
    
   
  
   
    console.log(obj)
    axios.post(baseLink+"users/addpost",obj).then((res)=>{
        console.log("Suceess")
        setOpenSnackbar(true)

    }).catch((err)=>{
        console.log(err)
    })


   
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
          
          <Typography component="h1" variant="h5">
            <b>            Add Raw Materials
</b>
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
             
             
              
            
            
              <Grid item xs={12}>
                <Autocomplete
                required
                  disablePortal
                  id="rawMaterial"
                  onChange={(event,value)=>{
                    setRawMaterial(value)
                  }}  
                  options={rawMaterials}
                 
                  renderInput={(params) => (
                    <TextField {...params} label="Raw materials" />
                  )}
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
                  onChange={(event)=>{
                    //console.log(event.target.value)
                     setPhno(event.target.value)
                  }}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="quantity"
                  label="Approx Quantity"
                  type="number"
                  id="quantity"
                  onChange={(event)=>{
                    //console.log(event.target.value)
                     setQty(event.target.value)
                  }}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="cost"
                  label="cost"
                  type="number"
                  id="cost"
                  onChange={(event)=>{
                    //console.log(event.target.value)
                     setCost(event.target.value)
                  }}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="location"
                  label="Location"
                  type="text"
                  id="location"
                  onChange={(event)=>{
                    //console.log(event.target.value)
                     setLocation(event.target.value)
                  }}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
         id="outlined-multiline-static"
          label="Additional Details"
          multiline
          rows={3}
         
          fullWidth
        />
              </Grid>
              {/* <Grid item xs={12}>
                <input type="file" accept="image/*" 
                id="image"
                onChange={(e)=>{
                        console.log(e)
                }}  
                />
              </Grid> */}
            </Grid>
                
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
          </Box>
        </Box>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={()=>{
          setOpenSnackbar(false)
        }}
        message="Material Added.. We will contact you soon"
       
      />
      </Container>

    </ThemeProvider>
  );
}

