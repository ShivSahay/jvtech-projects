import React from "react";
import { Paper, Container, Typography, Link, Grid } from "@mui/material";

import "./Footer.css";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { Girl } from "@mui/icons-material";

const actions = [
  {
    icon: <WhatsAppIcon style={{ color: "rgb(31, 164, 30)" }} />,
    name: "Whatsapp",
    link: "https://wa.me/+91 9990314859",
  },
  {
    icon: <InstagramIcon style={{ color: "rgb(31, 164, 30)" }} />,
    name: "Instagram",
    link: "https://www.instagram.com/jvtechengineers/",
  },
  {
    icon: <FacebookOutlinedIcon style={{ color: "rgb(31, 164, 30)" }} />,
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    icon: <LinkedInIcon style={{ color: "rgb(31, 164, 30)" }} />,
    name: "LinkedIn",
    link: "https://www.linkedin.com/",
  },
];

const Footer = () => {
  return (
    <Grid item container sm={12}>
      <Paper
        component="footer"
        style={{
          width: "100%",
          minHeight: "40px",
          padding: "5rem",

          marginTop: "auto",
          // backgroundColor: "#f58320",
          // background:
          //   "repeating-linear-gradient(135deg,#f96702,#ff8400 2px,#f96702 2px,#f96702 10px)",
          background: "#09142b",
          color: "#ffffff",
          borderRadius: "0px",
        }}
      >
        {/* <Container maxWidth="md">
          <Typography variant="body2" align="center">
            © 2023 J.V. Tech
          </Typography>
          <Typography variant="body2" align="center">
            <Link
              href="#"
              style={{
                color: "#ffffff",
                marginLeft: "16px",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              style={{
                color: "#ffffff",
                marginLeft: "16px",
              }}
            >
              Terms of Service
            </Link>
          </Typography>
        </Container> */}
        <Grid item container sx={{ columnGap: "5rem" }}>
          <Grid item container sm={3} xs={4} sx={{ display: "flow" }}>
            <Grid
              item
              sm={12}
              sx={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "2rem" }}
              >
                J.V. Tech engineers
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              sx={{
                display: "flex",
                // justifyContent: "center",
                paddingRight: "5vw",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "14px" }}
              >
                Please contact us if you have any specific idea or request.
              </Typography>
            </Grid>
            <Grid
              item
              sm={12}
              sx={{
                display: "flex",
                // justifyContent: "center",
                paddingRight: "5vw",
                alignItems: "center",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  opacity: "0.9",
                }}
                href="mailto:jvtech.engineers@gmail.com"
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "400", fontSize: "16px" }}
                >
                  jvtech.engineers@gmail.com
                </Typography>
              </a>
            </Grid>
            <Grid item sm={12} container sx={{ marginTop: "2rem" }}>
              <Grid
                item
                sm={4}
                sx={{ display: "flex", justifyContent: "start" }}
              >
                {" "}
                <Typography variant="body2" align="center">
                  <Link
                    href="#"
                    style={{
                      color: "#ffffff",
                      // marginLeft: "16px",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid>
              <Grid
                item
                sm={4}
                sx={{ display: "flex", justifyContent: "start" }}
              >
                <Typography variant="body2" align="center">
                  <Link
                    href="#"
                    style={{
                      color: "#ffffff",
                      // marginLeft: "16px",
                    }}
                  >
                    Terms of Service
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container sm={3} xs={4} sx={{ display: "flow" }}>
            <Grid sm={12}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                How to find us
              </Typography>
            </Grid>
            <Grid sm={12} sx={{ paddingRight: "7vw" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "400", fontSize: "14px" }}
              >
                Gola Road, Danapur Sadarpur Noida, Noida Gautam Buddha Nagar,
                State: Utter Pradesh,201303
              </Typography>
            </Grid>
            <Grid sm={12} sx={{ display: "flex", marginTop: "3rem" }}>
              <Typography variant="body2" align="center">
                © 2023 J.V. Tech engineers All rights reserved
              </Typography>
            </Grid>
          </Grid>
          <Grid item sm={2} container sx={{ display: "flow" }}>
            <Grid item sm={12}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Company
              </Typography>
            </Grid>
            <Grid item sm={12} sx={{ marginLeft: "5px" }}>
              <a
                href="/"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "400",
                    fontSize: "18px",
                    paddingTop: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Home <HomeIcon sx={{ marginLeft: "5px" }} />
                </Typography>
              </a>
              <a
                href="/about" style={{ color: "#fff", textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                About <InfoIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              </a>
              <a
                href="/projects" style={{ color: "#fff", textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Project <LibraryAddIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              </a>
              <a
                href="/service" style={{ color: "#fff", textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Service <DesignServicesIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              </a>
              <a
                href="/contact" style={{ color: "#fff", textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Contact <ContactPhoneIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              </a>
            </Grid>
          </Grid>
          <Grid item sm={2} container sx={{ display: "flow" }}>
            <Grid item sm={12}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Social links
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                LinkedIn <LinkedInIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Facebook <FacebookOutlinedIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Instagram <InstagramIcon sx={{ marginLeft: "5px" }} />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
                  paddingTop: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Whatsapp <WhatsAppIcon sx={{ marginLeft: "5px" }} />
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid item sm={12} sx={{ marginTop: "2rem" }}>
            <Container maxWidth="md">
              <Typography variant="body2" align="center">
                © 2023 J.V. Tech All rights reserved
              </Typography>
              <Typography variant="body2" align="center">
                <Link
                  href="#"
                  style={{
                    color: "#ffffff",
                    marginLeft: "16px",
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  style={{
                    color: "#ffffff",
                    marginLeft: "16px",
                  }}
                >
                  Terms of Service
                </Link>
              </Typography>
            </Container>
          </Grid> */}
        </Grid>
      </Paper>
      <ControlledOpenSpeedDial />
    </Grid>
  );
};

const ControlledOpenSpeedDial = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAction = (action) => {
    window.open(action.link, "_blank"); // Open link in a new tab
    handleClose(); // Close the Speed Dial
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial controlled open example"
      sx={{ position: "fixed", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          component={Link}
          to={action.link}
          onClick={() => handleAction(action)}
          // onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
};

export default Footer;
