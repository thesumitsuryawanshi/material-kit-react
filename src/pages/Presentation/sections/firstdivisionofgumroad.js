// import MKTypography from "components/MKTypography";
import Vegalia from "../../../assets/MyImages/GumroadallSVG/vegalia.png";
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

import Grid from "@mui/material/Grid"; // Import Grid component

import MKTypography from "components/MKTypography";

function firstdivisionofgumroad() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };

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
          bgcolor: "#FF91E9",
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
            fontFamily: "Mabry pro , Sans-serif",
            textAlign: "center",
            bgcolor: "#FF91E9",
            color: "#FF91E9",
          }}
        >
          <MKTypography
            variant="h1"
            sx={{
              fontSize: 70,
              fontStyle: "Bold",
              color: "#000 ",
              m: 1,
              p: 1,
              fontFamily: "Mabry pro",
              textAlign: "center",
            }}
          >
            Go from <br></br> zero to $1{" "}
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            sx={{
              textAlign: "center",
              fontSize: 24,
              fontFamily: "Mabry pro, sans-serif",
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
          <img src={Vegalia} alt="MaxulichneyGuySectionPic" />
          <MKTypography pt={6} color="#000">
            Vegalia sells Procreate brushes
          </MKTypography>
        </MKTypography>
      </Grid>
    </Grid>
  );
}

export default firstdivisionofgumroad;
