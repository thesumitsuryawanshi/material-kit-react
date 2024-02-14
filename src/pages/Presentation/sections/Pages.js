import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MKTypography from "components/MKTypography";
import SmilingGirl from "../../../assets/MyImages/SmilingGirl.png";

import DollerLogo from "../../../assets/MyImages/GumroadallSVG/doller.svg";
import HowTo from "../../../assets/MyImages/GumroadallSVG/howTo.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Pages() {
  return (
    <Grid
      container
      sx={{ bgcolor: "#fc72e0", color: "#f0f0f0" }}
      height="100%"
      width="100%"
      display="flex"
      flexDirection="row"
      p={6}
      spacing={2}
    >
      <Grid item xs={6}>
        <Item>
          <MKTypography
            variant="h1"
            color="black"
            textAlign="center"
            sx={{ fontFamily: "serif", fontSize: 40 }}
            p={6}
            m={3}
          >
            “For years, I had a goal to develop ‘passive’ income streams, but struggled to make that
            a reality. Last year, I started selling informational products on Gumroad and since then
            have made $10k+ per month building products that I love.” <br></br>
            <br></br>
            <br></br>
            <br></br>
            <MKTypography
              variant="h1"
              color="black"
              textAlign="center"
              sx={{ fontFamily: "serif", fontSize: 30 }}
            >
              Steph Smith sells content tutorials
            </MKTypography>
          </MKTypography>
        </Item>
      </Grid>

      <Grid item xs={6} textAlign="center">
        <Grid item sx={{ position: "absolute", left: 1100, top: 5300, z: 1230 }}>
          <DollerLogo />
        </Grid>
        <Grid item sx={{ position: "absolute", left: 1450, top: 5700, z: 1230 }}>
          <HowTo />
        </Grid>

        <MKTypography
          component="img"
          src={SmilingGirl}
          alt="Meta Icon"
          width={550}
          height={700}
          mr={2.5}
        ></MKTypography>
      </Grid>
    </Grid>
  );
}
