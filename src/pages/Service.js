import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "./Service.css";
import Footer from "../Footer";
import AboutSection from "../components/AboutSection";
import Zoom from "react-reveal/Zoom";
import CountUp from "react-countup";
import leader from "../images/7.jpeg";
import { Bounce, Fade, Roll } from "react-reveal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="service-sec1-card">
      <CardMedia component="img" height="240" alt={title} src={imageUrl} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};
const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "95%",
  height: 520,
  background: "#EC3737",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));
const Service = () => {
  const services = [
    {
      title: "Plumbing & Public Health Engineering",
      description:
        "Hot and Cold Water supply system.Water Filtration.Irrigation System.Swimming Pool.Drainage.Sanitation.Rainwater.Seawage Treatment Plant",
      imageUrl:
        "https://5.imimg.com/data5/EE/FS/MY-8313669/dsc00219t-500x500.jpg",
    },
    {
      title: "Fire Fighting System",
      description:
        "Pipe and sprinkler erection.Fire Suppression System.Pump installation",
      imageUrl:
        "https://5.imimg.com/data5/EE/FS/MY-8313669/dsc00219t-500x500.jpg",
    },
    {
      title: "Electrical",
      description:
        "Power Distribution system.Lighting Control.Low Current Systems.Telephone and Data System.Access Control System.Industrial Process Services",
      imageUrl:
        "https://5.imimg.com/data5/EE/FS/MY-8313669/dsc00219t-500x500.jpg",
    },
    // Add more services as needed
  ];
  return (
    <>
      <Grid item container>
        <Grid className="service-sec9">
          <Zoom>
            <Typography className="sec1-service-text1" variant="h2">
              Services Provided by
            </Typography>
          </Zoom>
          <Zoom>
            <Typography className="sec1-service-text2" variant="h4">
              J.V.TECH ENGINEERS
            </Typography>
          </Zoom>
        </Grid>
        <Grid
          item
          container
          className="service-sec1"
          style={{ justifyContent: "center", padding: "60px" }}
        >
          <Grid item sm={12} md={8} style={{ marginBottom: "25px" }}>
            <Typography
              variant="h5"
              className="service-sec1-heading"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Our Services{" "}
            </Typography>
            <Typography
              variant="h3"
              className="service-sec1-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              WHAT WE <span style={{ color: "rgb(249, 103, 2)" }}>OFFER</span>
            </Typography>
            <Typography
              variant="body1"
              className="service-sec1-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Think beyond expectation.
            </Typography>
            <Typography
              variant="body1"
              className="service-sec1-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Welcome to Astream, where we offer a comprehensive range of online
              web services to elevate your digital presence and drive your
              success in the virtual realm. Our team of skilled experts is
              dedicated to providing cutting-edge solutions tailored to your
              unique needs. We pride ourselves on a customer-centric approach,
              focusing on delivering top-quality services that exceed
              expectations. Partner with us to unlock your digital potential and
              embark on a journey of growth and success in the ever-evolving
              digital landscape.
            </Typography>
          </Grid>
          <Grid
            item
            container
            sm={12}
            md={8}
            style={{
              justifyContent: "center",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            <Grid
              item
              sm={6}
              style={{ border: "2px solid #FFFFFF45", padding: "45px 25px" }}
            >
              <CountUp
                start={0.1}
                end={8}
                duration={5.75}
                separator=" "
                decimals={2}
                decimal=","
                prefix=""
                suffix=" + <br/> Project"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    {/* <span
                      style={{ color: "#fff", fontWeight: "bold" }}
                      ref={countUpRef}
                    /> */}
                    <Typography
                      variant="h3"
                      className="service-sec1-heading"
                      style={{ fontWeight: "bold", textAlign: "center" }}
                      ref={countUpRef}
                    />
                  </div>
                )}
              </CountUp>
            </Grid>
            <Grid
              item
              sm={6}
              style={{ border: "2px solid #FFFFFF45", padding: "45px 25px" }}
            >
              <CountUp
                start={0.1}
                end={1}
                duration={1.75}
                separator=" "
                decimals={2}
                decimal=","
                prefix=""
                suffix=" +<br/> Employee"
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    {/* <span
                      style={{ color: "#fff", fontWeight: "bold" }}
                      ref={countUpRef}
                    /> */}
                    <Typography
                      variant="h3"
                      className="service-sec1-heading"
                      style={{ fontWeight: "bold", textAlign: "center" }}
                      ref={countUpRef}
                    />
                  </div>
                )}
              </CountUp>
            </Grid>
          </Grid>
          <Grid
            item
            container
            style={{ justifyContent: "space-evenly", marginTop: "40px" }}
            sm={12}
          >
            <Grid item xs={12} sm={3}>
              <Roll>
                <Card
                  // key={index}
                  style={{ maxWidth: 400, width: "100%" }}
                >
                  <CardMedia
                    style={{
                      height: 310,
                      // width: "310px",
                      // borderRadius: "50%",
                      // margin: "20px auto"  ,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="service-sec1-cardmedia"
                    image={leader}
                    title="Image1"
                  >
                    <Typography
                      variant="h5"
                      style={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        position: "absolute",
                        textAlign: "center",
                      }}
                    >
                      Plumbing & Public Health Engineering
                    </Typography>
                  </CardMedia>
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      Description
                    </Typography>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hot and Cold Water supply system" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Water Filtration" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Irrigation System" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Swimming Pool" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drainage" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sanitation" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Rainwater" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Seawage Treatment Plant" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Roll>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Roll>
                <Card style={{ maxWidth: 400, width: "100%" }}>
                  <CardMedia
                    style={{
                      height: 310,
                      // width: "310px",
                      // borderRadius: "50%",
                      // margin: "20px auto"  ,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="service-sec1-cardmedia"
                    image={leader}
                    title="Image1"
                  >
                    <Typography
                      variant="h5"
                      style={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        position: "absolute",
                        textAlign: "center",
                      }}
                    >
                      Fire Fighting System
                    </Typography>
                  </CardMedia>
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      Description
                    </Typography>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pipe and sprinkler erection" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Fire Suppression System" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Pump installation" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Roll>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Roll>
                <Card style={{ maxWidth: 400, width: "100%" }}>
                  <CardMedia
                    style={{
                      height: 310,
                      // width: "310px",
                      // borderRadius: "50%",
                      // margin: "20px auto"  ,
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                    }}
                    className="service-sec1-cardmedia"
                    image={leader}
                    title="Image1"
                  >
                    <Typography
                      variant="h5"
                      style={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        position: "absolute",
                        textAlign: "center",
                      }}
                    >
                      Electrical
                    </Typography>
                  </CardMedia>
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "bold" }}
                      color="text.secondary"
                    >
                      Description
                    </Typography>
                    <List
                      sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                      }}
                      aria-label="contacts"
                    >
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Power Distribution system" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Lighting Control" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Low Current Systems" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Telephone and Data System" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Access Control System" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Industrial Process Services" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Roll>
            </Grid>
          </Grid>
          <Grid
            item
            sm={12}
            md={8}
            style={{ marginTop: "5rem", marginBottom: "25px" }}
          >
            <Typography
              variant="h5"
              className="service-sec1-heading"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Our Trust{" "}
            </Typography>
            <Typography
              variant="h3"
              className="service-sec1-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              We're Trusted by Customers
            </Typography>
            <Typography
              variant="body1"
              className="service-sec1-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Think beyond expectation.
            </Typography>
            <Typography
              variant="body1"
              className="service-sec1-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Our customer share their experiences of transformation and growth.
              Unfiltered feedback and the true testament to our service quality.
            </Typography>
          </Grid>
          <Grid
            item
            container
            style={{ justifyContent: "center" }}
            spacing={4}
            direction="row"
          >
            <Grid item sm={12} md={4}>
              <DemoPaper square={false}>
                <Zoom>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#ffffff",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                  >
                    QUALITY POLICY
                  </Typography>
                </Zoom>
                <Bounce>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#ffffff",
                      fontWeight: "400",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    <FormatQuoteIcon />
                    We aim to attain business excellence in infrastructure works
                    by meeting and exceeding our customer's expectations in
                    terms of quality, timely completion and safety with absolute
                    compliance to relevant regulatory and obligatory
                    requirements. Our goal is to remain the preferred contractor
                    by continuous improvement with proper adherence to the
                    Quality Management System”.
                    <FormatQuoteIcon />
                  </Typography>
                </Bounce>
              </DemoPaper>
            </Grid>
            <Grid item sm={12} md={4}>
              <DemoPaper square={false}>
                <Zoom>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#ffffff",
                      fontWeight: "bolder",
                      textAlign: "center",
                    }}
                  >
                    QUALITY OBJECTIVES
                  </Typography>
                </Zoom>
                <Bounce>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#ffffff",
                      fontWeight: "400",
                      marginTop: "2rem",
                      textAlign: "center",
                    }}
                  >
                    <FormatQuoteIcon />
                    Ensure continued satisfaction of our customers by meeting
                    and complying with their requirements as well as the
                    relevant statutory and regulatory requirements.
                    <FormatQuoteIcon />
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#ffffff",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <FormatQuoteIcon />
                    Strive for improvements through continuous review and
                    enhancement of our system effectiveness.
                    <FormatQuoteIcon />
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#ffffff",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <FormatQuoteIcon />
                    Ensure that our service is cost effective, reliable, timely
                    and of the highest quality.
                    <FormatQuoteIcon />
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#ffffff",
                      fontWeight: "400",
                      textAlign: "center",
                    }}
                  >
                    <FormatQuoteIcon />
                    Enhance the skills and competences of our employees in order
                    to be able to effectively respond to the ever-changing
                    requirements of the industry and our clients.
                    <FormatQuoteIcon />
                  </Typography>
                </Bounce>
              </DemoPaper>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default Service;
