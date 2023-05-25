import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

export default function MyHistory() {
  const [rows,setRow]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:2000/users/getmypost?id="+sessionStorage.getItem("id1")).then((res)=>{
      setRow(res.data)
    })
  })
  return (
    <div>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Material Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Cost</TableCell>
            
            <TableCell align="right">Location From</TableCell>
            <TableCell align="right">Given Phone No.</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="right">{row.rawmaterial.name}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
          
            <TableCell align="right">{row.location}</TableCell>
            <TableCell align="right">{row.phoneNo}</TableCell>
            {row.status==0? <TableCell align="right"><Chip label="Viewed" color="warning"></Chip></TableCell>:row.status==1?<TableCell align="right"><Chip label="Booked" color="secondary"></Chip></TableCell>:
            <TableCell align="right"><Chip label="Collected" color="success"></Chip></TableCell>
            }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}
