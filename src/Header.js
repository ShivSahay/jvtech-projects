import React, { useState } from "react";
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

import { Link } from "react-router-dom";
import "./Header.css";
// import image from '../../public/'
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
          style={{ background: "#131120", minHeight: "75px" }}
          className="toolbar-header"
        >
          <Grid item container sm={12} md={12}>
            <Grid item sm={3} xs={10} md={3}>
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
                      height: "4em",
                      width: "10em",
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
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Tabs value={selectedTab} onChange={handleTabChange}>
                  {routes.map((route, index) => (
                    <Tab
                      key={`${index}`}
                      className={`header-link`}
                      style={{
                        color: "#fff",
                        // textTransform: "none",
                        fontSize: "1rem",
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
        <List>
          <ListItem href="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem href="/about">
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem href="/projects">
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Education" />
            </ListItemButton>
          </ListItem>
          <ListItem href="/service">
            <ListItemButton>
              <ListItemIcon>
                <HomeRepairServiceIcon />
              </ListItemIcon>
              <ListItemText primary="Service" />
            </ListItemButton>
          </ListItem>
          <ListItem href="/contact">
            <ListItemButton>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
