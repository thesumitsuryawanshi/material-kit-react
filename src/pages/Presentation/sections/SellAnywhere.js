import Grid from "@mui/material/Grid"; // Import Grid component
import GumroadProfileandTutorial from "../../../assets/MyImages/GumroadallSVG/gumroad profile and tutorial.svg";
import MKTypography from "components/MKTypography";

function SellAnywhere() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 2,
        border: "1px solid black",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#FEC901",
          m: 0,
          pt: 10,
          fontFamily: "serif",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        <MKTypography
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            m: 1,
            p: 1,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#FEC901",
            color: "#FEC901",
          }}
        >
          <GumroadProfileandTutorial height="100%" weight="100% " />
        </MKTypography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#fff",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <MKTypography
          sx={{
            fontSize: 35,
            fontStyle: "bold",
            m: 6,
            p: 6,
            textAlign: "Start",
            fontFamily: "serif",
            bgcolor: "#fff",
            color: "#000",
          }}
        >
          <MKTypography
            sx={{
              fontSize: 70,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            Sell Anywhere
          </MKTypography>
          <br></br>
          <MKTypography
            sx={{
              fontSize: 30,
              fontStyle: "bold",

              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            Sell anywhere Create and customize your storefront with our all-in-one platform or
            choose to use your personal site instead. With Zapier, you can seamlessly connect your
            Gumroad account to thousands of apps in your current stack.
          </MKTypography>
        </MKTypography>
      </Grid>
    </Grid>
  );
}

export default SellAnywhere;
