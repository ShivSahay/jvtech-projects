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
import { Zoom } from "react-reveal";
import image1 from "../images/1.jpeg";
import image2 from "../images/2.jpeg";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.jpeg";
import image5 from "../images/5.jpeg";
import jitendra from "..//images/jitendra.jpeg";
import shiv from "../images/shiv.jpeg";
import leader from "../images/leader.jpeg";
const AboutPage = () => {
  const AboutCard = ({ title, content }) => {
    return (
      <Card>
        <CardContent>
          <Zoom>
            <Typography
              variant="h4"
              gutterBottom
              style={{
                fontWeight: "bold",
                textAlign: "center",
                color: "rgb(245, 131, 32)",
              }}
            >
              {title}
            </Typography>
          </Zoom>
          <Zoom>
            <Typography variant="body1">{content}</Typography>
          </Zoom>
        </CardContent>
      </Card>
    );
  };
  return (
    <>
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
            // background:"linear-gradient(94.64deg, #B023C2 -0.12%, #680DE4 99.52%)",
            width: "100%",
            padding: "60px",
          }}
        >
          <Container maxWidth="lg">
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
                  content="Our highly qualiﬁed and technically competent managers, engineers and technicians, allow us to capture a sizable share of the market. We are currently executing projects in different premises of commercial, residential and industrial type.the services or goods specifically set out in the bid or request for proposal package.Something technically true is actually, really true or correct but it may not be the way people think about it."
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
        <Grid
          item
          container
          // direction="column"
          alignItems="center"
          justifyContent="center"
          className="about-sec3"
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
              className="about-sec3-heading"
              style={{ color: "#fff", fontWeight: "bold", marginBottom: "1em" }}
            >
              Our Leaderships
            </Typography>
          </Grid>
          <Grid
            item
            container
            sm={12}
            className="about-sec3-card-container"
            style={{
              display: "flex",
              flexDirection: "row",
              rowGap: "3",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginBottom: "80px",
              padding: "60px",
            }}
          >
            <Grid
              item
              xs={12}
              sm={10}
              md={5}
              lg={3}
              className="about-sec3-card"
            >
              <Card style={{ maxWidth: 400, width: "100%" }}>
                <Zoom>
                  <CardMedia
                    style={{
                      height: 310,
                      width: "310px",
                      borderRadius: "50%",
                      margin: "20px auto",
                    }}
                    className="about-sec3-card-img"
                    image={leader}
                    title="Image1"
                  />
                </Zoom>
                <CardContent style={{ textAlign: "center" }}>
                  <Zoom>
                    <Typography variant="h6" component="div">
                      Vipin Pal Singh
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      CEO & Co-Founder
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      "It takes 20 years to build a reputation and 5 minutes to
                      ruin it. If you think about that, you’ll do things
                      differently"
                    </Typography>
                  </Zoom>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={5}
              lg={3}
              className="about-sec3-card"
            >
              <Card
                // key={index}
                style={{ maxWidth: 400, width: "100%" }}
              >
                <Zoom>
                  <CardMedia
                    style={{
                      height: 310,
                      width: "310px",
                      borderRadius: "50%",
                      margin: "20px auto",
                    }}
                    className="about-sec3-card-img"
                    image={shiv}
                    title="Image1"
                  />
                </Zoom>
                <CardContent style={{ textAlign: "center" }}>
                  <Zoom>
                    <Typography variant="h6" component="div">
                      Shiv Pandey
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      Software Engineer
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      “To me, business isn’t about wearing suits . It’s about
                      being true to yourself, your ideas and focusing on the
                      essentials.”
                    </Typography>
                  </Zoom>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={10}
              md={5}
              lg={3}
              className="about-sec3-card"
            >
              <Card
                // key={index}
                style={{ maxWidth: 400, width: "100%" }}
              >
                <Zoom>
                  <CardMedia
                    style={{
                      height: 310,
                      width: "310px",
                      borderRadius: "50%",
                      margin: "20px auto",
                    }}
                    className="about-sec3-card-img"
                    image={jitendra}
                    title="Image1"
                  />
                </Zoom>
                <CardContent style={{ textAlign: "center" }}>
                  <Zoom>
                    <Typography variant="h6" component="div">
                      Jitendra Kumar
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      Devops Engineer
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      “A man must be big enough to admit his mistakes, smart
                      enough to profit from them and strong enough to correct
                      them.”
                    </Typography>
                  </Zoom>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* <Grid item container xs={12} sm={10} style={{ marginBottom: "5rem" }}>
            <Testimonials />
          </Grid> */}
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default AboutPage;
