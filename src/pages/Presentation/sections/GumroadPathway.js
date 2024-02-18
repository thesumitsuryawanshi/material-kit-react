import MKBox from "components/MKBox";
import Card from "@mui/material/Card";
import TopAnimationGuySection from "assets/MyImages/topAnimationofBoy.png";

function AnimatedGuyGumroadPathway() {
  return (
    <Card>
      <MKBox display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
        {/* Render the image using the img tag */}
        <img src={TopAnimationGuySection} alt="Top Animation Guy" />
      </MKBox>
    </Card>
  );
}

export default AnimatedGuyGumroadPathway;
