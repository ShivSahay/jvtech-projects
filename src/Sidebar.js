import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flex: 1 }}>
            Your App Name
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <List>
          <ListItem button component="a" href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component="a" href="/about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component="a" href="/contact">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;