import { Link } from "react-router-dom";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
// import { Typography, Button, Box } from "@mui/material";

import Container from "@mui/material/Container";

import DefaultNavBar from "examples/Navbars/DefaultNavbar/DefaultNavBar";
import BlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import maxpack3 from "../../../assets/MyImages/Crowdfunding Images/maxpack3.png";
import mshair1 from "../../../assets/MyImages/Crowdfunding Images/hair1.png";
import mshair2 from "../../../assets/MyImages/Crowdfunding Images/hair2.png";
import ancientHero1 from "../../../assets/MyImages/Crowdfunding Images/ancientHero1.png";
import vitrivianMan from "../../../assets/MyImages/Crowdfunding Images/vitrivianMan.png";
import pixelcoin1 from "../../../assets/MyImages/Crowdfunding Images/pixelcoin1.png";
import bitcoin1 from "../../../assets/MyImages/Crowdfunding Images/bitcoin1.png";
import MonkeyNFT from "../../../assets/MyImages/Crowdfunding Images/MonkeyNFT.png";
import brainimg from "../../../assets/MyImages/Crowdfunding Images/brainimg.png";
import eagleimg from "../../../assets/MyImages/Crowdfunding Images/eagleimg.png";
import bitcoin2 from "../../../assets/MyImages/Crowdfunding Images/bitcoin2.png";
import monkeynft2 from "../../../assets/MyImages/Crowdfunding Images/monkeynft2.png";

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
              color="black"
              textAlign="center"
              sx={{ fontFamily: "serif", fontSize: 140 }}
            >
              Crowdfunding
            </MKTypography>

            <MKTypography
              variant="h1"
              color="black"
              m={5}
              textAlign="center"
              sx={{ fontFamily: "serif", fontSize: 27 }}
            >
              creators can raise funds from their audience to support their projects or products.
              <br></br>& With creators the Customers can also invest.
            </MKTypography>
          </Grid>
        </Container>
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        <Grid display="flex" flexDirection="row" justifyContent={"space-between"}>
          <MKBox display="flex" flexDirection="Column" justifyContent={"space-between"}>
            <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={vitrivianMan}
                    title="Material Kit"
                    description="One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "More about us",
                    }}
                  />
                </Grid>
              </MKBox>
              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={mshair1}
                    title="Material Kit"
                    description="One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "More about us",
                    }}
                  />
                </Grid>
              </MKBox>
              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={mshair2}
                    title="Material Kit"
                    description="One of the most beautiful and complex UI Kits built by the team behind Creative Tim. That's pretty impressive."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "More about us",
                    }}
                  />
                </Grid>
              </MKBox>
              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={ancientHero1}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book Building Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={monkeynft2}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>

              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={bitcoin1}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>

              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={MonkeyNFT}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>

              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={maxpack3}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>
            </Box>

            <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={pixelcoin1}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>

              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={eagleimg}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>

              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={brainimg}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>

              <MKBox
                pt={6}
                pb={3}
                px={3}
                sx={{
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
                    },
                  },
                }}
              >
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <BlogCard
                    image={bitcoin2}
                    title="Max Pack"
                    description="Building Impressive Book on Mission Station Building Impressive Book on Mission StationBuilding Impressive Book on Mission Station"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </Grid>
              </MKBox>
            </Box>
          </MKBox>
        </Grid>
        ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      </MKBox>

      <MKBox textAlign="center">
        <MKTypography variant="h1">FAQ</MKTypography>
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
