import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Paper } from "@mui/material";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureSection from "../../components/FeatureSection";
import AboutSection from "../../components/AboutSection";
import Zoom from "react-reveal/Zoom";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/p.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpeg";
import holister from "../../images/holister.jpeg";
import hollister from "../../images/hollister.jpeg";
import atsTownship from "../../images/ats-township.jpeg";
import sleekbrake from "../../images/sleekbrake.jpeg";
import image10 from "../../images/ac-polycotores.jpeg";
import amaryllis from "../../images/amaryllis.jpeg";
import marutisuzki from "../../images/marutisuzki.jpeg";
import insecticides from "../../images/insecticides.jpeg";
import sachdeva from "../../images/sachdeva.jpeg";
import sprintFire from "../../images/sprint-fire.jpeg";
import projectStory from "../../images/project-story.webp";
import { Fade, Roll } from "react-reveal";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
const testimonialsData = [
  {
    id: 1,
    name: "Insecticides India Pvt. Ltd. ",
    designation: "Plumbing Work",
    image: image1,
    message:
      "Insecticides (India) Ltd. is committed to fortify Agriculture with a highly productive and progressive vision and mission to make Farmers prosperous.",
  },
  {
    id: 2,
    name: "Radhey Bio.Tech Pvt. Ltd.",
    designation: "Plumbing Work",
    image: image2,
    message:
      "Radhey Bio.Tech Pvt. Ltd. is a proud member of the esteemed Kamdhenu Group, a conglomerate known for its excellence in diverse sectors including agriculture and biotechnology. ",
  },
  {
    id: 3,
    name: "Sleek Brake Products",
    designation: "Fire Figgting Work",
    image: image3,
    message:
      "Sleek Brake Products is a company specializing in the manufacturing and distribution of automotive braking components and systems. With a focus on quality, reliability, and innovation,.",
  },
  {
    id: 4,
    name: "Sachadeva Polycolor Pvt. Ltd.",
    designation: "Fire Figgting & Alarm System",
    image: image4,
    message:
      "Sachadeva PolyColor Pvt Ltd is a part of the manufacturing sector, specializing in the production of polymer-based colorants, additives, and compounds.",
  },
  {
    id: 5,
    name: "Holister Mediacl India Pvt. Ltd.",
    designation: "Fire Figgting Work",
    image: holister,
    message:
      "Hollister Medical India Pvt Ltd is a subsidiary of Hollister Incorporated, a global medical device company dedicated to advancing healthcare and improving lives of people with healthcare needs.",
  },
  // Add more testimonials as needed
];

const Testimonials = ({ testimonial }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: !isMobile ? 3 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    margin: 16,
  };
  return (
    <Grid
      container
      className="home-sec3-testomonial"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
      }}
      sm={12}
      xs={12}
    >
      <Fade bottom>
        <Typography
          variant="h4"
          className="sec3-testomonial-heading"
          style={{
            marginBottom: "3rem",
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            textAlign: "center",
          }}
          gutterBottom
        >
          Recent Projects
        </Typography>
      </Fade>

      <Slider
        {...settings}
        style={{ width: "100%", marginTop: "16px !important" }}
      >
        {testimonialsData.map((item, index) => (
          <Grid item xs={12} sm={11} key={index}>
            <Card style={{ maxWidth: 400, width: "100%" }}>
              <Zoom>
                <CardMedia
                  style={{ height: 240 }}
                  image={item.image}
                  title={item.name}
                />
              </Zoom>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  component="div"
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold" }}
                  color="text.secondary"
                >
                  {item.designation}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.message}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Slider>
    </Grid>
  );
};

const images = [
  "firesystem.jpg",
  "home1.jpeg",
  "safetyfirst.jpg",
  "watersprinkler.jpg",
  sprintFire,
  // Add more image URLs as needed
];

const ImageSliderMui = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change the interval time as needed (in milliseconds)

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <Zoom>
            <img
              className="home-sec1-testomonial-img"
              src={images[currentIndex]}
              alt={`slide-${currentIndex}`}
              style={{ width: "100%", height: "100vh", marginBottom: "-5px" }}
            />
          </Zoom>
        </Paper>
      </Grid>
    </Grid>
  );
};

const Home = () => {
  return (
    <>
      <div style={{ marginTop: "-96px" }}>
        <Grid item container className="home-sec1">
          <Grid item sm={12} sx={{ position: "relative" }}>
            <ImageSliderMui images={images} />
          </Grid>
          <Grid item sm={12} className="sec1-home-textbox" container>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ borderLeft: "8px solid red" }}
            >
              <Typography
                className="sec1-home-text"
                sx={{ fontSize: "70px", marginLeft: "10px" }}
                variant="h2"
              >
                Industry Leader in Big Flow Firefighting
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} sx={{ marginTop: "1rem" }}>
              <Typography className="sec1-home-text1" variant="body1">
                Fire Fighting Systems (FFS) is the global leader in the design,
                engineering, and manufacturing of large firefighting systems – a
                single-source supplier for both marine and land application.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7} md={9} sx={{ marginTop: "2rem" }}>
              <a
                href="/contact"
                style={{
                  background: "#ce1319",
                  color: "#ffffff",
                  width: "210px",
                  borderRadius: "10rem",
                  fontSize: "22px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  padding: "12px 40px",
                  transition: "all .5s",
                  content: "",
                  textDecoration: "none",
                }}
                className="Home-sec1-btn"
              >
                Contact Us
              </a>
              <a
                href="/contact"
                style={{
                  background: "#ce1319",
                  color: "#ffffff",
                  borderRadius: "100%",
                  marginLeft: "1rem",
                  fontSize: "24px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  transition: "all .5s",
                }}
                className="Home-sec1-btn"
              >
                <TurnRightIcon />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid className="home-sec2">
          <Grid
            container
            className="home2-container"
            style={{ justifyContent: "center", margin: "5rem 7rem 0px" }}
          >
            <Grid
              item
              sm={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Zoom>
                <Typography className="about-text" variant="h2">
                  What I do
                </Typography>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card1 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card  card100"
                  sx={{ maxWidth: "100%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={marutisuzki}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      MARUTI SUZUKLI INDIA LIMITED
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Maruti Suzuki Service has an extensive service network
                      that spans across more than 1800 cities in India, making
                      it easily accessible for customers.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card2 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={hollister}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      HOLISTER MEDICAL INDIA PRIVATE LIMITED
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Hollister Incorporated is an independent, employee-owned
                      company that develops, manufactures, and markets
                      healthcare products and services worldwide.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card3 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card card100"
                  sx={{ maxWidth: "100%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={atsTownship}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      ATS TOWNSHIP PRIVATE LIMITED
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Ats Township Private Limited is a Private incorporated on
                      30 April 2008. It is classified as Non-govt company and is
                      registered at Registrar of Companies, Delhi.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card4 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={sleekbrake}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      Sleek Brake Products (Bahadurgrah Haryana)
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      "Sleek Brake Products" is a part of Super Circle Group of
                      Companies, which was started in 1965 by founder
                      Chairman-cum-Managing Director Mr. Jagjyoti Jain.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card5 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={sachdeva}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      SACHADEVA POLYCOLOR PRIVATE LIMITED
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      Sachdeva Industries was established in 1982 as a unit
                      coloring of plastic raw materials. Seeing an increasing
                      demand for masterbatches.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card6 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card card100"
                  sx={{ maxWidth: "100%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={image10}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      AC POLYCOTERS PRIVATE LIMITED
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      AC POLYOCATERS is an ISO certified manufacturer of
                      synthetic leather in India. We process our products using
                      quality raw materials.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card7 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={amaryllis}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      THE AMARYLLIS CENTRAL PARK DELHI
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      The Amaryllis will glow and change Delhi's landscape into
                      something spectacular. Because of its location, design,
                      amenities, and manner of life.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card8 home-sec2-rol"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Zoom>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "48vh" }}
                >
                  <CardMedia
                    sx={{ height: "75%" }}
                    image={insecticides}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500", textAlign: "center" }}
                      className="home-sec2-card-text"
                    >
                      INSECTICIDES INDIA PRIVATE LIMITED
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary">
                      nsecticides INDIA Ltd in Azadpur, Delhi is known to
                      satisfactorily cater to the demands of its customer base
                      and business came into existence in 2009.
                    </Typography> */}
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>

        {/* <Grid item container className="home-project-summery">
          <Grid
            item
            // style={{ marginTop: "80px" }}
            className="sec3-heading-box"
            sm={12}
          >
            <Fade bottom>
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                className="sec3-heading"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                Project Story
              </Typography>
            </Fade>
          </Grid>
          <Grid item style={{ marginTop: "20px" }} sm={4} container>
            <Grid item sm={12}>
              <Fade bottom>
                <Typography
                  variant="h6"
                  // align="center"
                  className="landing-sec3-text"
                  style={{ color: "#fff" }}
                >
                  The journey of "Fire Fighting" began with extensive research
                  and brainstorming sessions. The team delved into the science
                  of fire behavior, studied existing firefighting techniques,
                  and analyzed real-world scenarios to identify key challenges
                  and opportunities for improvement. Drawing inspiration from
                  nature, technology, and innovative design principles, they
                  envisioned a comprehensive system that integrates cutting-edge
                  technology with practical firefighting strategies.
                </Typography>
              </Fade>
            </Grid>
            <Grid item sm={12} className="home-project-summery-btnbox">
              <a
                href="/projects"
                style={{
                  background: "#fff ",
                  color: "#ce1319",
                  // width: "210px",
                  borderRadius: "10rem",
                  fontSize: "22px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  padding: "12px 35px",
                  transition: "all .5s",
                  content: "",
                  textDecoration: "none",
                }}
                className="home-project-summery-btn"
              >
                Projects
              </a>
              <a
                href="/projects"
                style={{
                  background: "#fff",
                  color: "#ce1319",
                  borderRadius: "100%",
                  marginLeft: "1rem",
                  fontSize: "24px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  transition: "all .5s",
                }}
                className="home-project-summery-btn"
              >
                <TurnRightIcon />
              </a>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "20px" }} sm={4}>
            <Zoom>
              <img
                src={projectStory}
                className="home-project-summery-img"
                height="100%"
                width="100%"
                sx={{ transition: "transform 0.3s ease" }}
              />
            </Zoom>
          </Grid>
        </Grid> */}

        <Grid item container className="home-project-summery">
          <Grid item sm={12} md={6} className="sec3-imagebox" sx={{maxHeight:"100vh"}}>
            <img
              src={projectStory}
              className="home-project-summery-img"
              height="100%"
              width="100%"
              sx={{ transition: "transform 0.3s ease" }}
            />
          </Grid>
          <Grid item sm={12} md={6} container sx={{display:"flex",justifyContent:"center"}}>
            <Grid
              item
              sm={12}
              sx={{ padding: "2rem" }}
              className="sec3-heading-box"
            >
              <Fade bottom>
                <Typography
                  variant="h2"
                  align="center"
                  gutterBottom
                  className="sec3-heading"
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: "bold",
                  }}
                >
                  Project Story
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  // align="center"
                  className="landing-sec3-text"
                >
                  <KeyboardCommandKeyIcon
                    style={{ color: "rgb(245, 131, 32)" }}
                  />
                  The journey of "Fire Fighting" began with extensive research
                  and brainstorming sessions. The team delved into the science
                  of fire behavior, studied existing firefighting techniques,
                  and analyzed real-world scenarios to identify key challenges
                  and opportunities for improvement. Drawing inspiration from
                  nature, technology, and innovative design principles, they
                  envisioned a comprehensive system that integrates cutting-edge
                  technology with practical firefighting strategies.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  // align="center"
                  sx={{ marginTop: "1rem" }}
                  className="landing-sec3-text"
                >
                  <KeyboardCommandKeyIcon
                    style={{ color: "rgb(245, 131, 32)" }}
                  />
                  Fires can be unpredictable and are getting larger. With each
                  passing year, there is more property, environmental damage,
                  and lives lost due to these raging fires. To combat this,
                  firefighters need a fighting advantage.
                </Typography>
              </Fade>
            </Grid>
            <Grid item sm={12} className="home-project-summery-btnbox">
              <a
                href="/projects"
                style={{
                  background: "rgb(206, 19, 25)",
                  color: "#fff",
                  // width: "210px",
                  borderRadius: "10rem",
                  fontSize: "22px",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  padding: "12px 40px",
                  transition: "all .5s",
                  content: "",
                  textDecoration: "none",
                }}
                className="home-project-summery-btn"
              >
                Projects
              </a>
              <a
                href="/projects"
                style={{
                  background: "rgb(206, 19, 25)",
                  color: "#fff",
                  borderRadius: "100%",
                  marginLeft: "1rem",
                  fontSize: "24px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  transition: "all .5s",
                }}
                className="home-project-summery-btn"
              >
                <TurnRightIcon />
              </a>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          // direction="column"
          alignItems="center"
          justifyContent="center"
          className="home-sec3"
          style={{
            minHeight: "400px",
            // background:      " linear-gradient(94.64deg, #B023C2 -0.12%, #680DE4 99.52%)",
            // background:  "linear-gradient(rgb(176, 35, 194) 15%, rgb(96, 11, 231))",
            // background:
            //   "linear-gradient(-45deg, rgba(31,164,30,255) -5%, rgba(245,131,32,255))",
            background: "#252525",
          }}
          // sm={12}
        >
          <Grid item container xs={12} sm={10} style={{ marginBottom: "5rem" }}>
            <Testimonials />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className="home-sec5"
          style={{
            minHeight: "450px",
            background: "#ffffff",
            padding: "2rem",
          }}
          xs={12}
        >
          <Fade bottom>
            <Typography
              variant="h2"
              align="left"
              className="sec5-heading"
              gutterBottom
              style={{
                color: "rgb(245, 131, 32)",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Scope of Works
            </Typography>
          </Fade>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="landing-sec5-btn-grid"
            // spacing={3}
            sm={6}
            style={{ marginTop: "30px", marginBottom: "20px" }}
          >
            <AboutSection />
          </Grid>
        </Grid>

        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className="landing-sec5"
          style={{
            padding: "2rem",
          }}
          xs={12}
        >
          <Fade bottom>
            <Typography
              variant="h4"
              className="sec4-heading"
              style={{
                fontWeight: "bold",
                color: "#fff",
                marginBottom: "2rem",
              }}
            >
              Working Experience
            </Typography>
          </Fade>
          <FeatureSection />
        </Grid>
        <Footer />
      </div>
    </>
  );
};

export default Home;
