// AboutUsPage.js
import React from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Header from "../Header";
import "./About.css";
import Footer from "../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const AboutPage = () => {
  const AboutCard = ({ title, content }) => {
    return (
      <Card>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            {title}
          </Typography>
          <Typography variant="body1">{content}</Typography>
        </CardContent>
      </Card>
    );
  };
  return (
    <>
      <Header />
      <Grid item container className="about-page-container">
        <Grid className="about-container">
          <Typography className="sec1-about-text1" variant="h2">
            J.V. TECH ENGINEERES
          </Typography>
          <Typography className="sec1-about-text2" variant="h4">
            ENGINEERES & CONTRACTORS
          </Typography>
        </Grid>
        <Grid
          className="about-sec2"
          style={{
            minHeight: "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // background: "rgb(146, 108, 243)",
            background:
              "linear-gradient(94.64deg, #B023C2 -0.12%, #680DE4 99.52%)",
            width: "100%",
            padding: "60px",
          }}
        >
          <Container maxWidth="md">
            <Grid item container spacing={3}>
              <Grid item xs={12} md={6}>
                <AboutCard
                  title="J.V. TECH ENGINEERS"
                  content="J.V. TECH ENGINEERS is an Indian based firm that specializes in Mechanical, Electrical and Plumbing (MEP) building services.
                  From the very beginning we adopted a unique approach towards our clients, catering to their speciﬁc needs and delivering upon their expectations. Behind the name of J.V.TECH ENGINEERS, stands an experienced and professional team that works together to deliver and maintain the highest standards of MEP services. "
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AboutCard
                  title="Qualiﬁed and technically"
                  content="Our highly qualiﬁed and technically competent managers, engineers and technicians, allow us to capture a sizable share of the market. We are currently executing projects in different premises of commercial, residential and industrial type."
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <AboutCard
                  title="Strive to deliver"
                  content="We strive to deliver the highest standards of MEP installation, carefully paying attention to our client’s ideas, collaborating in the development of the right scope of work. We develop a unique approach towards each client and each project is a never-ending responsibility for us. It is all about our clients! J.V. TECH ENGINEERS undertake all kinds of Mechanical, Electrical and Plumbing works for the following premises: - 
                  Villas / Hotel Apartments / Warehouses / Factories / Hospitals / Residential Buildings / Commercial Buildings / Offices / shopping malls & Centers."
                />
              </Grid>
              {/* Add more cards as needed */}
            </Grid>
          </Container>
        </Grid>
        {/* <Grid item>
          <Container maxWidth="md">
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <Typography variant="h4">Welcome to Our Website</Typography>
            </Paper>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    alt="Introduction Image"
                    src="https://example.com/path-to-your-introduction-image.jpg" // Replace with the actual image URL
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={3} style={{ padding: "20px" }}>
                  <Typography variant="h5">Who We Are</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dapibus velit eu augue. Suspendisse potenti. Fusce
                    ac semper velit, vel gravida mauris.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Grid> */}
        <Grid item style={{ width: "100%" }}>
          
        </Grid>

        {/* <Grid className="home-container1">hiuhu</Grid> */}
        <Footer />
      </Grid>
    </>
  );
};

export default AboutPage;
