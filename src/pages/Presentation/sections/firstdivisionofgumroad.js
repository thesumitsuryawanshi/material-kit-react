// import MKTypography from "components/MKTypography";
import Vegalia from "../../../assets/MyImages/vegalia.png";
import { styled } from "@mui/system";
import GreenWritingPen from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/paintbrush.svg";
import Threecoins from "../../../assets/MyImages/GumroadallSVG/3gcoins.svg";
import { useScrollTrigger } from "@mui/material";

// import Button from "@mui/material/Button";
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

const VegaliaBTN = styled("button")({
  color: "black",
  backgroundColor: "white",
  borderRadius: 44,
  transition: "all 0.3s ease 0s",
  cursor: "pointer",
  border: "3px solid #000",
  display: "flex", // Use Flexbox
  alignItems: "center", // Center items vertically
  justifyContent: "center", // Center items horizontally
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-9px) translateX(-9px)",
  },
});

function firstdivisionofgumroad() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };
  const VengaliaClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://byvegalia.gumroad.com/?recommended_by=search", "_blank");
  };

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 40, // Adjust threshold as needed
  });

  return (
    <Grid>
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
              With Gumroad, anyone can earn their first dollar online. Just start with what you
              know, see what sticks, and get paid. It’s that easy.
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
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end", // Align content to the bottom
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
            <VegaliaBTN
              sx={{
                border: "2px solid black",
                borderRadius: "25px",
                py: 1,
                px: 2,
                fontWeight: "bold",
                position: "absolute",
                bgcolor: "#fff", // Change bgcolor to desired color
                color: "#000",
                left: 1560,
                top: 830,
                zIndex: 130,
                "&:hover": {
                  transform: "translateY(-9px) translateX(-9px)",
                },
                transition: "transform 0.1s ease",
                transform: trigger ? "translateY(-40px)" : "translateY(10)",
              }}
              color="black"
              onClick={VengaliaClick}
            >
              {" "}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FF90E8" />
                <path
                  d="M14.6108 24.0635C9.92396 24.0635 7.16699 20.3043 7.16699 15.6282C7.16699 10.7688 10.1997 6.82617 15.9893 6.82617C21.9627 6.82617 23.9845 10.8604 24.0764 13.1526H19.7572C19.6653 11.869 18.5625 9.94356 15.8974 9.94356C13.0485 9.94356 11.2105 12.4191 11.2105 15.4448C11.2105 18.4705 13.0485 20.9461 15.8974 20.9461C18.4706 20.9461 19.5734 18.929 20.0329 16.9118H15.8974V15.2615H24.575V23.6968H20.768V18.3789C20.4923 20.3043 19.2977 24.0635 14.6108 24.0635Z"
                  fill="black"
                />
              </svg>
              &nbsp; &nbsp; Vegalia
            </VegaliaBTN>
            <Grid
              sx={{
                position: "absolute",
                left: 1560,
                top: 390,
                z: 30,
                transition: "transform 0.1s ease",
                transform: trigger ? "translateY(-40px)" : "translateY(10)",
              }}
            >
              <GreenWritingPen />
            </Grid>
            <Grid
              sx={{
                position: "absolute",
                left: 1160,
                top: 780,
                z: 30,
                transition: "transform 0.1s ease",
                transform: trigger ? "translateY(-40px)" : "translateY(10)",
              }}
            >
              <Threecoins />
            </Grid>
            <img src={Vegalia} alt="MaxulichneyGuySectionPic" />
            <MKTypography
              pt={6}
              color="#000"
              sx={{
                position: "absolute",
                left: 970,
                top: 950,
                z: 30,
                transition: "transform 0.1s ease",
                transform: trigger ? "translateY(-40px)" : "translateY(10)",
              }}
            >
              {" "}
              Vegalia sells Procreate brushes
            </MKTypography>
          </MKTypography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default firstdivisionofgumroad;
