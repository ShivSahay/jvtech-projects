import React from "react";
import Header from "../Header";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./Service.css";
import Footer from "../Footer";
import AboutSection from "../components/AboutSection";

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <Card className="service-sec1-card">
      <CardMedia component="img" height="240" alt={title} src={imageUrl} />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};
const Service = () => {
  const services = [
    {
      title: "Plumbing & Public Health Engineering",
      description:
        "Hot and Cold Water supply system.Water Filtration.Irrigation System.Swimming Pool.Drainage.Sanitation.Rainwater.Seawage Treatment Plant",
      imageUrl:
        "https://5.imimg.com/data5/EE/FS/MY-8313669/dsc00219t-500x500.jpg",
    },
    {
      title: "Fire Fighting System",
      description:
        "Pipe and sprinkler erection.Fire Suppression System.Pump installation",
      imageUrl:
        "https://5.imimg.com/data5/EE/FS/MY-8313669/dsc00219t-500x500.jpg",
    },
    {
      title: "Electrical",
      description:
        "Power Distribution system.Lighting Control.Low Current Systems.Telephone and Data System.Access Control System.Industrial Process Services",
      imageUrl:
        "https://5.imimg.com/data5/EE/FS/MY-8313669/dsc00219t-500x500.jpg",
    },
    // Add more services as needed
  ];
  return (
    <>
      <Grid item container>
        <Header />
        <Grid className="service-sec9">
          <Typography className="sec1-home-text" variant="h2">
            J.V.TECH ENGINEERS
          </Typography>
        </Grid>
        <Grid
          item
          container
          className="service-sec1"
          style={{ justifyContent: "center", padding: "60px" }}
        >
          <Grid
            item
            sm={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="h2"
              className="service-sec1-heading"
              style={{ fontWeight: "bold", textAlign: "center" }}
            >
              Our Services
            </Typography>
          </Grid>
          {/* Last add */}
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className="home-sec5"
            style={{
              minHeight: "450px",
              // background:
              // " linear-gradient(94.64deg, #B023C2 -0.12%, #680DE4 99.52%)",
              // background: "#926CB3",
              background: "#ffffff",
              padding: "2rem",
            }}
            xs={12}
          >
            <Grid
              item
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="landing-sec5-btn-grid"
              spacing={3}
              sm={6}
              style={{ marginTop: "30px", marginBottom: "20px" }}
            >
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
                    </Card>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
          <Container maxWidth="md" style={{ marginTop: "2rem" }}>
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};

export default Service;
