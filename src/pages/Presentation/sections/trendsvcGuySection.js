// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples

import MKTypography from "components/MKTypography";
import counterSectionMan from "../../../assets/MyImages/counter_section_man.png";

function trendsvcGuySection() {
  return (
    <MKBox
      py={6}
      my={6}
      sx={{
        margin: 1,
        borderRadius: 5,
        justifyContent: "space-between",
        border: "1px solid black",
        bgcolor: "#23A195",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center", // Align items vertically
          justifyContent: "space-between",
        }}
      >
        <Grid container item xs={11} p={3} m={3} alignItems="center" sx={{ mx: "auto" }}>
          <MKTypography
            variant="h1"
            sx={{
              fontFamily: "Mabry pro , Sans-serif ",
              fontSize: 70,
              fontStyle: "Bold",
              color: "white",
              mb: 6,
              alignItems: "center", // Align items vertically
            }}
            fontFamily="Mabry pro , Sans-serif "
          ></MKTypography>
          <MKTypography
            variant="body1"
            color="black"
            sx={{
              fontFamily: "Mabry pro , Sans-serif",
              fontSize: 30,
              fontStyle: "Bold",
              alignItems: "center", // Align items vertically

              color: "white",
            }}
            fontFamily="Mabry pro , Sans-serif"
          >
            “Originally, I took pre-orders for my Trend Reports on Gumroad. But I received...
            exactly $0. So I changed tactics: I made half of my report free, and the other half
            paid. Today, 99% of Trends.VC revenue is recurring in the form of annual and quarterly
            subscriptions.”
          </MKTypography>
          <MKTypography
            m={4}
            sx={{
              fontFamily: "Mabry pro , Sans-serif",
              fontSize: 25,
              fontStyle: "Bold",
              alignItems: "center", // Align items vertically

              color: "black",
            }}
          >
            DruRiley sells business insights and expertise
          </MKTypography>
        </Grid>
        <Grid
          container
          item
          xs={11}
          spacing={3}
          p={3}
          m={3}
          alignItems="center"
          justify="center"
          sx={{ mx: "auto", borderRadius: 5, border: "1px solid black" }}
        >
          <img src={counterSectionMan} alt="Counter Section Man" />
        </Grid>
      </Container>
    </MKBox>
  );
}
export default trendsvcGuySection;
