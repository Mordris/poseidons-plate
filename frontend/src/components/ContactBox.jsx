import React from "react";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useTheme } from "@mui/material/styles";

const ContactBox = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "white",
        color: "text.primary",
        p: 4,
        borderRadius: 3,
        boxShadow: 5,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        minHeight: "400px",
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <PhoneIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
        <Typography variant="h6">+90 555 555 5555</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <EmailIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
        <Typography variant="h6">info@restaurant.com</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <LocationOnIcon color="primary" sx={{ mr: 1, fontSize: 40 }} />
        <Typography variant="h6">
          Poseidon's Plate Restaurant
          <br />
          Hobyar Mah. Hamidiye Cad. No:16
          <br />
          Sirkeci/Istanbul/Turkey
        </Typography>
      </Box>
      <Typography variant="body1">
        We are here to help you with your reservations and inquiries.
      </Typography>
    </Box>
  );
};

export default ContactBox;
