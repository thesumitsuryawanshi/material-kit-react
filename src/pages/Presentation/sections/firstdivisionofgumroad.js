// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// Material Kit 2 React examples

import MKTypography from "components/MKTypography";
import SellToAnyoneSVG from "../../../assets/MyImages/GumroadallSVG/NEWS4elements.svg";

import { styled } from "@mui/system";

// mycomponents
const ButtonContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  textAlign: "center",
});
const MyBtnStartSelling = styled("div")({
  color: "white",
  backgroundColor: "black",
  borderRadius: 4,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  outline: "none",
  border: "2px solid #000" /* Thin black border */,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});
const BoxRed = styled("div")({
  color: "white",
  backgroundColor: "#f21326",
  borderRadius: 4,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  outline: "none",
  border: "2px solid #000" /* Thin black border */,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});

const BoxYellow = styled("div")({
  color: "white",
  backgroundColor: "#e8fc03",
  borderRadius: 4,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  outline: "none",
  border: "2px solid #000" /* Thin black border */,
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  "&:hover": {
    transform: "translateY(9px) translateX(9px)",
  },
});

function firstdivisionofgumroad() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        borderRadius: 2,
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          mx: "auto",
          bgcolor: "#FF90E8",
          textAlign: "center",
        }}
      >
        <MKTypography
          variant="h1"
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            color: "#000 ",
            m: 6,

            fontFamily: "serif ",
            textAlign: "center",
          }}
        >
          Go from zero to $1{" "}
        </MKTypography>
        <MKTypography
          variant="body1"
          color="white"
          sx={{
            textAlign: "center",
            fontSize: 30,
            fontFamily: "serif ",
            color: "#000",
            fontStyle: "Bold",
          }}
        >
          With Gumroad, anyone can earn their first dollar online. Just start with what you know,
          see what sticks, and get paid. It’s that easy.
          <ButtonContainer sx={{ m: 10 }}>
            <BoxYellow>
              <BoxRed>
                <MyBtnStartSelling
                  onClick={handleStartSellingClick} // Add onClick event
                  sx={{ px: 9, py: 1.5 }}
                >
                  Start Selling
                </MyBtnStartSelling>{" "}
              </BoxRed>
            </BoxYellow>
          </ButtonContainer>
        </MKTypography>

        <Grid xs={11} p={3} m={3} bgcolor="black" sx={{ height: "100%", width: "100%" }}></Grid>
      </Grid>

      <Grid item xs={6} p={6} mt={6} sx={{}}>
        <SellToAnyoneSVG></SellToAnyoneSVG>
      </Grid>
    </Grid>
  );
}
export default firstdivisionofgumroad;
