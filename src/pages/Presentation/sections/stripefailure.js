//myip's
import * as React from "react";

// Material Kit 2 React examples
import DefaultNavBar from "../../../examples/Navbars/DefaultNavbar/DefaultNavBar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import { Typography } from "@mui/material";

function Stripefailure() {
  return (
    <>
      <MKBox>
        <img
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
          width="100%"
          height="100%"
        ></img>
        <DefaultNavBar />
        <Typography>failure</Typography>
        {/* 19. footer */}
        <MKBox pt={6} px={1} mt={6}>
          <DefaultFooter />
        </MKBox>
      </MKBox>
    </>
  );
}

export default Stripefailure;
