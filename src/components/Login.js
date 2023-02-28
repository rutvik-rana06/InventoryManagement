import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import React from "react";
import { styled } from "@mui/material/styles";
import thlogo from "../images/th-logo.png";
import { Link } from "react-router-dom";
const Login = () => {
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
            <h2>Sign In</h2>
          </Grid>
          <br></br>

          <TextField
            style={{ margin: "10px auto" }}
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            required
          />
          <TextField
            style={{ margin: "10px auto" }}
            id="standard-basic"
            label="Password"
            type="password"
            variant="standard"
            fullWidth
            required
          />
          <Button style={{ margin: "30px auto" }} variant="outlined" fullWidth>
            Sign In
          </Button>
          <Typography>
            <Link style={{ color: "#1976d2" }}>Forgot password?</Link>
          </Typography>
          <Typography>
            Don't have an account?&nbsp; 
            <Link to="/signup" style={{ color: "#1976d2" }}>Sign Up</Link>
          </Typography>
        </PaperStyle>
      </Grid>
    </>
  );
};

export default Login;
