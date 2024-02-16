// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples

import MKTypography from "components/MKTypography";
import MaxulichneyGuySectionPic from "../../../assets/MyImages/MaxulichneyGuySection.png";

function MaxulichneyGuySection() {
  return (
    <MKBox
      p={6}
      m={6}
      sx={{
        margin: 1,
        borderRadius: 5,
        justifyContent: "space-between",
        border: "1px solid black",
        bgcolor: "#FE91E8",
        flexDirection: "row",
        display: "flex",
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
          “I launched MaxPacks as an experimental side gig; but within 2 years those Procreate
          brushes were earning more than my 6-figure salary in CG. Leaving in favor of Gumroad
          enabled me to explore other aspects of my art, develop new hobbies, and finally prioritize
          my personal life.” Max Ulichney sells Procreate Brush Packs
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
          Max Ulichney sells Procreate Brush Packs{" "}
        </MKTypography>
      </Grid>
      <Grid p={3} m={3} alignItems="center" justify="center">
        <img src={MaxulichneyGuySectionPic} alt="MaxulichneyGuySectionPic" />
      </Grid>
    </MKBox>
  );
}
export default MaxulichneyGuySection;
