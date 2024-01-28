// AboutSection.js
import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";

const AboutSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardMedia
              component="img"
              height="240"
              alt="About Us Image"
              src="1.jpg" // Replace with the actual image URL
            />
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Typography variant="h4">
                Fire Detection & Alarm System
              </Typography>
              <Typography variant="body1" style={{marginTop:"2rem"}}>
                A fire detection and alarm system ( FDAS ) provides audible and
                visual signals as a result of the operation of manual or
                automatic fire alarm initiating devices such as a Manual Fire
                Alarm station, smoke detector or heat detector of from other
                protective equipment such as a fire sprinkler system.
              </Typography>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
