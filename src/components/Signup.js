import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import { styled } from "@mui/material/styles";
import thlogo from "../images/th-logo.png";
import { Link } from "react-router-dom";
const Signup = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const PaperStyle = styled(Paper)`
    padding: 30px;
    margin: 50px auto;
    width: 335px;

    height: 65vh;
  `;
  return (
    <>
      <Grid>
        <PaperStyle elevation={10}>
          <Grid align="center">
            <Avatar alt="TechHolding" src={thlogo} />
            <h2>Sign Up</h2>
          </Grid>
          <br></br>
          <TextField
            style={{ margin: "10px auto" }}
            id="standard-basic"
            label="Name"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            style={{ margin: "10px auto" }}
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            required
          />
            <InputLabel  id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
        //   id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Full Stack">Full Stack Web Developer</MenuItem>
          <MenuItem value={20}>QA</MenuItem>
          <MenuItem value={30}>Mobile App Developer</MenuItem>
          <MenuItem value={30}>IOS App Developer</MenuItem>

        </Select>
          <TextField
            style={{ margin: "10px auto" }}
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            style={{ margin: "10px auto" }}
            id="standard-basic"
            label="Confirm Password"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <Button style={{ margin: "30px auto" }} variant="outlined" fullWidth>
            Sign Up
          </Button>
          <Typography>
            Do you have an account?&nbsp;
            <Link to="/login" style={{ color: "#1976d2" }}>
              Log In
            </Link>
          </Typography>
        </PaperStyle>
      </Grid>
    
    </>
  );
};

export default Signup;
