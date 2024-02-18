// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
// Material Kit 2 React examples

import MKTypography from "components/MKTypography";
import SellToAnyoneSVG from "../../../assets/MyImages/GumroadallSVG/NEWS4elements.svg";

// function SellToAnyone() {
//   return (
//     <Grid
//       container
//       spacing={2}
//       sx={{
//         borderRadius: 2,
//         border: "1px solid black",
//         textAlign: "center",
//         m: 1,
//         p: 1,
//       }}
//     >
//       <Grid
//         item
//         xs={6}
//         sx={{
//           borderRadius: 2,
//           border: "1px solid black",
//           mx: "auto",
//           bgcolor: "#000",
//           textAlign: "center",
//         }}
//       >
//         <Grid xs={11} p={3} m={3} bgcolor="black" sx={{ height: "100%", width: "100%" }}>
//           <SellToAnyoneSVG></SellToAnyoneSVG>
//         </Grid>
//       </Grid>

//       <Grid item xs={6} p={6} mt={6} sx={{}}>
//         <MKTypography
//           variant="h1"
//           sx={{
//             fontSize: 60,
//             fontStyle: "Bold",
//             color: "#000  ",
//             m: 6,

//             fontFamily: "serif ",
//             textAlign: "center",
//           }}
//         >
//           Sell to anyone
//         </MKTypography>
//         <MKTypography
//           variant="body1"
//           color="white"
//           sx={{
//             textAlign: "center",
//             fontSize: 30,
//             fontFamily: "serif ",
//             color: "#000",
//             fontStyle: "Bold",
//           }}
//         >
//           Build a loyal following with simple posts, email newsletters, and automated workflows.
//           Plus let your customers pay what they want or choose between one-time, recurring, or
//           fixed-length payments in your currency of choice. (We’ll handle the fine print, like VAT).
//         </MKTypography>
//       </Grid>
//     </Grid>
//   );
// }
// export default SellToAnyone;

// --------------------------------------------------------------------------

function SellToAnyone() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: 2,
        border: "1px solid black",
        textAlign: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#000",
          m: 0,
          pt: 10,
          fontFamily: "serif",
          textAlign: "center",
          borderRight: "1px solid black",
        }}
      >
        <MKTypography
          sx={{
            fontSize: 60,
            fontStyle: "Bold",
            m: 1,
            p: 1,
            fontFamily: "serif",
            textAlign: "center",
            bgcolor: "#000",
            color: "#000",
          }}
        >
          <Grid xs={11} p={3} m={3} bgcolor="black" sx={{ height: "100%", width: "100%" }}>
            <SellToAnyoneSVG></SellToAnyoneSVG>
          </Grid>
        </MKTypography>
      </Grid>

      <Grid
        item
        xs={6}
        sx={{
          fontSize: 60,
          fontStyle: "Bold",
          bgcolor: "#fff",
          m: 0,
          p: 0,
          fontFamily: "serif",
          textAlign: "center",
        }}
      >
        <MKTypography
          sx={{
            fontSize: 35,
            fontStyle: "bold",
            m: 6,
            p: 6,
            textAlign: "Start",
            fontFamily: "serif",
            bgcolor: "#fff",
            color: "#000",
          }}
        >
          <MKTypography
            sx={{
              fontSize: 55,
              fontStyle: "bold",
              textAlign: "Start",
              fontFamily: "serif",
              color: "#000",
            }}
          >
            Sell to Anyone
          </MKTypography>
          <br></br>
          <MKTypography
            variant="body1"
            color="white"
            sx={{
              textAlign: "start",
              fontSize: 30,
              fontFamily: "serif ",
              color: "#000",
              fontStyle: "Bold",
            }}
          >
            Build a loyal following with simple posts, email newsletters, and automated workflows.
            Plus let your customers pay what they want or choose between one-time, recurring, or
            fixed-length payments in your currency of choice. (We’ll handle the fine print, like
            VAT).
          </MKTypography>
        </MKTypography>
      </Grid>
    </Grid>
  );
}

export default SellToAnyone;
