import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// import MKInput from "components/MKInput";

// import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Typography from "components/MKTypography";
import MKBox from "components/MKBox";

import React, { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

// import Paper from "@mui/material/Paper";
// import { styled } from "@mui/material/styles";
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
// }));

function DefaultFooter() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        borderRadius: "xl",
        bgcolor: "#15191C",
        p: 6,
        m: 2,
      }}
      spacing={2}
    >
      <Grid spacing={2} xs={8}>
        <Grid xs={12}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              flexDirection: "column",
              color: "text.secondary",
              "& svg": {
                m: 1,
              },
              "& hr": {
                mx: 0.5,
              },
            }}
          >
            <MKTypography display="flex" p={6} variant="h1">
              Subscribe to get tips and tactics to grow the way you want.
            </MKTypography>
            <Grid container px={3} mb={5} alignItems="center">
              <Grid item xs={10}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  required
                  style={{
                    borderRadius: "10px 0 0 10px",
                    fontStyle: "bold",
                    color: "Black",
                    fontSize: 17,
                    width: "calc(100%)",
                    height: 75,
                    textAlign: "Start",
                    paddingLeft: "30px", // Add left padding
                    marginLeft: "0px",
                  }}
                />
              </Grid>
              <MKButton
                onClick={handleClick}
                style={{ backgroundColor: "black", borderRadius: "0 10px 10px 0" }} // Set border radius for the button
                size="lg"
                m={6}
                p={6}
              >
                <MKTypography style={{ fontSize: 34, color: "white", fontStyle: "italic" }}>
                  →
                </MKTypography>
              </MKButton>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Hello</DialogTitle>
                <DialogContent>
                  <Typography variant="body1">This is a modal dialog.</Typography>
                </DialogContent>
                <DialogActions>
                  <MKButton onClick={handleClose} color="dark">
                    Close
                  </MKButton>
                </DialogActions>
              </Dialog>

              <Grid marginTop={6} alignItems="center">
                <MKBox
                  component="div"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center", // Align items vertically
                  }}
                >
                  {" "}
                  {/* Use 'div' as component for SVG */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#FF90E8" />
                    <path
                      d="M14.6108 24.0635C9.92396 24.0635 7.16699 20.3043 7.16699 15.6282C7.16699 10.7688 10.1997 6.82617 15.9893 6.82617C21.9627 6.82617 23.9845 10.8604 24.0764 13.1526H19.7572C19.6653 11.869 18.5625 9.94356 15.8974 9.94356C13.0485 9.94356 11.2105 12.4191 11.2105 15.4448C11.2105 18.4705 13.0485 20.9461 15.8974 20.9461C18.4706 20.9461 19.5734 18.929 20.0329 16.9118H15.8974V15.2615H24.575V23.6968H20.768V18.3789C20.4923 20.3043 19.2977 24.0635 14.6108 24.0635Z"
                      fill="black"
                    />
                  </svg>
                  <MKTypography m={1}>Ⓒ Gumroad, Inc. </MKTypography>
                </MKBox>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid xs={4} container m={6}>
        <Card>
          <MKTypography m={6} p={6} display="flex" alignItems="center">
            Section 2
          </MKTypography>
        </Card>
      </Grid>
    </Card>
  );
}

DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
