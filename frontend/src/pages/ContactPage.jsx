import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import ContactBox from "../components/ContactBox";
import Map from "../components/Map";
import { useTheme } from "@mui/material/styles";

const ContactPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        p: 3,
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={5}>
          <Typography variant="h3" gutterBottom color="text.primary">
            Contact Us
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We’d love to hear from you! Get in touch for any inquiries.
          </Typography>
        </Box>
        <Grid
          container
          spacing={4}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "stretch" }}
          >
            <ContactBox />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "stretch" }}
          >
            <Map />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
