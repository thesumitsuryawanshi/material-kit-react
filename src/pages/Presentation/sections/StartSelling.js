/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Tooltip from "@mui/material/Tooltip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
// import bgImage from "assets/images/shapes/waves-white.svg";

//myip
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

const ContainerWrapper = styled(Container)({
  position: "relative",
  justifyContent: "center",
  zIndex: 2,
  py: 12,
});

const GridItemWrapper = styled(Grid)({
  container: true,
  item: true,
  xs: 12,
  md: 7,
  justifyContent: "center",
  mx: "auto",
  textAlign: "center",
});

function Download() {
  const handleStartSellingClick = () => {
    // Open Gumroad website in a new tab when the button is clicked
    window.open("https://app.gumroad.com/signup", "_blank");
  };
  return (
    <>
      <MKBox component="section">
        <MKBox
          variant="gradient"
          position="relative"
          borderRadius="xl"
          sx={{ overflow: "hidden", bgcolor: "#fc72e0", p: 1 }}
        >
          <MKBox
            // component="img"
            // src={bgImage}
            // alt="pattern-lines"
            position="absolute"
            top={0}
            left={0}
            width="100%"
            zIndex={1}
            opacity={0.6}
          />
          <ContainerWrapper>
            <MKTypography variant="h1" color="white"></MKTypography>

            <GridItemWrapper>
              <MKTypography
                variant="h1"
                color="white"
                sx={{ m: 10, fontFamily: "sansserif" }} // Specify the font family
              >
                17. Share your work. <br /> Someone out there needs it.
              </MKTypography>

              <ButtonContainer sx={{ m: 10 }}>
                <BoxYellow>
                  <BoxRed>
                    <MyBtnStartSelling
                      onClick={handleStartSellingClick} // Add onClick event
                      sx={{ px: 9, py: 1.5 }}
                    >
                      {" "}
                      Start Selling
                    </MyBtnStartSelling>{" "}
                  </BoxRed>
                </BoxYellow>
              </ButtonContainer>
            </GridItemWrapper>
          </ContainerWrapper>
        </MKBox>
      </MKBox>
    </>
  );
}
export default Download;
