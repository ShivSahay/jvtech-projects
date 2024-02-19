import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import image1 from "../images/1.jpeg";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";

const AboutSection = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <Zoom>
              <CardMedia
                component="img"
                height="440"
                style={{ transition: "transform 0.3s ease" }}
                className="home-about-cardmedia"
                alt="About Us Image"
                src={image1} // Replace with the actual image URL
              />
            </Zoom>
            <Paper
              elevation={3}
              style={{ padding: "20px", textAlign: "center" }}
            >
              <Fade bottom>
                <Typography variant="h4">
                  Fire Detection & Alarm System
                </Typography>
              </Fade>
              <Fade bottom>
                <Typography variant="body1" style={{ marginTop: "2rem" }}>
                  A fire detection and alarm system ( FDAS ) provides audible
                  and visual signals as a result of the operation of manual or
                  automatic fire alarm initiating devices such as a Manual Fire
                  Alarm station, smoke detector or heat detector of from other
                  protective equipment such as a fire sprinkler system.
                </Typography>
              </Fade>
            </Paper>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutSection;
