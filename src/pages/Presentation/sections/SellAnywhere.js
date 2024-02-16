// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import TutorialGumroadSVG from "../../../assets/MyImages/GumroadallSVG/gumroad profile and tutorial.svg";

function SellAnywhere() {
  return (
    <MKBox
      py={6}
      my={6}
      spacing={2}
      sx={{
        margin: 1,
        borderRadius: 5,
        border: "1px solid black",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grid
        xs={6}
        p={3}
        m={3}
        alignItems="center"
        sx={{
          mx: "auto",
          borderRadius: 5,
          border: "1px solid black",
          bgcolor: "#FEC901",
        }}
      >
        <TutorialGumroadSVG></TutorialGumroadSVG>
      </Grid>

      <Grid container item xs={6} p={3} m={3} alignItems="center" sx={{ mx: "auto" }}>
        <MKTypography
          variant="h1"
          sx={{
            fontFamily: "Mabry pro , Sans-serif ",
            fontSize: 60,
            fontStyle: "Bold",
            color: "black",
            mb: 6,
          }}
          fontFamily="Mabry pro , Sans-serif "
        >
          Sell anywhere
        </MKTypography>
        <MKTypography
          variant="body1"
          color="text"
          sx={{
            fontFamily: "Mabry pro , Sans-serif",
            fontSize: 30,
            fontStyle: "Bold",
          }}
          fontFamily="Mabry pro , Sans-serif"
        >
          Create and customize your storefront with our all-in-one platform or choose to use your
          personal site instead. With Zapier, you can seamlessly connect your Gumroad account to
          thousands of apps in your current stack.
        </MKTypography>
      </Grid>
    </MKBox>
  );
}

export default SellAnywhere;
