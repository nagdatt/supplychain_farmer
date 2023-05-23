import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import MailIcon from "@mui/icons-material/Mail";
export default function QuestionAnswers() {
  return (
    <div style={{ marginBottom: "30px" }}>
     
      <h2>Most Asked Questions</h2>
      {[10, 20, 30, 40, 50].map(() => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ marginBottom: "10px" }}
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
       <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ padding: "20px",width:"100%" }}>
          <h2>
            <MailIcon /> Contact Us
          </h2>
          <hr></hr>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            style={{ marginRight: "10px",width:"46%",marginTop:"10px" }}
          />
           <TextField
            id="outlined-basic"
            label="Contact"
            variant="outlined"
            style={{ width:"46%" ,marginTop:"10px"}}
          />
          <TextField
            id="outlined-basic"
            label="Text"
            variant="outlined"
            multiline
            rows={4}
            style={{ width:"100%",marginTop:"10px" }}
          />

          <hr></hr>
          
          <Button variant="contained" style={{ width:"100%"}}>submit</Button>
        </Card>
      </div>
    </div>
  );
}
