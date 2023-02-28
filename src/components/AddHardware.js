import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from './Sidenav';


const AddHardware = () => {
  return (
    <>
    <Box sx={{ display: "flex" }}>
        <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <h1>Add Form here!</h1>
      </Box>
     
     </Box>
    </>
  )
}

export default AddHardware;
