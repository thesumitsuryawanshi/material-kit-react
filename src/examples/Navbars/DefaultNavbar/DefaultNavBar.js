import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button, Box } from "@mui/material";

function DefaultNavBar() {
  const linkProps = {
    component: "a",
    href: "https://www.gumroad.com",
    target: "_blank",
    rel: "noreferrer",
    style: {
      textDecoration: "none",
      color: "inherit", // Use the default color
    },
  };

  return (
    <Box border="1px solid black">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={10}>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
              flexGrow: 1,
              paddingRight: "20px",
            }}
          >
            <Button {...linkProps} padding="13px 45px" fontSize="18px" fontFamily="Mabry pro">
              Features
            </Button>
            <Button {...linkProps} padding="13px 45px" fontSize="18px" fontFamily="Mabry pro">
              Pricing
            </Button>
            <Button {...linkProps} padding="13px 45px" fontSize="18px" fontFamily="Mabry pro">
              Blog
            </Button>
            <Button {...linkProps} padding="13px 45px" fontSize="18px" fontFamily="Mabry pro">
              Discover
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            {...linkProps}
            padding="18px 35px"
            fontSize="18px"
            fontFamily="Mabry pro"
            border="1px solid black"
            marginRight={0} // Remove margin-right
          >
            Login
          </Typography>
          <Typography
            {...linkProps}
            fontFamily="Mabry pro"
            padding="18px 30px"
            border="1px solid black"
            backgroundColor="#000"
            fontSize="18px"
            color="#fff" // Changed color to white
          >
            Start Selling
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default DefaultNavBar;
