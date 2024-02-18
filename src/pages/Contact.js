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
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform your submission logic here
  };
  const defaultProps = {
    center: {
      lat: 28.6139, // New Delhi latitude
      lng: 77.209,
    },
    zoom: 11,
  };
  const handleFormSubmit = () => {
    // Handle form submission logic here
    handleClick();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Permission denied by admin
        </Alert>
      </Snackbar>
      ;
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
            <Fade bottom>
              <Typography
                variant="h5"
                className="contact-sec2-heading"
                style={{ fontWeight: "bold", textAlign: "center" }}
              >
                Contuct US{" "}
              </Typography>
            </Fade>
            <Fade bottom>
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
            </Fade>
            <Fade bottom>
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
                services. We have survived the competitive market, by giving
                best quality and services in the quickest time and within
                affordable prices. Our team of experts works closely with the
                client to know their requirements and to fulfill them on time,
                as we believe in 100% customer satisfaction. Our main services
                are:
              </Typography>
            </Fade>
          </Grid>
          <Grid
            item
            sm={5}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Fade left>
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
            </Fade>
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
            <Fade bottom>
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
            </Fade>
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
        <Grid item container className="contact-sec5">
          <Grid item container sm={12} md={5} className="contact-sec5-touchbox">
            <Grid item xs={12} sm={12}>
              <Fade left>
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
              </Fade>
              <hr />
            </Grid>
            {/* <Grid
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
              <Fade bottom>
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
              </Fade>
            </Grid> */}
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
                <br /> Sec- 13, Noida
                <br /> Distt. - G B Nagar, U.P.
                <br /> Phone No: +91 9990314859
                <br /> Contact Person Name - Mr. Vipin Pal Singh
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
                Address of Principle Place of Business
              </Typography>
              <Typography
                variant="body1"
                style={{
                  // textAlign: "center",
                  fontWeight: "400",
                  color: "#ffffff",
                }}
              >
                Shyama Devi W/O Rajpal Singh, <br /> Gola Road, Danapur
                <br /> Sadarpur Noida,
                <br /> Noida Gautam Buddha Nagar,Utter Pradesh,201303
                <br /> Mobile No: +91 9990314859
                <br /> Contact Person Name - Mr. Vipin Pal Singh
              </Typography>
            </Grid>
            {/* <Grid
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
            </Grid> */}
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
                <a
                  href="mailto:jvtech.engineers@gmail.com"
                  style={{ color: "#ffffff" }}
                >
                  jvtech.engineers@gmail.com
                </a>{" "}
                <br />{" "}
                <a
                  href="mailto:jvtechengineers2022@gmail.com"
                  style={{ color: "#ffffff" }}
                >
                  jvtechengineers2022@gmail.com
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
              display: "flex",
              justifyContent: "center",
            }}
            spacing={2}
          >
            <Grid item xs={12} sm={12} md={10}>
              <Fade right>
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
              </Fade>
              <hr />
              <Fade bottom>
                <Typography
                  variant="h6"
                  className="contact-sec5-form-text2"
                  style={{
                    textAlign: "center",
                    fontWeight: "400",
                    color: "#ffffff",
                  }}
                >
                  If you are satisfied in visiting our website and looking for
                  any of our services. Then feel free to contact us. Here are
                  our contact details and addresses for your convenience.
                </Typography>
              </Fade>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Fade left>
                    <Button
                      style={{
                        background: "rgba(5, 154, 130, 1)",
                        color: "#ffffff",
                        width: "158px",
                        borderRadius: "10rem",
                        fontSize: "22px",
                        textTransform: "capitalize",
                        padding: "10px",
                        transition: "all .3s",
                        content: "",
                      }}
                      onClick={handleFormSubmit}
                      className="contact-sec4-formbtn"
                    >
                      Submit
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
        <Grid
          item
          container
          className="contact-sec4"
          style={{ justifyContent: "center", padding: "0px" }}
        >
          <Grid
            item
            container
            style={{ position: "absolute", height: "30px" }}
            className="contact-sec6-grid"
          >
            <Typography> </Typography>
          </Grid>
          <div style={{ height: "50vh", width: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7005.587118621671!2d77.35287514604997!3d28.605969352716762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56cf11a7011%3A0x49d7576acb82fa23!2sSector%2058%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1708073079841!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
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
