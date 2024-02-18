import Grid from "@mui/material/Grid"; // Import Grid component
import ConfusedOnLaptop from "../../../assets/MyImages/GumroadallSVG/cofused on Laptop.svg";
import UnderTree from "../../../assets/MyImages/GumroadallSVG/seating unde hte tree.svg";

import MKTypography from "components/MKTypography";

function MakeYourOwnRoad() {
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
          bgcolor: "#000",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        <MKTypography
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            m: 6,
            p: 6,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#000",
            color: "#000",
          }}
        >
          <ConfusedOnLaptop />
        </MKTypography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#FEC901",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <MKTypography
          sx={{
            fontSize: 60,
            fontStyle: "bold",
            m: 6,
            p: 6,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#FEC901",
            color: "#000",
          }}
        >
          <UnderTree />
        </MKTypography>
      </Grid>
    </Grid>
  );
}

export default MakeYourOwnRoad;
