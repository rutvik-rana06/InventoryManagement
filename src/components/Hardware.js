import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from './Sidenav';
// import { makeStyles } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Hardware = () => {

  return (
    <>
    <Box sx={{ display: "flex" }}>
        <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <h1>Hardware</h1>
        <TableContainer component={Paper}>
      <Table style={{minWidth:650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>John Doe</TableCell>
            <TableCell>2022-01-01</TableCell>
            <TableCell>Category A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Jane Smith</TableCell>
            <TableCell>2022-02-14</TableCell>
            <TableCell>Category B</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Bob Johnson</TableCell>
            <TableCell>2022-03-27</TableCell>
            <TableCell>Category C</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>
     
     </Box>
    </>
  )
}

export default Hardware;
