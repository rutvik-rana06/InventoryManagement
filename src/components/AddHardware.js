import React from 'react'
import Box from "@mui/material/Box";
import Sidenav from './Sidenav';
import { styled, Typography } from '@mui/material';
// import Navbar from './Navbar';
import { FormControl,FormGroup,Button ,TextField} from '@mui/material';
// import { TextField } from '@mui/material';
// import { Form } from 'react-router-dom';
// import Controls from "../../components/controls/Controls";


import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';



const AddHardware = () => {

const Form = styled(FormGroup)`
margin : 5% auto 0 auto;
width : 50%;
& > div{
  margin-top : 20px
}
`
const [value, setValue] = React.useState(dayjs('2022-02-27T21:11:54'));

const handleChange = (newValue) => {
  setValue(newValue);
};
  return (
    <>
 <Box sx={{ display: "flex" }}>
        <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        {/* <h1>Add Form here!</h1> */}

      <Form>
        <Typography variant="h3" align='center' component="h3" >
          Add Hardware
        </Typography>
        <FormControl>
          
          <TextField id="outlined-basic" label="Category" variant="outlined" />
        </FormControl>
        <FormControl>
          
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </FormControl>

       <FormControl>
          
          <TextField id="outlined-basic" label="Model No" variant="outlined" />
        </FormControl>
        <FormControl>
          
          <TextField id="outlined-basic" label="Vendor Name" variant="outlined" />
        </FormControl>

        {/* <FormControl>
          
          <TextField id="outlined-basic" label="Date of Purchase" variant="outlined" />
        </FormControl> */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        <FormControl>
          
          <TextField id="outlined-basic" label="Description" variant="outlined" />
        </FormControl>

        <FormControl>
      <Button variant="contained">Add Hardware</Button>

      </FormControl>
        
        
        
        

      </Form>

{/* 
        <Grid container>
                <Grid item xs={6}>
                    <TextField
                        name="fullName"
                        label="Full Name"
                        // value={values.fullName}
                        // onChange={handleInputChange}
                        // error={errors.fullName}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        // value={values.email}
                        // onChange={handleInputChange}
                        // error={errors.email}
                    />
                    <TextField
                        label="Mobile"
                        name="mobile"
                        // value={values.mobile}
                        // onChange={handleInputChange}
                        // error={errors.mobile}
                    />
                    <TextField
                        label="City"
                        name="city"
                        // value={values.city}
                        // onChange={handleInputChange}
                    />

                </Grid>
                
            </Grid> */}
            
      </Box>
     
     </Box>

    </>
  )
}

export default AddHardware;
