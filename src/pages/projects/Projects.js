import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import Header from "../../components/Header/Header";
import "./Projects.css";
import Footer from "../../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade, Roll, Zoom } from "react-reveal";
import image1 from "../../images/1.jpeg";
import image2 from "../../images/2.jpeg";
import image3 from "../../images/3.jpeg";
import image4 from "../../images/4.jpeg";
import image5 from "../../images/5.jpeg";
import image6 from "../../images/6.jpeg";
import image7 from "../../images/7.jpeg";
import image8 from "../../images/8.jpeg";
import image9 from "../../images/9.jpeg";
import image10 from "../../images/10.jpeg";
import image11 from "../../images/11.jpeg";
const ProjectPage = () => {
  return (
    <>
      <Grid item container className="project-page-container">
        <Grid className="project-container">
          <Zoom>
            <Typography className="sec1-project-text1" variant="h2">
              J.V. TECH ENGINEERES
            </Typography>
            <Typography className="sec1-project-text2" variant="h4">
              ENGINEERES & CONTRACTORS
            </Typography>
          </Zoom>
        </Grid>
        <Grid
          item
          container
          className="project-sec2"
          style={{
            minHeight: "30vh",
            display: "flex",
            width: "100%",
            padding: "60px",
            justifyContent: "center",
          }}
        >
          <Fade top>
            <Typography
              variant="h2"
              gutterBottom
              className="project-sec2-heading"
              style={{
                color: "#ffffff",
                fontWeight: "bold",
                marginBottom: "1em",
              }}
            >
              Our Projects
              <hr style={{ fontSize: "12px" }} />
            </Typography>
          </Fade>
          <Grid item container style={{ justifyContent: "space-around" }}>
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image1}
                  />
                </Card>
              </Roll>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  1st Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  MARUTI SUZUKLI INDIA LIMITED (STOCKYARD & WAREHOUSE
                  MSIL-NAGPUR)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire flighting and alarm system
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Megamind Engineering Project is an engineering enterprise and
                  consulting company. Our firm specializes in various aspects of
                  electrical projects involving fire-fighting engineering,
                  consulting and equipment’s. The firm has grown to be the
                  leading in dedicated fire fighting protection- engineering
                  specialties.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  TESTING & MAINTENANCE
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  We can serve as a single source for all kind of fire
                  protection with full testing and maintenance. Our fire
                  fighting equipment’s include water sprays, sprinkler systems,
                  hydrants, fire pumps, hoses, extinguishers, manual and
                  automatic systems, emergency alarms, CO2, dry-chemical and
                  foam based suppressants and so on
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid
            item
            container
            className="project-sec2-cardright"
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  2nd Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  HOLISTER MEDICAL INDIA PVT LTD (HSIID GROWTH BAWAL HARYNANA)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Firefighters control and put out fires and respond to
                  emergencies involving life, property, or the environment.A
                  person who engages in firefighting is known as a firefighter
                  or fireman. Firefighters typically undergo a high degree of
                  technical training. This involves structural firefighting and
                  wildland firefighting.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  TESTING & MAINTENANCE
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  We have supplied fire fighting systems for various industries
                  and our services have been acclaimed by many companies for
                  timely completion of project, advanced project management, our
                  pioneering design and engineering, precise installation and
                  maintenance services.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image2}
                  />
                </Card>
              </Roll>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image3}
                  />
                </Card>
              </Roll>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  3rd Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  ATS RHAPSODY (ATS TOWNSHIP PRIVATE LIMITED)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Booking the best residential property is an important aspect
                  of many people in the present time. You can see various
                  projects constructed in various locations. With the advent of
                  technology, you can conduct a simple search to find out the
                  best real estate developer in the industry. You can access the
                  ATS group and get complete information about their projects.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  TESTING & MAINTENANCE
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Our project provides luxury and comfort enjoyment to the
                  people without any disturbance. You can visit our official
                  site and view the necessary information about the property. On
                  our site, you can look at the ongoing project, upcoming
                  project, and others. This is a well-connected place that is
                  ideal for property home - seekers. You can avail of a
                  twenty-four-hour transportation facility in the place and
                  visit a nearby place easily.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid
            item
            container
            className="project-sec2-cardright"
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  4th Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  SLEEK BRAKE PRODUCTS (SAMPLA BAHADURGRAHHARYANA)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  "Sleek Brake Products" is a part of Super Circle Group of
                  Companies, which was started in 1965 by founder
                  Chairman-cum-Managing Director Mr. Jagjyoti Jain. Super Circle
                  group is considered to be a pioneer in the Indian automotive
                  industry specializing in Disc Brake Pads, Brake Linings, CV
                  Pads, Brake Shoes and other allied products catering to
                  multinational & domestic brands, institutional sales and
                  after-market segment.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Sleek Brake Products
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Over the last several years, our international partners have
                  benefitted immensely from the reliable quality and technical
                  brilliance of our products. Our much coveted customers listing
                  includes major international players like TMD, Bosch, Nissin,
                  MAT Braking, Carlisle, Japan Brakes, etc.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image4}
                  />
                </Card>
              </Roll>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image5}
                  />
                </Card>
              </Roll>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  5th Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  SACHADEVA POLYCOLOR PVT LTD (MET CITY JHAJJAR HARYANA)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting & Alarm System
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Sachdeva Industries was established in 1982 as a unit coloring
                  of plastic raw materials. Seeing an increasing demand for
                  masterbatches, the company diversified into the field of Color
                  & Additive Masterbatches under the brand name RANG MAHAL. Now,
                  this tradition is changed by SACHDEVA POLY COLOR PVT. LTD.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  RESEARCH & DEVELOPMENT
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Our lab is equipped with Two Roll Mills, Injection & Blow
                  Moulding, Film Pilot Plant, MFI Tester, Spectrophotometers,
                  Carbon Contents Tester of Masterbatches, etc. We carefully
                  select the Pigments, Additives, and polymers according to the
                  required Shade, Heat Stability & Light Fastness.This unit has
                  been responsible for developing masterbatches that make
                  reprocessed materials look similar to a virgin which has
                  become our specialty.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid
            item
            container
            className="project-sec2-cardright"
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  6th Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  A.C POLY COTERS PVT LTD (MET CITY JHAJJAR HARYANA)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  A. C. POLYOCATERS is an ISO certified manufacturer of
                  synthetic leather in India. The company manufacturers PVC / PU
                  leather cloth under the brand name "LEATHERTEX™". Our product
                  range is available in variety of creative designs, embossed
                  and prints with a wide choice of colors as per prevailing
                  trends to cater the requirements of domestic and international
                  markets. Our products are guaranteed to customer satisfaction
                  and quality standards.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Professional Teams
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  We are offering wide range of Artificial Leather, Synthetic
                  Leather, Faux/Fake leather, Coated Fabrics/Caoted textile,
                  Vinyl/ Vinyl Fabrics, PVC Leather, Leatherette, Rexine/
                  Rexene, Leather Cloth & Art Leather.and We possess an
                  excellent team of professionals, who have an immense knowledge
                  in their respective domain. They manufacture the entire
                  product range as per the international industry standards. To
                  provide optimum client satisfaction, we deliver our products
                  within promised time frame and at competitive prices.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image6}
                  />
                </Card>
              </Roll>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image7}
                  />
                </Card>
              </Roll>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  7th Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  THE AMARYLLIS CENTRAL PARK DELHI (UNITY GROUP)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Unity Group is a well-known real estate developer in New Delhi
                  with more than 20+ years of experience. Come into existence in
                  1996 and not till this time they have more than 10 Million Sq
                  Ft of Commercial, Retail, Hospitality, and Institutional
                  Spaces delivered to satisfied customers. And now this real
                  estate developer has moved in the residential segment with The
                  Amaryllis being developed in Karol Bagh, Central Delhi.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Description Amaryllis
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Explore the grand world of The Amaryllis in the heart of
                  Delhi. Filled with ultra-modern luxuries where a new adventure
                  awaits you every day. Find yourself at peace while sitting in
                  the lap of splendor and breathe easy amidst the lush green
                  environment.and Creating the house of your dreams involves
                  synchronizing a multitude of components perfectly. Your
                  lifelong dreams and our persistent efforts have culminated
                  into the Skywalk and The Emperius Club, a place where
                  imagination, vision, and technology have combined with the
                  serene environment giving you the most fulfilled, comfortable,
                  and sustainable lifestyle.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid
            item
            container
            className="project-sec2-cardright"
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  8th Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  RADHEY BIO.TECH PVT. LTD. (KAMDHENU GROUP)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Radhey Bio. Tech Private Limited is an unlisted private
                  company incorporated on 19 October, 2020. It is classified as
                  a private limited company and is located in Gurgaon, Haryana.
                  It's authorized share capital is INR 5.00 cr and the total
                  paid-up capital is INR 50.06 lac.The current status of Radhey
                  Bio. Tech Private Limited is - Active. The last reported AGM
                  (Annual General Meeting) of Radhey Bio. Tech Private Limited,
                  per our records, was held on 30 September, 2022.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  KAMDHENU POLYMERS
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Tofler Company360 provides access to any Indian company's
                  financial documents, charts, ratio analysis and more. It lets
                  you compare financials of several companies and study
                  performance trends. These financials can also be downloaded in
                  excel format. Here is the video showing how you can study the
                  financials of an Indian company on the Company360 platform.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image8}
                  />
                </Card>
              </Roll>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image9}
                  />
                </Card>
              </Roll>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  9th Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  RADHEY BIO.TECH PVT. LTD. (KAMDHENU GROUP)
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Plumbing Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  We at Kamdhenu believe in living up to a set of conventions
                  and follow them consciously in each and every sphere of our
                  activities to raise our credibility. Radhey Bio. Tech Private
                  Limited is classified as Non-govt company and is registered at
                  Registrar of Companies, Delhi.Tech Private Limited's Annual
                  General Meeting (AGM) was last held on N/A and as per records
                  from Ministry of Corporate Affairs (MCA).
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  KAMDHENU POLYMERS
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  THE KAMDHENU GROUP is one whose name in itself is a mark of
                  dependability and excellence. Operating in a wide array of
                  verticals including steel, pipes, water tanks, adhesives and
                  paints, Kamdhenu has rapidly become a market leader in just a
                  few years. Kamdhenu Polymers is our highly lucrative division
                  specializing in pipes. Forming an essential part of our
                  overall working as an organisation, this division ensures that
                  we deliver on our age-old promise of being a one-stop-shop for
                  all construction needs.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
          <Grid
            item
            container
            className="project-sec2-cardright"
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  10th (A) Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  INSECTICIDES INDIA PVT LTD AZADPUR DELHI
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                  }}
                >
                  Fire Figgting Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Insecticides INDIA Ltd in Azadpur, Delhi is known to
                  satisfactorily cater to the demands of its customer base. The
                  business came into existence in 2009 and has, since then, been
                  a known name in its field. It stands located at 401-402, Lusa
                  Tower, Azadpura Commercial Cplx, Azadpur-110033. Azadpura
                  Commercial Cplx is a prominent landmark in the area and this
                  establishment is in close proximity to the same. I
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    // textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  Insecticides INDIA Ltd
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    // textAlign: "center",
                    marginLeft: "15px",
                  }}
                >
                  Insecticides India Ltd. is a leading company dedicated to
                  enhancing agricultural practices and improving farmers'
                  livelihoods. Since its inception, the company has grown to
                  become a prominent player in the Crop Protection Industry.
                  With an extensive range of over formulation and technical
                  products,Their commitment to agriculture is driven by a
                  progressive vision and mission, aiming to empower farmers and
                  contribute to the overall prosperity of the industry.
                </Typography>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image10}
                  />
                </Card>
              </Roll>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ marginTop: "3rem", justifyContent: "space-around" }}
          >
            <Grid item xs={12} sm={12} md={5} className="project-sec2-card-div">
              <Roll>
                <Card
                  className="project-sec2-card1"
                  style={{
                    position: "relative",
                    // width: 450,
                    height: 500,
                    transition: "transform 0.3s ease", // Define transition property
                  }}
                >
                  <CardMedia
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    className=""
                    image={image11}
                  />
                </Card>
              </Roll>
            </Grid>
            <Grid
              item
              sm={12}
              md={5}
              className="project-sec2-desc-div pcard-mb"
              style={{ marginBottom: "25px" }}
            >
              <Fade bottom>
                <Typography
                  variant="h5"
                  className="project-sec2-heading1"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  10th (B) Projects{" "}
                </Typography>
                <Typography
                  variant="h4"
                  className="project-sec2-heading2"
                  style={{
                    fontWeight: "800",
                    textAlign: "center",
                    marginTop: "15px",
                  }}
                >
                  INSECTICIDES INDIA PVT LTD AZADPUR DELHI
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                  }}
                >
                  Plumbing Work
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    marginLeft: "15px",
                  }}
                >
                  Insecticides India Limited manufactures and distributed plant
                  protection chemicals and household pesticides. The Company's
                  products include insecticides, fungicides, weedicides,
                  herbicides, plant growth regulators, and household pesticides.
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography
                  variant="body1"
                  className="project-sec2-heading3"
                  style={{
                    fontWeight: "800",
                    marginTop: "15px",
                  }}
                >
                  Insecticides INDIA Ltd
                </Typography>
                <Typography
                  variant="body1"
                  className="project-sec2-heading4"
                  style={{
                    fontWeight: "400",
                    marginLeft: "15px",
                  }}
                >
                  Bharat Top-35 Fungicides, Packaging Type :Packet at best ...
                  Top-35 is a powerful systemic fungicide contains metalaxyl to
                  kill various pathogens. It is absorbed by the roots, stems and
                  leaves of plants. It is used to prevent downey mildew and
                  white rust diseases of Maize, Sorghum, Mustard, Sunflower and
                  Pearl millet (Bajra) as a wet slurry seed dresser.
                </Typography>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default ProjectPage;
