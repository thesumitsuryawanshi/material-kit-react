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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      p={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        item
        xs={12}
        lg={6}
        sx={{ ml: { xs: 0, lg: 6 } }}
      >
        <MKTypography variant="h1" color="white" fontWeight="bold">
          $3,120,380
        </MKTypography>
        <MKTypography variant="body1" color="white" opacity={0.8} m={6}>
          The amount of income earned by Gumroad digital entrepreneurs last week. <br></br>
        </MKTypography>
      </Grid>
    </MKBox>
  );
}

export default BuiltByDevelopers;
