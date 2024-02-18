import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Grid,
  CardMedia,
  Button,
  colors,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import "./Header.css";
// import image from '../../public/'
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedTab, setSelectedTab] = useState(0);
  let location = useLocation();
  console.log("location =>", location);

  const handleTabChange = (event, newValue) => {
    console.log("newValue", newValue);
    setSelectedTab(newValue);
  };

  useEffect(() => {
    if (location.pathname == "/about") {
      setSelectedTab(1);
    } else if (location.pathname == "/projects") {
      setSelectedTab(2);
    } else if (location.pathname == "/service") {
      setSelectedTab(3);
    } else if (location.pathname == "/contact") {
      setSelectedTab(4);
    } else {
      setSelectedTab(0);
    }
  }, []);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const routes = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Service", link: "/service" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          style={{
            // background: "#f58320",
            background:
              "repeating-linear-gradient(135deg,#f96702,#ff8400 2px,#f96702 2px,#f96702 10px)",
            // background:"linear-gradient(-45deg, rgba(31,164,30,255) -5%, rgba(245,131,32,255))",
            minHeight: "95px",
          }}
          className="toolbar-header"
        >
          <Grid item container sm={12} md={12}>
            <Grid item sm={3} className="header-logo-box" xs={10} md={3}>
              <a href="">
                <Button
                  // component={Link}
                  // to="/"
                  disableRipple
                  className="header-logo"
                  style={{
                    position: "relative",
                    padding: "0px",
                    // marginLeft: "75px",
                    textTransform: "none",

                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <img
                    style={{
                      height: "5em",
                      width: "12em",
                      display: "inline-block",
                      overflow: "hidden",
                    }}
                    src="logo.png"
                    alt="logo"
                    className="header-logo-image"
                  ></img>
                </Button>
              </a>
            </Grid>
            {isMobile ? (
              <Grid
                item
                sm={9}
                style={{ display: "flex", justifyContent: "flex-end" }}
                xs={2}
                md={6}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className="mobile-header-iconbtn"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            ) : null}

            {isMobile ? null : (
              <Grid
                item
                sm={9}
                md={9}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tabs value={selectedTab} onChange={handleTabChange}>
                  {routes.map((route, index) => (
                    <Tab
                      key={`${index}`}
                      className={`header-link`}
                      style={{
                        color: "#fff",
                        // textTransform: "none",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                      }}
                      component={Link}
                      to={route.link}
                      label={route.name}
                    />
                  ))}
                </Tabs>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        className="drower-sidebar"
        open={open}
        onClose={handleDrawerClose}
      >
        <List className="drower-sidebar-item">
          <Link to="/" onClick={handleDrawerClose}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon style={{ color: "#fff" }}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/about" onClick={handleDrawerClose}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon style={{ color: "#fff" }}>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/projects" onClick={handleDrawerClose}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon style={{ color: "#fff" }}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Project" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/service" onClick={handleDrawerClose}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon style={{ color: "#fff" }}>
                  <HomeRepairServiceIcon />
                </ListItemIcon>
                <ListItemText primary="Service" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/contact" onClick={handleDrawerClose}>
            <ListItem>
              <ListItemButton>
                <ListItemIcon style={{ color: "#fff" }}>
                  <ContactMailIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
