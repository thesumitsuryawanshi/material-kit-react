// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useScrollTrigger } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// Material Kit 2 React examples

import FreeSVG from "../../../assets/MyImages/GumroadallSVG/free.svg";
import { styled } from "@mui/material/styles";

import MKTypography from "components/MKTypography";
import counterSectionMan from "../../../assets/MyImages/trendsvc.png";
import BOOKSVG from "../../../assets/MyImages/GumroadallSVG/MyPNG new/vectorpaintBooks.png";

const MyBtnStartSelling = styled("button")({
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

const handleStartSellingClick = () => {
  window.open("https://trendsvc.gumroad.com/?recommended_by=search", "_blank");
};

function trendsvcGuySection() {
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 10, // Adjust threshold as needed
  });

  return (
    <MKBox
      py={6}
      my={6}
      sx={{
        margin: 2,
        borderRadius: 5,
        justifyContent: "space-between",
        border: "1px solid black",
        bgcolor: "#23A195",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center", // Align items vertically
          justifyContent: "space-between",
        }}
      >
        <Grid container item xs={11} p={5} m={5} alignItems="center" sx={{ mx: "auto" }}>
          <MKTypography
            variant="body1"
            color="black"
            sx={{
              fontFamily: "Mabry pro , Sans-serif",
              fontSize: 30,
              fontStyle: "Bold",
              alignItems: "center", // Align items vertically

              color: "white",
            }}
            fontFamily="Mabry pro , Sans-serif"
          >
            “Originally, I took pre-orders for my Trend Reports on Gumroad. But I received...
            exactly $0. So I changed tactics: I made half of my report free, and the other half
            paid. Today, 99% of Trends.VC revenue is recurring in the form of annual and quarterly
            subscriptions.”
          </MKTypography>
          <MKTypography
            m={4}
            sx={{
              fontFamily: "Mabry pro , Sans-serif",
              fontSize: 25,
              fontStyle: "Bold",
              alignItems: "center", // Align items vertically

              color: "black",
            }}
          >
            DruRiley sells business insights and expertise
          </MKTypography>
        </Grid>

        <MKBox
          sx={{
            position: "absolute",
            left: 670,
            top: 350,
            zIndex: 1230,
            transition: "transform 0.1s ease",
            transform: trigger ? "translateY(-40px)" : "translateY(10)",
          }}
        >
          <img src={BOOKSVG} alt="Description of your image" />
        </MKBox>

        <MyBtnStartSelling
          onClick={handleStartSellingClick} // Add onClick event
          sx={{
            fontFamily: "serif",
            fontSize: 30,
            pl: 3,
            p: 1,
            position: "absolute",
            left: 1150,
            top: 480,
            z: 11,
            transform: trigger ? "translateY(-10px)" : "translateY(0)",

            transition: "transform 0.1s ease",
          }}
        >
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
          trendsvc
        </MyBtnStartSelling>
        <Grid
          item
          sx={{
            position: "absolute",
            left: 1150,
            top: 10,
            z: 1221,
            transition: "transform 0.3s ease",
            transform: trigger ? "translateY(-40px)" : "translateY(10)",
          }}
        >
          <FreeSVG />
        </Grid>
        <Grid
          item
          sx={{
            position: "absolute",
            left: 680,
            top: 455,
            z: 11,
            transition: "transform 0.1s ease",
            transform: trigger ? "translateY(-40px)" : "translateY(10)",
          }}
        ></Grid>

        <Grid p={3} m={4} alignItems="center" justify="center">
          <img src={counterSectionMan} alt="MaxulichneyGuySectionPic" />
        </Grid>
      </Container>
    </MKBox>
  );
}
export default trendsvcGuySection;
