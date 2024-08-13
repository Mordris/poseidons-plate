import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import ReservationForm from "../components/ReservationForm";

const ReservationPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${theme.palette.background.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-color 0.3s ease",
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          p: 4,
          boxShadow: 5,
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Book Your Table
        </Typography>
        <ReservationForm />
      </Box>
      <Box
        sx={{
          mt: 4,
          display: isMobile ? "none" : "block",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          For any assistance or special requests, please contact us at
          <br />
          <Typography variant="body1" component="span" color="primary">
            (123) 456-7890
          </Typography>
          <br />
          or email us at
          <br />
          <Typography variant="body1" component="span" color="primary">
            reservations@poseidonsplate.com
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default ReservationPage;
