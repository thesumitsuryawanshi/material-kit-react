// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Images
import TutorialGumroadSVG from "../../../assets/MyImages/GumroadallSVG/gumroad profile and tutorial.svg";

function SellAnything() {
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
          bgcolor: "#23A195",
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
          SellAnythings
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
          Video lessons. Monthly subscriptions. Physical products. Whatever! Gumroad was created to
          help you experiment with all kinds of ideas and formats.
        </MKTypography>
        <MKTypography
          variant="body1"
          color="text"
          sx={{
            fontFamily: "Mabry pro , Sans-serif",
            fontSize: 24,
            fontStyle: "black",
          }}
          fontFamily="Mabry pro , Sans-serif"
        >
          <br></br> → Sell your Top 10 lists <br></br> → Sell your crypto tips <br></br> → Sell your
          fractal pack <br></br>→ Sell your keto cookbook <br></br>→Sell your C4D scenes <br></br> →
          Sell your new emojis <br></br> → Seriously, sell anything!
        </MKTypography>
      </Grid>
    </MKBox>
  );
}

export default SellAnything;
