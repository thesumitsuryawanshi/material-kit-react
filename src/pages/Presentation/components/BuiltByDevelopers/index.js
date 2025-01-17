// @mui material components
import Grid from "@mui/material/Grid";
import { useScrollTrigger } from "@mui/material";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Gcoin1 from "../../../../assets/MyImages/GumroadallSVG/gcoins.svg";
import Gcoin2 from "../../../../assets/MyImages/GumroadallSVG/gcoin2.svg";
import Gcoin3 from "../../../../assets/MyImages/GumroadallSVG/gcoin3.svg";
import Gcoin4 from "../../../../assets/MyImages/GumroadallSVG/gcoin4.svg";
import Gcoin5 from "../../../../assets/MyImages/GumroadallSVG/gcoin4.svg";

function BuiltByDevelopers() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 40, // Adjust threshold as needed
  });

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      height="100%"
      width="100%"
      my={6}
      py={6}
    >
      <MKBox
        sx={{ bgcolor: "#fff", position: "relative" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        <Grid item sx={{ position: "absolute", left: 5, top: 140, z: 123 }}>
          <Gcoin1 />
        </Grid>

        <Grid
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <MKTypography
            variant="h1"
            color="black"
            textAlign="center"
            sx={{ fontFamily: "serif", fontSize: 140 }}
          >
            $3,117,343
          </MKTypography>

          <MKTypography
            variant="h1"
            color="black"
            m={5}
            textAlign="center"
            sx={{ fontFamily: "serif", fontSize: 27 }}
          >
            The amount of income earned by Gumroad <br></br> digital entrepreneurs last week.
          </MKTypography>
          <Grid
            item
            sx={{
              position: "absolute",
              left: 1160,
              top: -270,
              transition: "transform 0.1s ease",
              transform: trigger ? "translateY(-40px)" : "translateY(10)",
            }}
          >
            <Gcoin3 />
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              left: 1550,
              top: -10,
              transition: "transform 0.1s ease",
              transform: trigger ? "translateY(-40px)" : "translateY(10)",
            }}
          >
            <Gcoin4 />
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              left: 1250,
              top: 190,
              transition: "transform 0.1s ease",
              transform: trigger ? "translateY(-40px)" : "translateY(10)",
            }}
          >
            <Gcoin2 />
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              right: 1310,
              top: 140,
              transition: "transform 0.1s ease",
              transform: trigger ? "translateY(-40px)" : "translateY(10)",
            }}
          >
            <Gcoin5 />
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            position: "absolute",
            right: 1410,
            top: -150,
            transition: "transform 0.1s ease",
            transform: trigger ? "translateY(-40px)" : "translateY(10)",
          }}
        >
          <Gcoin2 />
        </Grid>
      </MKBox>
    </Grid>
  );
}

export default BuiltByDevelopers;
