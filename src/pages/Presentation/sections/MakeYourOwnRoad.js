import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";

function MakeYourOwnRoad() {
  return (
    <>
      <Container sx={{ textAlign: "center" }}>
        <MKTypography variant="h1" sx={{ alignItems: "center" }} color="#000" p={6}>
          {" "}
          Make your own road
        </MKTypography>

        <MKTypography
          variant="h3"
          color="#000"
          sx={{ my: 3, px: 10, fontFamily: "serif" }} // Specify the font family
        >
          Whether you need more balance, flexibility, or just a different gig, we make it easier to
          chart a new path. You dont have to be a tech expert or even understand how to start a
          business. You just gotta take what you know and <br></br> sell it. <br></br>
          Explore Features →
        </MKTypography>
      </Container>
    </>
  );
}
export default MakeYourOwnRoad;
