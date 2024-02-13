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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Pages from "pages/Presentation/sections/Pages";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Download from "pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

//myip's
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Presentation() {
  return (
    <>
      <Container maxWidth="sm" justifyContent="center">
        <MKTypography
          variant="h1"
          align="center"
          gutterBottom
          color="red"
          px={{ xs: 6, lg: 12 }}
          m={3}
        >
          <div>GUMROAD</div>
        </MKTypography>
      </Container>

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
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>Section 1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Section 2</Item>
          </Grid>
        </Grid>
      </MKBox>

      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Information />
        <DesignBlocks />
        <Pages />
        <Container sx={{ mt: 6 }}>
          {/* 15. $3,120,380 Amount Section */}
          <BuiltByDevelopers />
        </Container>
        {/* 16. PeoplesInPark*/}
        <Testimonials />
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
      </Card>
      {/* 19. footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
