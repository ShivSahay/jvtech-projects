import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Container, Paper } from "@mui/material";
import "./Home.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeatureSection from "./components/FeatureSection";
import AboutSection from "./components/AboutSection";
import Zoom from "react-reveal/Zoom";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";
import image4 from "./images/4.jpeg";
import image5 from "./images/5.jpeg";
import image6 from "./images/6.jpeg";
import image7 from "./images/7.jpeg";
import image8 from "./images/8.jpeg";
import image9 from "./images/9.jpeg";
import image10 from "./images/10.jpeg";
import image11 from "./images/11.jpeg";
import image12 from "./images/12.jpeg";
import image13 from "./images/13.jpeg";
import image14 from "./images/14.jpeg";
import image15 from "./images/15.jpeg";
import { Fade, Roll } from "react-reveal";
const testimonialsData = [
  {
    id: 1,
    name: "INSECTICIDES INDIA PVT LTD AZADPUR DELHI",
    designation: "Plumbing Work",
    image: image1,
    message:
      "Insecticides (India) Ltd. is committed to fortify Agriculture with a highly productive and progressive vision and mission to make Farmers prosperous.",
  },
  {
    id: 2,
    name: "RADHEY BIO.TECH PVT. LTD. (KAMDHENU GROUP)",
    designation: "Plumbing Work",
    image: image2,
    message:
      "Radhey Bio.Tech Pvt. Ltd. is a proud member of the esteemed Kamdhenu Group, a conglomerate known for its excellence in diverse sectors including agriculture, real estate, infrastructure, and biotechnology. ",
  },
  {
    id: 3,
    name: "SLEEK BRAKE PRODUCTS (SAMPLA BAHADURGRAHHARYANA)",
    designation: "Fire Figgting Work",
    image: image3,
    message:
      "Sleek Brake Products is a company specializing in the manufacturing and distribution of automotive braking components and systems. With a focus on quality, reliability, and innovation,.",
  },
  {
    id: 4,
    name: "SACHADEVA POLYCOLOR PVT LTD (MET CITY JHAJJAR HARYANA)",
    designation: "Fire Figgting & Alarm System",
    image: image4,
    message:
      "Sachadeva PolyColor Pvt Ltd is a part of the manufacturing sector, specializing in the production of polymer-based colorants, additives, and compounds.",
  },
  {
    id: 5,
    name: "HOLISTER MEDICAL INDIA PVT LTD (HSIID GROWTH BAWAL HARYNANA)",
    designation: "Fire Figgting Work",
    image: image5,
    message:
      "Hollister Medical India Pvt Ltd is a subsidiary of Hollister Incorporated, a global medical device company dedicated to advancing healthcare and improving the lives of people with healthcare needs.",
  },
  // Add more testimonials as needed
];

// const Testimonials = () => {
//   return (
//     <Container
//       style={{
//         // display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         minHeight: "300px",
//         spacing: "2",
//       }}
//     >
//       <Slider {...settings}>
//         {testimonialsData.map((testimonial, index) => (
//           <Paper
//             key={index}
//             elevation={3}
//             style={{ padding: 3, textAlign: "center" }}
//           >
//             <Typography variant="body1">{testimonial.message}</Typography>
//             <div>
//               <Typography variant="h6">{testimonial.name}</Typography>
//               <Typography variant="subtitle2">{testimonial.designation}</Typography>
//             </div>
//           </Paper>
//         ))}
//       </Slider>
//     </Container>
//   );
// };

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
    autoplaySpeed: 2000,
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
            <Card
              // key={index}
              style={{ maxWidth: 400, width: "100%" }}
            >
              <Zoom>
                <CardMedia
                  style={{ height: 240 }}
                  image={item.image}
                  title={item.name}
                />
              </Zoom>
              <CardContent>
                <Typography variant="h6" component="div">
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

// ==========================>
const images = [
  "firesystem.jpg",
  "safetyfirst.jpg",
  "watersprinkler.jpg",
  // Add more image URLs as needed
];

const ImageSliderMui = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the interval time as needed (in milliseconds)

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
              style={{ width: "100%", height: "auto" }}
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
      <div>
        <Grid className="home-sec1">
          <Typography
            className="sec1-home-text"
            style={{
              position: "absolute",
              marginTop: "16%",
              color: "rgb(249, 103, 2)",
              zIndex: "999",
            }}
            variant="h2"
          >
            J.V.TECH ENGINEERS
          </Typography>
          <ImageSliderMui images={images} />
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image6}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      MARUTI SUZUKLI INDIA LIMITED
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Maruti Suzuki Service has an extensive service network
                      that spans across more than 1800 cities in India, making
                      it easily accessible for customers.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image7}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      HOLISTER MEDICAL INDIA PVT LTD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Hollister Incorporated is an independent, employee-owned
                      company that develops, manufactures, and markets
                      healthcare products and services worldwide.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image8}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      ATS TOWNSHIP PRIVATE LIMITED
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ats Township Private Limited is a Private incorporated on
                      30 April 2008. It is classified as Non-govt company and is
                      registered at Registrar of Companies, Delhi.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image9}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      SAMPLA BAHADURGRA HHARYANA
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      "Sleek Brake Products" is a part of Super Circle Group of
                      Companies, which was started in 1965 by founder
                      Chairman-cum-Managing Director Mr. Jagjyoti Jain.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image9}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      SACHADEVA POLYCOLOR PVT LTD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Sachdeva Industries was established in 1982 as a unit
                      coloring of plastic raw materials. Seeing an increasing
                      demand for masterbatches.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image10}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      A.C POLY COTERS PVT LTD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A. C. POLYOCATERS is an ISO certified manufacturer of
                      synthetic leather in India. We process our products using
                      quality raw materials.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image11}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      THE AMARYLLIS CENTRAL PARK DELHI
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      The Amaryllis will glow and change Delhi's landscape into
                      something spectacular. Because of its location, design,
                      amenities, and manner of life.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
              <Roll>
                <Card
                  className="home-sec2-card"
                  sx={{ maxWidth: "85%", minHeight: "50vh" }}
                >
                  <CardMedia
                    sx={{ height: "55%" }}
                    image={image15}
                    className="home-sec2-card-media"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      style={{ fontWeight: "500" }}
                    >
                      INSECTICIDES INDIA PVT LTD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      nsecticides INDIA Ltd in Azadpur, Delhi is known to
                      satisfactorily cater to the demands of its customer base
                      and business came into existence in 2009.
                    </Typography>
                  </CardContent>
                </Card>
              </Roll>
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
            background:
              "linear-gradient(-45deg, rgba(31,164,30,255) -5%, rgba(245,131,32,255))",
          }}
          // sm={12}
        >
          <Grid
            item
            style={{ marginTop: "80px" }}
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
          <Grid
            item
            style={{ marginTop: "20px" }}
            xs={12}
            sm={10}
            md={10}
            lg={6}
          >
            <Fade bottom>
              <Typography
                variant="h6"
                // align="center"
                className="landing-sec3-text"
                style={{ color: "#fff" }}
              >
                The journey of "Fire Fighting" began with extensive research and
                brainstorming sessions. The team delved into the science of fire
                behavior, studied existing firefighting techniques, and analyzed
                real-world scenarios to identify key challenges and
                opportunities for improvement. Drawing inspiration from nature,
                technology, and innovative design principles, they envisioned a
                comprehensive system that integrates cutting-edge technology
                with practical firefighting strategies.
              </Typography>
            </Fade>
          </Grid>
          <Grid item container xs={12} sm={10} style={{ marginBottom: "5rem" }}>
            <Testimonials />
          </Grid>
        </Grid>

        {/* Last add */}
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className="home-sec5"
          style={{
            minHeight: "450px",
            // background:
            // " linear-gradient(94.64deg, #B023C2 -0.12%, #680DE4 99.52%)",
            // background: "#926CB3",
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
            spacing={3}
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
            // background: "#926CF3",
            // background: "#f7c7e1",
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

        {/* <Grid className="home-container1">hiuhu</Grid> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
