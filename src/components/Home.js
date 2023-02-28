import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from './Sidenav';


const Home = () => {
  return (
    <>
    <Box sx={{ display: "flex" }}>
        <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <h1>Home</h1>
      </Box>
     
     </Box>
    </>
  )
}

export default Home;
