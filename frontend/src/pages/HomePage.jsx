import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Poseidon's Plate
      </Typography>
      <Typography variant="h5" gutterBottom>
        A perfect place for fine dining and great company
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" component={Link} to="/menu">
          View Menu
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/reservation"
          sx={{ ml: 2 }}
        >
          Make a Reservation
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
