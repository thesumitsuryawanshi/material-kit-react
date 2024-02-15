// @mui material components
import * as React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
// import ExampleCard from "pages/Presentation/components/ExampleCard";
// Data
// import data from "pages/Presentation/sections/data/designBlocksData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// myip :
import Mike from "../../../assets/MyImages/SmilingGirl.png";

function DesignBlocks() {
  const sections = [];
  for (let i = 0; i < 18; i++) {
    sections.push(
      <Grid
        key={i}
        px={5}
        sx={{ bgcolor: "#15191C" }}
        style={{ textAlign: "center", justifyContent: "center" }}
        p={6}
      >
        <Card sx={{ maxWidth: 480 }}>
          <CardMedia sx={{ height: 80 }} image={Mike} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>{" "}
      </Grid>
    );
  }

  return (
    <MKBox component="section" my={6} py={6}>
      <Container bgcolor="#000">
        <Grid
          container
          item
          bgcolor="#000"
          xs={12}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", m: 6, mx: "auto", px: 5 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Infinite Ways to Earn"
            container
            sx={{ mb: 5 }}
          />
          <MKTypography variant="h1">Looking for inspiration on what you can sell?</MKTypography>
          <MKTypography variant="body1" color="text">
            Discover the best-selling products and creators on Gumroad.
          </MKTypography>
        </Grid>
        <MKBox display="flex" flexdirection="row" bgcolor="#000"></MKBox>
      </Container>

      <React.Fragment style={{ textAlign: "center", justifyContent: "center" }}>
        <Grid container spacing={3} style={{ textAlign: "center", justifyContent: "center" }}>
          {sections}
        </Grid>
      </React.Fragment>
    </MKBox>
  );
}
export default DesignBlocks;
