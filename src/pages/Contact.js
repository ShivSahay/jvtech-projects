import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
  TextField,
} from "@mui/material";

import "./Contact.css";
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
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GoogleMapReact from "google-map-react";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Service = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }
  const defaultProps = {
    center: {
      lat: 28.6139, // New Delhi latitude
      lng: 77.209,
    },
    zoom: 11,
  };
  const handleFormSubmit = () => {
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <>
      <Grid item container>
        <Grid className="contact-sec1">
          <Zoom>
            <Typography className="sec1-service-text1" variant="h2">
              Contact Information of
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
          className="contact-sec2"
          style={{ justifyContent: "center", padding: "60px" }}
        >
          <Grid item sm={12} md={8} style={{ marginBottom: "25px" }}>
            <Typography
              variant="h5"
              className="contact-sec2-heading"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Contuct US{" "}
            </Typography>
            <Typography
              variant="h3"
              className="contact-sec2-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Who We Are
            </Typography>
            <Typography
              variant="body1"
              className="contact-sec2-heading"
              style={{
                fontWeight: "500",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Megamind techno group of engineers & designers are known for
              providing all type of electrical, interior & fire fighting
              services. We have survived the competitive market, by giving best
              quality and services in the quickest time and within affordable
              prices. Our team of experts works closely with the client to know
              their requirements and to fulfill them on time, as we believe in
              100% customer satisfaction. Our main services are:
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              style={{
                background: "rgba(5, 154, 130, 1)",
                color: "#ffffff",
                width: "268px",
                borderRadius: "10rem",
                fontSize: "22px",
                textTransform: "capitalize",
                padding: "20px",
                transition: "all .3s",
                content: "",
              }}
              className="contact-sec2-btn"
            >
              Contact US
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className="contact-sec3"
          direction="row"
          gap={10}
          style={{ justifyContent: "center", padding: "30px 60px" }}
        >
          <Grid item sm={12}>
            <Typography
              variant="h4"
              className="contact-sec2-heading"
              style={{
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              Get connected with Astream
            </Typography>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            lg={3}
            xl={2}
            style={{ marginBottom: "25px" }}
          >
            <Zoom>
              <Box
                className="contact-sec3-box"
                sx={{ minWidth: 325, transition: "transform 0.3s ease" }}
              >
                <Card variant="outlined">
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href="tel:+91 9990314859">
                      <AddIcCallIcon
                        style={{ fontSize: "3rem", color: "rgb(249, 103, 2)" }}
                      />
                    </a>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href="tel:+91 9990314859"
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        opacity: "0.9",
                      }}
                    >
                      <Typography variant="h6">+91 9990314859</Typography>
                    </a>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Phone Number</Typography>
                  </Grid>
                </Card>
              </Box>
            </Zoom>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            lg={3}
            xl={2}
            style={{ marginBottom: "25px" }}
          >
            <Zoom>
              <Box
                className="contact-sec3-box"
                sx={{ minWidth: 325, transition: "transform 0.3s ease" }}
              >
                <Card variant="outlined">
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href="mailto:jvtech.engineers@gmail.com">
                      <EmailIcon
                        style={{ fontSize: "3rem", color: "rgb(249, 103, 2)" }}
                      />
                    </a>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        opacity: "0.9",
                      }}
                      href="mailto:jvtech.engineers@gmail.com"
                    >
                      <Typography variant="h6">
                        jvtech.engineers@gmail.com
                      </Typography>
                    </a>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Email Address</Typography>
                  </Grid>
                </Card>
              </Box>
            </Zoom>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            lg={3}
            xl={2}
            style={{ marginBottom: "25px" }}
          >
            <Zoom>
              <Box
                className="contact-sec3-box"
                sx={{ minWidth: 325, transition: "transform 0.3s ease" }}
              >
                <Card variant="outlined">
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CalendarMonthIcon
                      style={{ fontSize: "3rem", color: "rgb(249, 103, 2)" }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography style={{ textAlign: "center" }} variant="h6">
                      Mon - Fri: 9:00am - 7:00pm
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Business Hour</Typography>
                  </Grid>
                </Card>
              </Box>
            </Zoom>
          </Grid>
          <Grid
            item
            sm={12}
            md={4}
            lg={3}
            xl={2}
            style={{ marginBottom: "25px" }}
          >
            <Zoom>
              <Box
                className="contact-sec3-box"
                sx={{ minWidth: 325, transition: "transform 0.3s ease" }}
              >
                <Card variant="outlined">
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a href="https://www.google.com/maps?q=New+Delhi">
                      <LocationOnIcon
                        style={{ fontSize: "3rem", color: "rgb(249, 103, 2)" }}
                      />
                    </a>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#000",
                        opacity: "0.9",
                      }}
                      href="https://www.google.com/maps?q=New+Delhi"
                    >
                      <Typography variant="h6">
                        324,sec-45,Noida 201301
                      </Typography>
                    </a>
                  </Grid>
                  <Grid
                    item
                    style={{
                      margin: "35px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Office Address</Typography>
                  </Grid>
                </Card>
              </Box>
            </Zoom>
          </Grid>
        </Grid>
        {/* dsklf */}
        <Grid item container className="contact-sec5">
          <Grid item container sm={12} md={5} className="contact-sec5-touchbox">
            <Grid item xs={12} sm={12}>
              <Typography
                variant="h2"
                className="contact-sec5-touchbox-heading"
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                GET IN TOUCH
              </Typography>
              <hr />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              className="contact-sec5-plbox"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  // textAlign: "center",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                GURGAON OFFICE:
              </Typography>
              <Typography
                variant="body1"
                style={{
                  // textAlign: "center",
                  fontWeight: "400",
                  color: "#ffffff",
                }}
              >
                519,3rd Floor, Deep Plaza <br /> Opposite District Court
                <br /> Gurgaon, Haryana, India
                <br /> PIN: 122001
                <br /> Phone no.-0124-6458868
                <br /> Mobile No.- 09911506868
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              className="contact-sec5-plbox"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  // textAlign: "center",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                NOIDA OFFICE:
              </Typography>
              <Typography
                variant="body1"
                style={{
                  // textAlign: "center",
                  fontWeight: "400",
                  color: "#ffffff",
                }}
              >
                Plot No: C-65 <br /> Opposite District Court
                <br /> Sec- 51, Noida
                <br /> Distt. - G B Nagar, U.P.
                <br /> Phone No: 0120-6541868
                <br /> Mob.No.-09911449868
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              className="contact-sec5-plbox"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  // textAlign: "center",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                EASTERN UP - BIHAR OFFICE
              </Typography>
              <Typography
                variant="body1"
                style={{
                  // textAlign: "center",
                  fontWeight: "400",
                  color: "#ffffff",
                }}
              >
                12/22, Gyan Jyoti Lane <br /> Gola Road, Danapur
                <br /> Patna, Bihar
                <br /> Mobile No: 9709394115
                <br /> Contact Person - Kanhiya Singh
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={12}
              className="contact-sec5-plbox"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "10px",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  // textAlign: "center",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                E-MAIL:
              </Typography>
              <Typography
                variant="body1"
                style={{
                  // textAlign: "center",
                  fontWeight: "400",
                  color: "#ffffff",
                }}
              >
                <a href="mailto:jvtech.engineers@gmail.com">
                  jvtech.engineers@gmail.com
                </a>{" "}
                <br />{" "}
                <a href="mailto:jvtech.engineers@gmail.com">
                  jvtech.engineers@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            maxWidth="lg"
            sm={12}
            md={6}
            className="contact-sec5-form"
            style={{
              // border: "2px solid red",
              display: "flex",
              justifyContent: "center",
              // padding:"60px"
            }}
            spacing={2}
          >
            <Grid item xs={12} sm={12} md={10}>
              <Typography
                variant="h2"
                className="contact-sec5-form-text1"
                style={{
                  textAlign: "center",
                  fontWeight: "800",
                  color: "#ffffff",
                }}
              >
                Send us a message
              </Typography>
              <hr />
              <Typography
                variant="h6"
                className="contact-sec5-form-text2"
                style={{
                  textAlign: "center",
                  fontWeight: "400",
                  color: "#ffffff",
                }}
              >
                If you are satisfied in visiting our website and looking for any
                of our services. Then feel free to contact us. Here are our
                contact details and addresses for your convenience.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className="contact-sec5-formbtn-box">
              {/* <Button
                variant="contained"
                className="contact-sec5-formbtn"
                color="success"
                onClick={handleFormSubmit}
              >
                Submit
              </Button> */}
              <LoadingButton
                size="small"
                onClick={handleClick}
                endIcon={<SendIcon />}
                loading={loading}
                loadingPosition="end"
                color="success"
                variant="contained"
              >
                <span>Send</span>
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
        {/* asld */}
        <Grid
          item
          container
          className="contact-sec4"
          style={{ justifyContent: "center", padding: "0px" }}
        >
          <Grid
            item
            container
            style={{ position: "absolute" }}
            className="contact-sec6-grid"
          >
            <Typography>Border </Typography>
          </Grid>
          <div style={{ height: "50vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "kjdfvkdshgjkd " }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent lat={28.6139} lng={77.209} text="New Delhi" />
            </GoogleMapReact>
          </div>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default Service;

// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

// return (
//   <Grid container spacing={2}>
//     <Grid item xs={12}>
//       <TextField
//         label="Name"
//         variant="outlined"
//         fullWidth
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         label="Email"
//         variant="outlined"
//         fullWidth
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         label="Message"
//         variant="outlined"
//         multiline
//         rows={4}
//         fullWidth
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <Button variant="contained" color="primary" onClick={handleFormSubmit}>
//         Submit
//       </Button>
//     </Grid>
//   </Grid>
// );
// };

// export default ContactForm;
