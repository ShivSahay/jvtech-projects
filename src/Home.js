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
const testimonialsData = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Company XYZ",
    image: image1,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Smith",
    designation: "Designer, ABC Inc.",
    image: image2,
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Amit",
    designation: "Designer, ABC Inc.",
    image: image3,
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Jack",
    designation: "Designer, ABC Inc.",
    image: image4,
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    name: "Tom",
    designation: "Designer, ABC Inc.",
    image: image5,
    message:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "32px",
      }}
      sm={12}
      xs={12}
    >
      <Typography
        variant="h4"
        className="sec3--testomonial-heading"
        style={{
          marginBottom: "3rem",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
        }}
        gutterBottom
      >
        Provide Education
      </Typography>

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
              className="home-sec2-card1"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image6}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card2"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image7}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card3"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image8}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card4"
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5rem 0px",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image9}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card5"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image9}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card6"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image10}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card7"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image11}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className="home-sec2-card8"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "5rem",
              }}
            >
              <Card
                className="home-sec2-card"
                sx={{ maxWidth: "80%", height: "50vh" }}
              >
                <CardMedia
                  sx={{ height: "50%" }}
                  image={image15}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
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
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              className="sec3-heading"
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              Educational Story
            </Typography>
          </Grid>
          <Grid
            item
            style={{ marginTop: "20px" }}
            xs={12}
            sm={10}
            md={10}
            lg={6}
          >
            <Typography
              variant="h6"
              // align="center"
              className="landing-sec3-text"
              style={{ color: "#fff" }}
            >
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.Listen to the songs you love, and discover new
              music and podcasts.We'll help you make playlists. Or enjoy
              playlists made by music experts.Tell us what you like, and we'll
              recommend music for you.To use less data when you play music, turn
              on Data Saver in Settings.
            </Typography>
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
            background: "#f7c7e1",
          }}
          xs={12}
        >
          <Zoom>
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
          </Zoom>
          <FeatureSection />
        </Grid>

        {/* <Grid className="home-container1">hiuhu</Grid> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
