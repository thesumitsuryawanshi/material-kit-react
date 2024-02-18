// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import TrendSVCGuySection from "pages/Presentation/sections/trendsvcGuySection";
import MaxulichneyGuySection from "pages/Presentation/sections/MaxulichneyGuySection";
import SellAnywhere from "pages/Presentation/sections/SellAnywhere";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "../Presentation/sections/Pages";

import PeopleInPark from "pages/Presentation/sections/PeopleInPark";
import Download from "pages/Presentation/sections/Download";
import SellToAnyone from "pages/Presentation/sections/SellToAnyone";

import Firstdivisionofgumroad from "pages/Presentation/sections/firstdivisionofgumroad";
import SellAnything from "pages/Presentation/sections/sellinganything";
import MakeYourOwnRoad from "pages/Presentation/sections/MakeYourOwnRoad";
import TwoSVGS from "pages/Presentation/sections/TwoSVGS";
import TwoText from "pages/Presentation/sections/TwoText";
import AnimatedGuyGumroadPathway from "pages/Presentation/sections/GumroadPathway";
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images

//myip's
import * as React from "react";

function Presentation() {
  return (
    <>
      <MKBox m={4} p={4}>
        <MKBox justifyContent="center">
          <MKTypography
            variant="h1"
            align="center"
            gutterBottom
            color="red"
            px={{ xs: 6, lg: 12 }}
            m={3}
            sx={{ fontSize: "12rem" }} // Increase font size here
          ></MKTypography>
        </MKBox>

        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "https://www.creative-tim.com/product/material-kit-react",
            label: "free download",
            color: "info",
          }}
          sticky
        />

        <Firstdivisionofgumroad></Firstdivisionofgumroad>
        <AnimatedGuyGumroadPathway />
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
        <DesignBlocks />
        {/* 14. the smiling girl */}
        <Pages />
        {/* 15. doller count Section */}
        <BuiltByDevelopers />
        {/* 16. PeoplesInPark*/}
        <PeopleInPark />
        {/* 17. goto login page */}
        <Download />
        {/* 18.intro section */}
        <MKBox pt={6} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h1" fontWeight="bold" mb={0.5}>
                  18.Thank you for your time and attention!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  My Short intro : best of the best work is the only work you can Expect.
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
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/AmazingSummitS"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp; Connect with me here
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://github.com/thesumitsuryawanshi?tab=repositories"
                  target="_blank"
                  color="github"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-github" />
                  &nbsp;GitHub Profile
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.linkedin.com/in/thesumitsuryawanshi/"
                  target="_blank"
                  color="Linkedin"
                >
                  <i className="fa fa-linkedin" />
                  &nbsp; Linkedin
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        {/* 19. footer */}
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter content={footerRoutes} />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Presentation;
