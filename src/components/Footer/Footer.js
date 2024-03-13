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
          padding: "32px",
          marginTop: "auto",
          // backgroundColor: "#f58320",
          background:
            "repeating-linear-gradient(135deg,#f96702,#ff8400 2px,#f96702 2px,#f96702 10px)",
          color: "#ffffff",
        }}
      >
        <Container maxWidth="md">
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
        </Container>
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
