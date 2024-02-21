import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import "./About.css";
import Footer from "../../components/Footer/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Zoom } from "react-reveal";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpeg";
import jitendra from "../..//images/jitendra.jpg";
import shiv from "../../images/shiv.jpeg";
import leader from "../../images/leader.jpeg";
const AboutPage = () => {
  const testimonials = [
    {
      name: "J.V. TECH ENGINEERS",
      image: image1,
      content:
        "J.V. TECH ENGINEERS is an Indian based firm that specializes in Mechanical, Electrical and Plumbing (MEP) building services.",
    },
    {
      name: "Qualiﬁed and technically",
      image: image2,
      content:
        "Our team of heroes does no neglect or foresee any delicate of detail in each and every process.",
    },
    {
      name: "Strive to deliver",
      image: image3,
      content:
        "Our staff is recognized as best diligent workers in the field of fire protection and safety.",
    },
  ];
  const TestimonialSlider = ({ testimonials }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };

    return (
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
              className="about-sec2-card"
            >
              <CardMedia
                style={{
                  height: 310,
                  // width: "310px",
                  width: "100%",
                  // borderRadius: "50%",
                  // margin: "20px auto"  ,
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                className="about-sec2-cardmedia"
                image={testimonial.image}
                alt={testimonial.name}
              >
                <Fade bottom>
                  <Typography
                    variant="h5"
                    className="about-sec2-cardmedia-text"
                    style={{
                      color: "#ffffff",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                  >
                    {testimonial.name}
                  </Typography>
                </Fade>
                <Fade bottom>
                  <Typography
                    variant="body1"
                    className="about-sec2-cardmedia-content"
                    style={{
                      color: "#ffffff",
                      fontWeight: "bolder",
                      textAlign: "center",
                      margin: "20px 6rem",
                    }}
                  >
                    {testimonial.content}
                  </Typography>
                </Fade>
              </CardMedia>
            </Card>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <>
      <Grid item container className="about-page-container">
        <Grid className="about-container">
          <Fade bottom>
            <Typography className="sec1-about-text1" variant="h2">
              J.V. TECH ENGINEERES
            </Typography>
          </Fade>
          <Fade bottom>
            <Typography className="sec1-about-text2" variant="h4">
              ENGINEERES & CONTRACTORS
            </Typography>
          </Fade>
        </Grid>
        <Grid
          className="about-sec2"
          style={{
            minHeight: "30vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "60px",
          }}
        >
          <Grid item sm={12} md={8} style={{ marginBottom: "25px" }}>
            <Fade bottom>
              <Typography
                variant="h5"
                className="service-sec2-heading1 "
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                About us{" "}
              </Typography>
            </Fade>
          </Grid>
          <Container maxWidth="lg">
            <Grid item container spacing={3}>
              <Grid item xs={12} md={12}>
                <TestimonialSlider testimonials={testimonials} />
              </Grid>
              <Grid item xs={12} md={12}>
                <Card>
                  <CardContent>
                    <Fade bottom>
                      <Typography
                        variant="h4"
                        gutterBottom
                        style={{
                          fontWeight: "bold",
                          textAlign: "center",
                          color: "rgb(245, 131, 32)",
                        }}
                      >
                        Strive to deliver
                      </Typography>
                    </Fade>
                    <Fade bottom>
                      <Typography variant="body1">
                        We strive to deliver the highest standards of MEP
                        installation, carefully paying attention to our client’s
                        ideas, collaborating in the development of the right
                        scope of work. We develop a unique approach towards each
                        client and each project is a never-ending responsibility
                        for us. It is all about our clients! J.V. TECH ENGINEERS
                        undertake all kinds of Mechanical, Electrical and
                        Plumbing works for the following premises: - Villas /
                        Hotel Apartments / Warehouses / Factories / Hospitals /
                        Residential Buildings / Commercial Buildings / Offices /
                        shopping malls & Centers.
                      </Typography>
                    </Fade>
                  </CardContent>
                </Card>
              </Grid>
              {/* Add more cards as needed */}
            </Grid>
          </Container>
        </Grid>
        <Grid
          item
          container
          className="about-sec4"
          style={{ justifyContent: "center", padding: "60px" }}
        >
          <Grid
            item
            container
            sm={12}
            md={10}
            lg={8}
            style={{
              marginBottom: "25px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Grid item style={{ marginBottom: "2em" }} sm={12} md={10}>
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#f26522",
                  }}
                >
                  Best Services Provider{" "}
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "400",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Take the time to understand your customers' needs and Strive
                  for excellence in everything you do. Maintain high standards
                  of quality in your products or services.and also Experiment
                  with new ideas, processes, and business models to drive growth
                  and competitive advantage.
                </Typography>
              </Fade>
            </Grid>
            <Grid item className="aobut-sec3-history" sm={3}>
              <Fade top>
                <Typography
                  variant="h6"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "bold",
                    // textAlign: "center",
                    color: "#f26522",
                  }}
                >
                  Our History{" "}
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  J.V. TECH ENGINEERS is an Indian based firm that specializes
                  in Mechanical, Electrical and Plumbing (MEP) building
                  services.From the very beginning we adopted a unique approach
                  towards our clients, catering to their speciﬁc needs and
                  delivering upon their expectations.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginTop: "1rem",
                    marginLeft: "15px",
                  }}
                >
                  Our highly qualiﬁed and technically competent managers,
                  engineers and technicians, allow us to capture a sizable share
                  of the market. We are currently executing projects in
                  different premises of commercial, residential and industrial
                  type.
                </Typography>
              </Fade>
            </Grid>
            <Grid item className="aobut-sec3-quality" sm={3}>
              <Fade top>
                <Typography
                  variant="h6"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "bold",
                    // textAlign: "center",
                    color: "#f26522",
                  }}
                >
                  Quality and Reliability{" "}
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-text"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  We aim to attain business excellence in infrastructure works
                  by meeting and exceeding our customer's expectations in terms
                  of quality, timely completion and safety with absolute
                  compliance to relevant regulatory and obligatory requirements.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginTop: "1rem",
                    marginLeft: "15px",
                  }}
                >
                  Our goal is to remain the preferred contractor by continuous
                  improvement with proper adherence to the Quality Management
                  System.
                </Typography>
              </Fade>
            </Grid>
            <Grid item className="aobut-sec3-exp" sm={3}>
              <Fade top>
                <Typography
                  variant="h6"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "bold",
                    // textAlign: "center",
                    color: "#f26522",
                  }}
                >
                  Our Experience{" "}
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  {`>`} Fire Alarm Systems. <br />
                  {`>`} Fire Alarm Panel. <br />
                  {`>`} Sprinkler System Fire.
                  <br />
                  We provide complete fire protection services and
                  installations. Our team of heroes does no neglect or foresee
                  any delicate of detail in each and every process
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="about-sec4-heading"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginTop: "1rem",
                    marginLeft: "15px",
                  }}
                >
                  We also help our clients in getting NOC from concerned
                  authorities. Our team of professionals at your own facility
                  location conducts well-informed sessions.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          className="about-sec3"
          style={{
            minHeight: "400px",
            background:
              "linear-gradient(-45deg, rgba(31,164,30,255) -5%, rgba(245,131,32,255))",
          }}
        >
          <Grid
            item
            style={{ marginTop: "80px" }}
            className="about-sec3-heading-box"
            sm={12}
            md={8}
            lg={5}
          >
            <Fade bottom>
              <Typography
                variant="h2"
                align="center"
                gutterBottom
                className="about-sec3-heading"
                style={{ color: "#fff", fontWeight: "bold" }}
              >
                Meet Our Team
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography
                variant="body1"
                align="center"
                gutterBottom
                className="about-sec3-text"
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  marginBottom: "1em",
                }}
              >
                At J.V. Tech engineers, we take pride in our diverse and
                talented team, united by a shared passion for [your mission or
                industry focus]. Get to know the individuals behind our success:
              </Typography>
            </Fade>
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
                      ABC
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      Team Manager
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
                      Engineer
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
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default AboutPage;
