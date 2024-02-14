import MKBox from "components/MKBox";
import Card from "@mui/material/Card";

import PeopleInParkSVG from "assets/MyImages/gumroad_poeple_reaction.svg"; // Import SVG as a React component

function Testimonials() {
  return (
    <Card>
      <MKBox
        p={5}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        width="100%"
      >
        {/* Render SVG using imported component */}
        <PeopleInParkSVG />
      </MKBox>
    </Card>
  );
}

export default Testimonials;
