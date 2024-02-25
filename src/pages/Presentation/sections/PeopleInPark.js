import MKBox from "components/MKBox";
import PeopleInParkSVG from "assets/MyImages/GumroadallSVG/MyPNG new/PeopleInPark.png";
import Card from "@mui/material/Card";

function PeopleInPark() {
  return (
    <Card>
      <MKBox display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
        <img src={PeopleInParkSVG}></img>
      </MKBox>
    </Card>
  );
}

export default PeopleInPark;
