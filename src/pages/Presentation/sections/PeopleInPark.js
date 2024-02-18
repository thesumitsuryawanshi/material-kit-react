import MKBox from "components/MKBox";
import PeopleInParkSVG from "assets/MyImages/gumroad_poeple_reaction.svg";
import Card from "@mui/material/Card";

function PeopleInPark() {
  return (
    <Card>
      <MKBox display="flex" alignItems="center" justifyContent="center" height="100%" width="100%">
        <PeopleInParkSVG />
      </MKBox>
    </Card>
  );
}

export default PeopleInPark;
