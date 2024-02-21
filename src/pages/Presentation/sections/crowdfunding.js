import { Link } from "react-router-dom";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button, Box } from "@mui/material";

import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import maxpack from "../../../assets/MyImages/Crowdfunding Images/maxpack1.png";

import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import DefaultNavBar from "examples/Navbars/DefaultNavbar/DefaultNavBar";

function Crowdfunding() {
  return (
    <>
      <DefaultNavBar></DefaultNavBar>

      <MKBox compone nt="section" my={6} py={6}>
        <Container>
          <Grid
            container
            item
            xs={12}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", m: 6, mx: "auto", px: 5 }}
          >
            <MKTypography
              variant="h1"
              sx={{ fontFamily: "", fontSize: 60, fontStyle: "Bold", color: "black" }}
              fontFamily="Mabry pro , Sans-serif "
            >
              Crowdfunding
            </MKTypography>
            <MKTypography
              variant="body1"
              color="text"
              sx={{
                fontFamily: "Mabry pro , Sans-serif",
                fontSize: 20,
                fontStyle: "Bold",
                color: "black",
              }}
              fontFamily="Mabry pro , Sans-serif"
            >
              Now,Invest in individuals and businesses and Grow with them as well.
            </MKTypography>
          </Grid>
        </Container>
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <Grid display="flex" flexDirection="row" justifyContent={"space-between"}>
          <MKBox display="flex" flexDirection="row" justifyContent={"space-between"}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
              sx={{
                perspective: "1000px",
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                    "& > div:nth-child(3)": {
                      transform: "translate3d(45px, 50px, 40px)",
                    },
                  },
                },
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  minHeight: "540px",
                  width: 340,
                  backgroundColor: "#fff",
                  borderColor: "#f00",
                  p: 4,
                  m: 4,
                }}
              >
                <Typography level="h2" fontSize="lg" textColor="#000">
                  Beardo Oil
                </Typography>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    border: "1px solid",
                    borderColor: "#f00",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <img
                    src={maxpack}
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                    height="100%"
                    width="100%"
                    border="2px solid black"
                  />
                </CardCover>

                <CardContent
                  sx={{
                    alignItems: "self-end",
                    justifyContent: "flex-end",
                    background: "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                    border: "1px solid",
                    borderColor: "#000",
                    backdropFilter: "blur(1px)",
                    borderRadius: " 4px ",
                  }}
                >
                  <Typography level="h2" fontSize="xl" sx={{ m: 0.5 }} color="#fff">
                    $50,000/- raised
                  </Typography>

                  <Typography
                    level="title-lg"
                    textAlign="center"
                    sx={{ m: 0.5 }}
                    color="#fff"
                    m={2}
                  >
                    Number of Investors : 10
                  </Typography>
                  <Button level="body-sm" sx={{ m: 1 }} textColor="#ffffff" textAlign="center">
                    See More
                  </Button>
                </CardContent>
              </Card>
              <MKBox></MKBox>
              <Card
                variant="outlined"
                sx={{
                  minHeight: "540px",
                  width: 340,
                  backgroundColor: "#fff",
                  borderColor: "#f00",
                  p: 4,
                  m: 4,
                }}
              >
                <Typography level="h2" fontSize="lg" textColor="#000">
                  Beardo Oil
                </Typography>
                <CardCover
                  sx={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
                    border: "1px solid",
                    borderColor: "#f00",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <img
                    src={maxpack}
                    srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                    height="100%"
                    width="100%"
                    border="2px solid black"
                  />
                </CardCover>

                <CardContent
                  sx={{
                    alignItems: "self-end",
                    justifyContent: "flex-end",
                    background: "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
                    border: "1px solid",
                    borderColor: "#000",
                    backdropFilter: "blur(1px)",
                    borderRadius: " 4px ",
                  }}
                >
                  <Typography level="h2" fontSize="xl" sx={{ m: 0.5 }} color="#fff">
                    $50,000/- raised
                  </Typography>

                  <Typography
                    level="title-lg"
                    textAlign="center"
                    sx={{ m: 0.5 }}
                    color="#fff"
                    m={2}
                  >
                    Number of Investors : 10
                  </Typography>
                  <Button level="body-sm" sx={{ m: 1 }} textColor="#ffffff" textAlign="center">
                    See More
                  </Button>
                </CardContent>
              </Card>

              <Grid sx={{ alignItems: "center" }}></Grid>
            </Box>
          </MKBox>
        </Grid>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </MKBox>

      <MKBox>
        <MKTypography>this is Crowfunding</MKTypography>
        <Link to="/">Go back to home</Link>
        {/* Your crowdfunding page content */}
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Crowdfunding;
