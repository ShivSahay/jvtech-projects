// import React from "react";
// import { Link } from "react-router-dom";
// import Facebook from "@mui/icons-material/Facebook";
// import Linkedin from "@mui/icons-material/LinkedIn";
// import Gmail from "@mui/icons-material/Mail";
// import "./Footer.css";
// // import * as ROUTES from "../constants/Routes";
// // import privacyPolicy from "../../src/assets/privacy_pdf/Privacy_Policy_Load.pdf";
// // import TermsOfService from "../../src/assets/privacy_pdf/Terms_of_Service_Load.pdf";
// import { Grid, Typography } from "@mui/material";

// function Footer(props) {
//   return (
//     <div
//       style={{
//         backgroundColor: "#000",
//         display: "flex",
//         alignSelf: "flex-end",
//         alignItems: "flex-end",
//         justifyContent: "center",
//       }}
//     >
//       <Grid
//         container
//         justifyContent="space-between"
//         className=""
//         style={{backgroundColor: "#000",
//         width: "90%",
//         alignSelf: "center",
//         marginTop: "54px",
//         marginBottom: "54px",}}
//       >
//         <Grid item container direction="row" style={{ marginBottom: "25px" }}>
//           <Grid item xs={12} direction="column">
//             <Grid item>
//               <Typography
//                 variant="h5"
//                 align="left"
//                 className="footer-heading"
//                 gutterBottom
//                 style={{ color: "#fff" }}
//               >
//                 J.V. Tech
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item container direction="row">
//           <Grid item xs={6} container align="flex-end" direction="column">
//             <Grid item style={{ marginBottom: "10px" }}>
//               <Typography
//                 variant="body1"
//                 className="footer-text"
//                 align="left"
//                 style={{ color: "#fff", fontWeight: "lighter" }}
//               >
//                 Contact :{" "}
//                 <a
//                   className="link-footer"
//                   href="mailto:info@meshedinc.com"
//                   style={{ color: "white", textDecoration: "none" }}
//                   target="_blank"
//                 >
//                   info@meshedinc.com
//                 </a>
//               </Typography>
//             </Grid>
//             <Grid item style={{ marginBottom: "10px" }}>
//               <Typography
//                 variant="h6"
//                 className="footer-text"
//                 gutterBottom
//                 style={{ color: "#fff", fontSize: "1rem" }}
//               >
//                 Follow Us
//               </Typography>
//             </Grid>
//             <Grid item style={{ alignSelf: "flex-start" }}>
//               <a
//                 className="link-footer"
//                 href="https://www.facebook.com/Meshedinc"
//                 target="_blank"
//                 style={{ marginRight: "1em" }}
//               >
//                 <Facebook
//                   color="#fff"
//                   className="footer-share-icon"
//                   style={{ color: "#fff", fontSize: "2rem" }}
//                 />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/meshedinc/?viewAsMember=true"
//                 target="_blank"
//                 className="link-footer"
//               >
//                 <Linkedin
//                   color="#fff"
//                   className="footer-share-icon"
//                   style={{ color: "#fff", fontSize: "2rem" }}
//                 />
//               </a>
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             xs={6}
//             container
//             align="flex-end"
//             alignItems="flex-end"
//             direction="column"
//           >
//             <Grid item style={{ marginBottom: "10px" }}>
//               <Typography
//                 variant="body1"
//                 align="left"
//                 className="footer-text"
//                 style={{ color: "#fff", fontWeight: "lighter" }}
//               >
//                 <a
//                   className="link-footer"
//                 //   href={TermsOfService}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{ color: "white", textDecoration: "none" }}
//                 >
//                   {" "}
//                   Terms & Conditions
//                 </a>
//               </Typography>
//             </Grid>
//             <Grid
//               item
//               className="privacy-grid"
//               style={{ marginBottom: "10px", marginRight: "40px" }}
//             >
//               <Typography
//                 variant="h6"
//                 className="footer-text"
//                 gutterBottom
//                 style={{ color: "#fff", fontSize: "1rem" }}
//               >
//                 <a
//                   className="link-footer"
//                 //   href={privacyPolicy}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{ color: "white", textDecoration: "none" }}
//                 >
//                   {" "}
//                   Privacy Policy{" "}
//                 </a>
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

// export default Footer;

// Footer.js
import React from "react";
import { Paper, Container, Typography, Link, Grid } from "@mui/material";

import "./Footer.css";
import Box from "@mui/material/Box";
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
    link: "http://api.whatsapp.com/",
  },
  {
    icon: <InstagramIcon style={{ color: "rgb(31, 164, 30)" }} />,
    name: "Instagram",
    link: "https://www.instagram.com/pandit_himanshu_mishra_up45/",
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
  // const classes = useStyles();
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
            {/* © {new Date().getFullYear()} J.V. Tech */}© 2023 J.V. Tech
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
