// @mui material components
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BounceBall from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/bouncedball.svg";
import Mike from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/mike.svg";
import Scissor from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/scissor.svg";
import BoomSpark from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/boomspark.svg";

import Soft_Developement1 from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/soft_developement.svg";
import LoudSpeaker3 from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/loud speakers.svg";
import Books from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/books.svg";

import Films from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/Films.svg";
import Volleyball_finger from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/volleyball_onFinger.svg";
import Gaming from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/Gaming.svg";

import LoudSpeaker1 from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/loud speakers.svg";
import Camera from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/camera.svg";
import Shoes from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/shoes.svg";

import windowClick from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/windowClick.svg";
import PinkPaintBrush from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/PinkPaintBrush.svg";
import GreenWritingPen from "../../../assets/MyImages/GumroadallSVG/BlocksSVGS/greenWritingPen.svg";

function DesignBlocks() {
  const sectionData = [
    {
      icon: BounceBall,
      color: "#22A194",
      headtext: "3D",
      subheadtext: "Perfect your craft with the same tools used at Dreamworks and Pixar.",
      tags: ["Blender", "3D Model", "Spark AR"],
    },
    {
      icon: Mike,
      color: "#E2442F",
      headtext: "Audio",
      subheadtext: "Open your ears and mind to interviews, meditations, and true crime thrillers.",
      tags: ["Meditation", "Hypnosis", "Subliminal Messages"],
    },
    {
      icon: Scissor,
      color: "#22A194",
      headtext: "Business & Money",
      subheadtext: "Learn to earn in an increasingly unpredictable world.",
      tags: ["Notion Template", "Investing", "Instagram"],
    },
    {
      icon: BoomSpark,
      color: "#F1F232",
      headtext: "Comics & Graphic Novels",
      subheadtext: "Sequential art with loads of heart. Welcome to a paradise of panels.",
      tags: ["Comic", "Manga", "Anime"],
    },
    {
      icon: windowClick,
      color: "#FEC901",
      headtext: "Design",
      subheadtext: "Code, design, and ship your dream product with these technical resources.",
      tags: ["Textures", "Mockup", "Font"],
    },
    {
      icon: PinkPaintBrush,
      color: "#91A9ED",
      headtext: "Drawing & Painting",
      subheadtext: "Tutorials, plugins, and brushes from pro concept artists and illustrators.",
      tags: ["Procreate", "Brushes", "Art"],
    },
    {
      icon: Books,
      color: "#22A194",
      headtext: "Education",
      subheadtext: "Pick up a new skill with courses and guides from world-class pros.",
      tags: ["Education", "Certification Exams", "Learning"],
    },
    {
      icon: GreenWritingPen,
      color: "#91A9ED",
      headtext: "Fiction Books",
      subheadtext:
        "Short stories, novellas, and epic tomes full of interesting characters and worlds.",
      tags: ["Sci-Fi", "Poetry", "Fiction"],
    },
    {
      icon: Films,
      color: "#E2442F",
      headtext: "Films",
      subheadtext: "Have a movie night with some of the best stories to hit the small screen.",
      tags: ["After Effects", "VJ Loops", "LUTs"],
    },
    {
      icon: Volleyball_finger,
      color: "#FEC901",
      headtext: "Fitness & Health",
      subheadtext: "Whether you’re looking to shed or shred, here are coaches to pump you up.",
      tags: ["Fitness", "Workout Program", "Yoga"],
    },
    {
      icon: Gaming,
      color: "#E2442F",
      headtext: "Gaming",
      subheadtext: "Explore new worlds from the world’s most creative indie developers.",
      tags: ["VRChat", "Avatar", "Assets"],
    },
    {
      icon: LoudSpeaker1,
      color: "#F1F232",
      headtext: "Music & Sound Design",
      subheadtext: "Tracks, beats, and loops from the best musicians and engineers in the biz.",
      tags: ["Ableton", "Sample Pack", "Sheet Music"],
    },
    {
      icon: Camera,
      color: "#22A194",
      headtext: "Photography",
      subheadtext: "Get snapping with pro presets, stock imagery, and digi darkroom needs.",
      tags: ["Reference Photos", "Stock Photos", "Photobash"],
    },
    {
      icon: LoudSpeaker3,
      color: "#F1F232",
      headtext: "Recorded Music",
      subheadtext: "Tracks and albums from the best musicians and artists in the biz.",
      tags: ["Singles", "Jazz", "Instrumental Music"],
    },
    {
      icon: Shoes,
      color: "#E2442F",
      headtext: "Self Improvement",
      subheadtext: "Move your body and your audience with guides, videos, and more.",
      tags: ["Coloring Page", "Printable", "Productivity"],
    },
    {
      icon: Soft_Developement1,
      color: "#FEC901",
      headtext: "Software Development",
      subheadtext: "Learn to code and tools to help you code more productively.",
      tags: ["Programming", "Windows", "Theme"],
    },
    {
      icon: GreenWritingPen,
      color: "#91A9ED",
      headtext: "Writing & Publishing",
      subheadtext: "Fill your brain with words and wisdom from creative authors and storytellers.",
      tags: ["KDP Interior", "eBook", "Low Content Books"],
    },
  ];

  const renderTags = (tags) =>
    tags.map((tag, index) => (
      <Button
        key={index}
        size="small"
        sx={{ mr: 1, mb: 1, border: "1px solid black", fontWeight: "bold" }}
        variant="contained"
        color="white"
      >
        {tag}
      </Button>
    ));

  const sections = sectionData.map((section, index) => (
    <Grid
      key={index}
      sx={{ width: "33%", p: 1, textAlign: "start" }}
      style={{ display: "inline-block" }}
    >
      <Card
        sx={{
          backgroundColor: section.color,
          margin: 1,
          borderRadius: 5,
          border: "1px solid black",
        }}
      >
        <CardMedia
          sx={{ height: 10, width: 10, objectFit: "contain", margin: "auto" }}
          image={section.icon}
          title="SVG"
        />
        <section.icon></section.icon>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {section.headtext}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {section.subheadtext}
          </Typography>
          <Typography variant="body2" m={2} style={{ fontWeight: "bold" }}>
            Popular Tags
          </Typography>
          <div style={{ display: "flex", flexWrap: "wrap" }}>{renderTags(section.tags)}</div>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container bgcolor="#000">
        <Grid
          container
          item
          bgcolor="#000"
          xs={12}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", m: 6, mx: "auto", px: 5 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Infinite Ways to Earn"
            container
            sx={{ mb: 5 }}
          />
          <MKTypography variant="h1">Looking for inspiration on what you can sell?</MKTypography>
          <MKTypography variant="body1" color="text">
            Discover the best-selling products and creators on Gumroad.
          </MKTypography>
        </Grid>
        <MKBox display="flex" flexdirection="row" bgcolor="#000"></MKBox>
      </Container>

      <React.Fragment style={{ textAlign: "center", justifyContent: "center" }}>
        <Grid container spacing={3} style={{ textAlign: "center", justifyContent: "center" }}>
          {sections}
        </Grid>
      </React.Fragment>
    </MKBox>
  );
}

export default DesignBlocks;
