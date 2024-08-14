import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Instagram, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        p: 4,
        bgcolor: theme.palette.primary.dark,
        color: theme.palette.common.white,
        mt: "auto",
        textAlign: "center",
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Poseidon's Plate
      </Typography>
      <Typography variant="body2" gutterBottom>
        © 2024 Poseidon's Plate. All rights reserved.
      </Typography>
      <Divider sx={{ my: 2, bgcolor: theme.palette.divider }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 2,
        }}
      >
        <IconButton
          color="inherit"
          href="https://instagram.com"
          aria-label="Instagram"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://facebook.com"
          aria-label="Facebook"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com"
          aria-label="Twitter"
        >
          <Twitter />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://linkedin.com"
          aria-label="LinkedIn"
        >
          <LinkedIn />
        </IconButton>
      </Box>
      <Typography variant="body2">
        <a
          href="mailto:contact@poseidonsplate.com"
          style={{
            color: theme.palette.common.white,
            textDecoration: "none",
          }}
        >
          contact@poseidonsplate.com
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
