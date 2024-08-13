import React from "react";
import { Box, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import MapIcon from "@mui/icons-material/Map";

const SideButtons = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 1100,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <IconButton
        href="https://wa.me/905380728983"
        color="primary"
        aria-label="WhatsApp"
        sx={{ mb: 1 }}
      >
        <WhatsAppIcon />
      </IconButton>
      <IconButton
        href="tel:+905380728983"
        color="primary"
        aria-label="Call"
        sx={{ mb: 1 }}
      >
        <PhoneIcon />
      </IconButton>
      <IconButton
        href="https://instagram.com/emregltp0"
        color="primary"
        aria-label="Instagram"
        sx={{ mb: 1 }}
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        href="https://maps.google.com/?q=Hobyar Mah. Hamidiye Cad. No:16 Sirkeci/Istanbul/Turkey"
        color="primary"
        aria-label="Map"
      >
        <MapIcon />
      </IconButton>
    </Box>
  );
};

export default SideButtons;
