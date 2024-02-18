import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";

function MakeYourOwnRoad() {
  return (
    <>
      <Container sx={{ textAlign: "center", py: 3 }}>
        <MKTypography
          variant="h1"
          sx={{
            m: 4,
            py: 3,
            alignItems: "center",
            fontFamily: "Mabry pro, sans-serif",
            fontSize: "72", // Increase font size to 72px
          }}
          color="#000"
        >
          Make your own road
        </MKTypography>

        <MKTypography
          variant="h3"
          color="#fff"
          sx={{ my: 3, px: 30, fontFamily: "Mabry pro, sans-serif" }} // Specify the font family
          font-size="1.25rem"
          font-weight="400"
        >
          Whether you need more balance, flexibility, or just a different gig, we make it easier to
          chart a new path. You dont have to be a tech expert or even understand how to start a
          business. You just gotta take what you know and sell it.
          <br></br> <br></br>
          Explore Features →
        </MKTypography>
      </Container>
    </>
  );
}
export default MakeYourOwnRoad;
