// import { Link } from "react-router-dom";
import MKTypography from "components/MKTypography";
import DefaultFooter from "../../../examples/Footers/DefaultFooter";
import * as React from "react";
import Grid from "@mui/material/Grid";
// import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Collapse } from "@mui/material";
import MKBox from "components/MKBox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton"; // import { Typography, Button, Box } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";

import AddIcon from "@mui/icons-material/Add";

import StartSelling from "pages/Presentation/sections/StartSelling";
import DefaultNavBar from "examples/Navbars/DefaultNavbar/DefaultNavBar";
import BlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import maxpack3 from "../../../assets/MyImages/Crowdfunding Images/maxpack3.png";
import mshair1 from "../../../assets/MyImages/Crowdfunding Images/hair1.png";
import mshair2 from "../../../assets/MyImages/Crowdfunding Images/hair2.png";
import ancientHero1 from "../../../assets/MyImages/Crowdfunding Images/ancientHero1.png";
import vitrivianMan from "../../../assets/MyImages/Crowdfunding Images/vitrivianMan.png";
import pixelcoin1 from "../../../assets/MyImages/Crowdfunding Images/pixelcoin1.png";
import bitcoin1 from "../../../assets/MyImages/Crowdfunding Images/bitcoin1.png";
import MonkeyNFT from "../../../assets/MyImages/Crowdfunding Images/MonkeyNFT.png";
import brainimg from "../../../assets/MyImages/Crowdfunding Images/brainimg.png";
import eagleimg from "../../../assets/MyImages/Crowdfunding Images/eagleimg.png";
import bitcoin2 from "../../../assets/MyImages/Crowdfunding Images/bitcoin2.png";
import monkeynft2 from "../../../assets/MyImages/Crowdfunding Images/monkeynft2.png";

import Coin1 from "../../../assets/MyImages/GumroadallSVG/Crowdfunding SVG/svg-export/coin1.svg";
import Coin2 from "../../../assets/MyImages/GumroadallSVG/Crowdfunding SVG/svg-export/coin2.svg";
import Coin4 from "../../../assets/MyImages/GumroadallSVG/Crowdfunding SVG/svg-export/coin4.svg";
import Coin5 from "../../../assets/MyImages/GumroadallSVG/Crowdfunding SVG/svg-export/coin5.svg";

import RemoveIcon from "@mui/icons-material/Remove";
import Divider from "@mui/material/Divider";

function Crowdfunding() {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClick = (index) => {
    setOpen(index === selectedItem ? !open : true);
    setSelectedItem(index);
  };

  //payment integration
  const OpenStripe = async () => {
    // const card = {
    //   name: "Crypto Bitcoins Guide - The Beginner's Guide to Cryptocurrency",
    //   price: 100,
    //   quantity: 1,
    // };
    console.log("Here is the Data");
    const stripe = await loadStripe(
      "pk_test_51Omv38SDApL2Y6yKwb3LKSLCVe6zsFYvvL4x6keruJxjr2YcRQKcY6q1YeuvWunDNUOlL2SFxJLUjmhlDXNNJGuw00n73z6p3r"
    );
    const body = {
      products: [
        {
          name: "Crypto Bitcoins Guide - The Beginner's Guide to Cryptocurrency",
          price: 100,
          quantity: 1,
        },
      ],
    };

    const headers = { "Content-Type": "application/json" };

    const response = await fetch("http://localhost:7000/api/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();

    const result = stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <>
      <DefaultNavBar></DefaultNavBar>
      <Grid
        container
        bgcolor="#FEC901"
        xs={12}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", mx: "auto", p: 10 }}
      >
        <MKTypography
          variant="h1"
          color="black"
          textAlign="center"
          sx={{ fontFamily: "serif", fontSize: 140 }}
        >
          Crowdfunding
        </MKTypography>

        <MKTypography
          variant="h1"
          color="black"
          m={5}
          textAlign="center"
          sx={{ fontFamily: "serif", fontSize: 27 }}
        >
          Creators can raise funds from their audience to support their projects or products.
          <br /> & <br /> With creators, the Customers can also invest.
        </MKTypography>
      </Grid>
      <Grid item xs={6} textAlign="center">
        <Grid item sx={{ position: "absolute", left: 150, top: 350, z: 1230 }}>
          <Coin5 />
        </Grid>
        <Grid item sx={{ position: "absolute", left: 850, top: 490, z: 1230 }}>
          <Coin4 />
        </Grid>
        <Grid item sx={{ position: "absolute", left: 1550, top: 190, z: 1230 }}>
          <Coin5 />
        </Grid>
        <Grid item sx={{ position: "absolute", left: 1550, top: 390, z: 1230 }}>
          <Coin2 />
        </Grid>
        <Grid item sx={{ position: "absolute", left: 250, top: 190, z: 1230 }}>
          <Coin1 />
        </Grid>
      </Grid>
      <Grid display="flex" flexDirection="row" justifyContent={"space-between"}>
        <MKBox display="flex" flexDirection="Column" justifyContent={"space-between"}>
          <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={vitrivianMan}
                    title="Life Trining program - Project by AJAC "
                    description="The AJAC Life Training log is a daily accountability journal that you can use, based upon building and enforcing the following daily habits."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/-",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              {" "}
              <Grid>
                <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                  <div onClick={OpenStripe}>
                    <BlogCard
                      image={mshair1}
                      title="Vol 1 Clip Studio Paint, Brushes By. Vegalia. "
                      description="Vol 1 Clip Studio Paint, Photoshop & Fresco Curl, Coil, and Wave Brushes Brushes By. Vegalia. Things include  Paint, Photoshop Deluxe items."
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/general-cards",
                        color: "info",
                        label: "Starting Investment : $100/-",
                      }}
                    />
                  </div>
                </Grid>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={mshair2}
                    title="Vol 2   Clip Studio Paint, Brushes By. Vegalia."
                    description="Vol 2 Clip Studio Paint, Photoshop & Fresco Curl, Coil, and Wave Brushes Brushes By. Vegalia. Things include  Paint, Photoshop Deluxe items."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/-",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={ancientHero1}
                    title="Ancient Athletics - Alexander J.A Cortes"
                    description="Train Like the Ancients #1: Sunlight and its Role in Health 
Heal Like the Ancients #2: METH and Light vs RICE 
 Ancients Training #4 Spiritual Hygiene "
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={monkeynft2}
                    title="Hoodie Monkey el Patron NFT"
                    description="Hoodie Monkey drinking wine. 8k/3d image for NFT ready!The patron 
                  like do drink & smoke on some woods during his breaks! Because "
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={bitcoin1}
                    title="ChatGPT Crypto Trading Mastery"
                    description="Master crypto will help with using ChatGPT as a FREE trading assistant. The basics of  Crypto trading strategies, how to create NFT's using AI."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={MonkeyNFT}
                    title="How to NFT: Ebook by @TheMon3yMom"
                    description="his course covers the basics of NFTs:
How to create, buy and sell NFTs
NFT culture communit Minting NFTs
How to create a wallet
"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={maxpack3}
                    title="The Painter's MaxPack - Brushes for Procreate"
                    description="The Painter's MaxPack is a set of brushes compatible with Procreate 4+  
Enjoy 12 natural media brushes and 5 bonus smudge brushes."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>
          </Box>

          <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={pixelcoin1}
                    title="NFTs for Artists | The ultimate guide to sell your ART as an NFT"
                    description=" This course covers the basics of NFTs:

How to create, buy and sell NFTs

NFT culture and community

NFT History

How to mint NFTs"
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={eagleimg}
                    title="Eagle Eye Thinkers"
                    description="Third Eye Is a comedic slice-of-life series about friendship, growth, and observing the genuine and unique parts of our favorite 
                  things.also demons. "
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={brainimg}
                    title="Become Unstoppable- A System to Unleash your Inner Beast"
                    description="BYou will rewire your Mind and Finally build those killer Habits to optimize your Existence on Every Level -- physically,   emotionally, and financially."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment : $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>

            <MKBox
              pt={6}
              pb={3}
              px={3}
              sx={{
                transition: "transform 0.4s",
                "& > div, & > div > div": {
                  transition: "inherit",
                },
                "&:hover": {
                  "& > div": {
                    transform: "rotateY(30deg)",
                    "& > div:nth-child(2)": {
                      transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
                    },
                  },
                },
              }}
            >
              <Grid container item xs={12} sx={{ mx: "auto", px: { xs: 0, lg: 6 } }}>
                <div onClick={OpenStripe}>
                  <BlogCard
                    image={bitcoin2}
                    title="Crypto Bitcoins Guide - The Beginner's Guide to Cryptocurrency"
                    description="Crypto Bitcoins Guide: Many individuals believe that bitcoins represent a new era of digital currency and often get confused with them."
                    action={{
                      type: "internal",
                      route: "/sections/page-sections/general-cards",
                      color: "info",
                      label: "Starting Investment: $100/- ",
                    }}
                  />
                </div>
              </Grid>
            </MKBox>
          </Box>
        </MKBox>
      </Grid>
      {/* 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}
      <MKBox justifyContent="Start" fontFamily="sans-serif" sx={{ margin: 3, padding: 3 }}>
        <Typography
          variant="h1"
          textAlign="center"
          color="#000"
          fontFamily="Sansserif"
          fontStyle="Bold"
          justifyContent="Start"
          sx={{ fontSize: 75 }}
          m={5}
        >
          Frequently asked questions
          <Typography fontFamily="Mabry pro " color="#000" mb={5}>
            <br></br> have another question?
            <a href="https://help.gumroad.com/" target="blank" rel="noopener" color="#000">
              &nbsp; Visit our help center.
            </a>
          </Typography>
        </Typography>

        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            borderRadius: "12px",
            padding: 3,
          }}
        >
          {[
            {
              question: "Can I raise funds for my project using Gumroad's crowdfunding program?",
              answer:
                "Yes, \n Gumroad's crowdfunding program allows you to raise funds for your creative projects.",
            },
            {
              question: "What are the benefits of using Gumroad's crowdfunding program?",
              answer:
                "You can easily manage and receive funds for your project, and your supporters can contribute towards your success.",
            },
            {
              question: "Are there any fees for using Gumroad's crowdfunding program?",
              answer:
                "Gumroad deducts a small percentage of every sale, so you only pay when you earn.",
            },
            {
              question: "How can I get started with Gumroad's crowdfunding program?",
              answer:
                "Simply create a project, set your funding goal, and start sharing it with your audience.",
            },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={() => handleClick(index)}
                disableGutters
                sx={{ display: "flex", justifyContent: "space-between", margin: 1, padding: 1 }}
              >
                <IconButton aria-label="expand" onClick={() => handleClick(index)}>
                  {open && index === selectedItem ? <RemoveIcon /> : <AddIcon />}
                </IconButton>
                <ListItemText
                  primary={
                    <Typography
                      m={6}
                      variant="body1"
                      fontFamily="Mabry pro "
                      fontSize="40px "
                      color="#000000"
                      fontStyle="Bold"
                    >
                      {item.question}
                    </Typography>
                  }
                />
              </ListItem>

              <Collapse in={open && index === selectedItem} timeout="auto" unmountOnExit>
                <ListItemText
                  primary={
                    <Typography
                      m={10}
                      variant="body2"
                      fontFamily="serif"
                      fontSize="28px"
                      fontStyle="Bold"
                      color="#000000"
                    >
                      {item.answer}
                    </Typography>
                  }
                />
              </Collapse>
              <Divider
                variant="fullWidth"
                sx={{ margin: 1, backgroundColor: "#000", height: 1.5 }}
              />
            </React.Fragment>
          ))}
        </List>
      </MKBox>
      {/* 00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 */}
      <StartSelling />
      {/* <Link to="/"> Home ←</Link> */}
      <DefaultFooter />
    </>
  );
}

export default Crowdfunding;
