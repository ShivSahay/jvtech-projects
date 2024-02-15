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
import "./Projects.css";
import Footer from "../Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Roll, Zoom } from "react-reveal";
import image1 from "../images/1.jpeg";
import image2 from "../images/2.jpeg";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.jpeg";
import image5 from "../images/5.jpeg";
import image6 from "..//images/6.jpeg";
import image7 from "../images/7.jpeg";
import leader from "../images/leader.jpeg";
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
          <Zoom>
            <Typography
              variant="h2"
              gutterBottom
              className="project-sec2-heading"
              style={{
                color: "rgb(249, 103, 2)",
                fontWeight: "bold",
                marginBottom: "1em",
              }}
            >
              Our Leaderships
            </Typography>
          </Zoom>
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                MICROTEK GREENBURG
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                Sector-86 Gurugram (Plumbing Work)
              </Typography>
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                DELHI METRO RAIL CORP.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                South Extension, New Delhi (Plumbing Work)
              </Typography>
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
                    image={leader}
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                PARHIT HEALTHCARE & RESEARCH CENTRE
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                G.K. - II, New Delhi (Fire Fighting work)
              </Typography>
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                DAFTAR INDIA
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                7th Floor, ETT, Noida (Fire Fighting Work)
              </Typography>
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
                    image={image7}
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                SHINHAN BANK
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                South Ex-II, New Delhi (Fire Fighting Work)
              </Typography>
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                THE OFFICE PASS
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                Sector-4, Noida (Fire Fighting Work)
              </Typography>
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
                    image={image7}
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                THE OFFICE PASS
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                Mohan Cooperative, New Delhi (Fire Fighting & Plumbing Work)
              </Typography>
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
              <Typography
                variant="h5"
                className="project-sec2-heading1"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Our Trust{" "}
              </Typography>
              <Typography
                variant="h3"
                className="project-sec2-heading2"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                AWFIS COWORKING SPACE
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading3"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Think beyond expectation.
              </Typography>
              <Typography
                variant="body1"
                className="project-sec2-heading4"
                style={{
                  fontWeight: "800",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                Sector-44, Gurugram (Fire Fighting Work)
              </Typography>
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
                    image={image7}
                  />
                </Card>
              </Roll>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default ProjectPage;
