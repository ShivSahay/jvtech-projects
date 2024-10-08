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
import joinus from "../../images/joinus.jpg";
import TurnRightIcon from "@mui/icons-material/TurnRight";
import aboutStory from "../../images/about-story.jpg";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";

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
      <Grid
        item
        container
        className="about-page-container"
        sx={{ marginTop: "-96px" }}
      >
        {/* Section 1 */}
        <Grid className="about-container">
          <Grid item sm={12} className="sec1-about-textbox" container>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              sx={{ borderLeft: "8px solid red" }}
            >
              <Typography
                className="sec1-about-text"
                sx={{ fontSize: "70px", marginLeft: "10px" }}
                variant="h2"
              >
                About Us
              </Typography>
              <Typography
                className="sec1-about-text"
                sx={{ fontSize: "60px", marginLeft: "10px" }}
                variant="h3"
              >
                Industrial and commercial electrical installations
              </Typography>
            </Grid>
            <Grid item xs={12} sm={8} md={6} sx={{ marginTop: "1rem" }}>
              <Typography className="sec1-about-text1" variant="body1">
                Fire Flight is a new airborne fire mapping software, providing
                real-time fire information (active fire data), like maps, and
                post-fire hotspot maps. We ship the system from Australia and
                operated by local pilots in fire danger regions worldwide, and
                it is cheap to deploy and easy to use.
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

        <Grid
          className="about-sec2up"
          container
          style={{
            // minHeight: "50vh",
            display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "60px",
          }}
        >
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={joinus}
              className="about-sec2up-img"
              height="100%"
              width="100%"
              style={{ height: "65vh", width: "46vw", borderRadius: "25px" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            className="about-sec2up-textbox"
            sx={{ padding: "10px 30px" }}
          >
            {/* <Fade bottom>
              <Typography
                variant="h4"
                // align="center"
                gutterBottom
                className="sec3-heading"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontWeight: "bold",
                }}
              >
                Overview of the Fire Flight System
              </Typography>
            </Fade> */}
            <Fade bottom>
              <Typography
                variant="h4"
                // align="center"
                gutterBottom
                className="about-sec2up-heading"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontWeight: "bold",
                }}
              >
                What is Fire Flight ?
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
                The Fire Flight system is a small, self-contained system that
                can be installed into an aircraft with a camera hatch. We have
                local operators who are based in high fire danger regions
                throughout the world who provide this fire data to local
                clients.
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
                passing year, there is more property, environmental damage, and
                lives lost due to these raging fires. To combat this,
                firefighters need a fighting advantage.
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography
                variant="h4"
                // align="center"
                // gutterBottom
                className="about-sec2up-heading"
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontWeight: "bold",
                  marginTop: "1rem",
                }}
              >
                Overview of the Fire Flight System
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
                "Fire Fighting Systems" typically refers to a range of
                equipment, methods, and technologies designed to detect,
                control, and extinguish fires to protect lives and property.
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
                The Fire Fighting System (FFS) is a comprehensive set of tools
                and technologies designed to detect, control, and extinguish
                fires, ensuring the safety of people and minimizing damage to
                property.
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
                A fire fighting system operates by early detection through
                sensors and alarms, followed by activation of suppression
                systems like sprinklers, water mist, or foam systems.
              </Typography>
            </Fade>
          </Grid>
        </Grid>

        {/* Section 2 */}
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
          style={{
            // height: "35rem",
            width: "100vw",
            // alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url(" + aboutStory + ")",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px 0px",
          }}
          className="abou-joinus-container"
        >
          <Grid item sm={3} md={6}></Grid>
          <Grid
            item
            sm={8}
            md={5}
            sx={{
              background: "#fff",
              borderRadius: "20px",
              padding: "25px",
              background: "rgb(199 210 219);",
            }}
          >
            <Typography
              sx={{
                color: "rgb(242, 101, 34)",
                fontWeight: "bolder",
                fontSize: "1.5rem",
                // textAlign: "center",
              }}
            >
              We Are Commited To Provide Quality Service
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.6);",
                fontWeight: "bolder",
                fontSize: "1rem",
                marginTop: "1rem",
              }}
            >
              Fire Flight is a new airborne fire mapping software, providing
              real-time fire information (active fire data), like maps, and
              post-fire hotspot maps. We ship the system from Australia and
              operated by local pilots in fire danger regions worldwide, and it
              is cheap to deploy and easy to use.
            </Typography>
            <Typography
              sx={{
                color: "rgb(242, 101, 34)",
                fontWeight: "bolder",
                fontSize: "1.5rem",
                // textAlign: "center",
                marginTop: "1rem",
              }}
            >
              Our services include:
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: "rgba(0, 0, 0, 0.6);",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              * Industrial and commercial electrical installations.
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: "rgba(0, 0, 0, 0.6);",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              * Maintenance and upgrades
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: "rgba(0, 0, 0, 0.6);",
                fontWeight: "bolder",
                fontSize: "1rem",
              }}
            >
              * Custom electrical panel manufacturing
            </Typography>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
              }}
            >
              <a
                href="/contact"
                style={{
                  background: "#ce1319",
                  color: "#ffffff",
                  width: "120px",
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

        {/* Section 3 */}
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
                  Take the time to understand your customer's needs and Strive
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
        {/* Section 4 */}
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          className="about-sec3"
          style={{
            minHeight: "400px",
            background: "#1667ac",
            // background:
            //   "linear-gradient(-45deg, rgba(31,164,30,255) -5%, rgba(245,131,32,255))",
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
                    title="CEO & Co-Founder"
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
                    image={shiv}
                    title="Team Manager"
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
                    title="Engineer"
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
