import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid"; // Import Grid component
import ConfusedOnLaptop from "../../../assets/MyImages/GumroadallSVG/cofused on Laptop.svg";
import UnderTree from "../../../assets/MyImages/GumroadallSVG/seating unde hte tree.svg";

function MakeYourOwnRoad() {
  return (
    <>
      <Grid
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          m: 6,
          p: 6,
          bgcolor: "#f00",
        }}
      >
        <Grid>
          <MKTypography variant="h1" sx={{ alignItems: "center", bgcolor: "#000", p: 6 }}>
            <ConfusedOnLaptop />
          </MKTypography>
        </Grid>
        <Grid>
          <UnderTree />
        </Grid>
      </Grid>
    </>
  );
}
export default MakeYourOwnRoad;
