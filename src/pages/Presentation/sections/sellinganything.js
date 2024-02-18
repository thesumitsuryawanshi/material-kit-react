import Grid from "@mui/material/Grid"; // Import Grid component
import PayMonthlySVG from "../../../assets/MyImages/GumroadallSVG/pay monthly.svg";

import MKTypography from "components/MKTypography";

function SellAnything() {
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
          bgcolor: "#23A195",
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
            bgcolor: "#23A195",
            color: "#23A195",
          }}
        >
          <PayMonthlySVG height="100%" weight="100% " />
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
            Sell anything
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
            Video Lessons Monthly subscriptions. Physical products. Whatever! Gumroad was created to
            help you experiment with all kinds of ideas and formats.
          </MKTypography>

          <MKTypography
            sx={{
              fontSize: 24,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            {" "}
            <br></br> → Sell your Top 10 lists
            <br></br> → Sell your crypto tips
            <br></br> → Sell your fractal pack
            <br></br> → Sell your keto cookbook
            <br></br> → Sell your C4D scenes
            <br></br> → Sell your new emojis
            <br></br> → Seriously, sell anything!
          </MKTypography>
        </MKTypography>
      </Grid>
    </Grid>
  );
}

export default SellAnything;
