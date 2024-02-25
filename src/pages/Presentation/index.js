// @mui material components
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavBar from "../../examples/Navbars/DefaultNavbar/DefaultNavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import TrendSVCGuySection from "pages/Presentation/sections/trendsvcGuySection";
import MaxulichneyGuySection from "pages/Presentation/sections/MaxulichneyGuySection";
import SellAnywhere from "pages/Presentation/sections/SellAnywhere";
import Seventeenblocks from "pages/Presentation/sections/Seventeenblocks";
import SmileyGirl from "./sections/SmileyGirl";

import PeopleInPark from "pages/Presentation/sections/PeopleInPark";
import StartSelling from "pages/Presentation/sections/StartSelling";
import SellToAnyone from "pages/Presentation/sections/SellToAnyone";

import Firstdivisionofgumroad from "pages/Presentation/sections/firstdivisionofgumroad";
import SellAnything from "pages/Presentation/sections/sellinganything";
import MakeYourOwnRoad from "pages/Presentation/sections/MakeYourOwnRoad";
import TwoSVGS from "pages/Presentation/sections/TwoSVGS";
import TwoText from "pages/Presentation/sections/TwoText";
import TopAnimationGuy from "pages/Presentation/sections/TopAnimationGuy";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

//myip's
import * as React from "react";

function Presentation() {
  return (
    <>
      <MKBox>
        <img
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
          width="100%"
          height="100%"
        ></img>
        <DefaultNavBar />
        <Firstdivisionofgumroad></Firstdivisionofgumroad>
        <TopAnimationGuy />
        {/* <GumroadPathway /> */}
        <TwoText></TwoText>
        <TwoSVGS></TwoSVGS>
        {/* just a text of MakeYourOwnRoad  */}
        <MakeYourOwnRoad />
        <SellAnything />
        {/* MaxulichneyGuySection */}
        <MaxulichneyGuySection />
        {/* originally trendsvc guy section */}
        <SellToAnyone />
        {/* originally trendsvc guy section */}
        <TrendSVCGuySection></TrendSVCGuySection>
        {/* sell anywhere */}
        <SellAnywhere />
        {/* 13. inspiration Tabs */}
        <Seventeenblocks />
        {/* 14. the smiling girl */}
        <SmileyGirl />
        {/* 15. doller count Section */}
        <BuiltByDevelopers />
        {/* 16. PeoplesInPark*/}
        <PeopleInPark />
        {/* 17. goto login page */}
        <StartSelling />
        {/* 18.intro section */}
        <MKBox p={6} m={6} border="1px solid black" borderRadius="12px">
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h1" fontWeight="bold" mb={0.5}>
                  Crowfunding
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  A new way of gumroad where Creators or Customer can become investors{" "}
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton variant="contained" size="large">
                  <Link to="/crowdfunding">What is Crowdfunding?</Link>
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        {/* 19. footer */}
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Presentation;
