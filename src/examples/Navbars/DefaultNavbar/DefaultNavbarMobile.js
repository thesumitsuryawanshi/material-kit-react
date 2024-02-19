import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function DefaultNavBarMobile() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Features
              </Link>
              <Link to="/pricing" style={{ textDecoration: "none", color: "black" }}>
                Pricing
              </Link>
              <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
                Blog
              </Link>
              <Link to="/discover" style={{ textDecoration: "none", color: "black" }}>
                Discover
              </Link>
            </Box>
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            color="inherit"
            style={{ color: "black" }}
          >
            Login
          </Button>
          <Button
            component={Link}
            to="/start-selling"
            variant="contained"
            color="primary"
            sx={{ bgcolor: "black", color: "white" }}
          >
            Start Selling
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default DefaultNavBarMobile;
