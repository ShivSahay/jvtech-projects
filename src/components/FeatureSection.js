import React from "react";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Fade, Zoom } from "react-reveal";

const FeatureSection = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Fade top>
              <Typography variant="h4" className="work-exp-text">
                Vision
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography variant="body1">
                We strive to become one of the leading and most reliable MEP
                contracting and most renowned companies in India, continuously
                conforming to our ever-growing professional and ethical demeanor
                as well as quality assurance standards to earn the privilege of
                being your Contractor of choice.
              </Typography>
            </Fade>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Fade top>
              <Typography variant="h4" className="work-exp-text">
                Mission
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography variant="body1">
                Guided by our vision we shall deliver high-quality,
                cost-effective works on schedule and enhance our client’s
                satisfaction through continuous improvement of our business
                practices in terms of safety, quality, services, delivery as
                well as environmental protection.
              </Typography>
            </Fade>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Fade top>
              <Typography variant="h4" className="work-exp-text">
                Working
              </Typography>
            </Fade>
            <Fade bottom>
              <Typography variant="body1">
                Our highly qualiﬁed and technically competent managers,
                engineers and technicians, allow us to capture a sizable share
                of the market. We are currently executing projects in different
                premises of commercial, residential and industrial type such as
                a fire sprinkler system..
              </Typography>
            </Fade>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeatureSection;
