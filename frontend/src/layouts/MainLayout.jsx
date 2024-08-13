import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import SideButtons from "../components/Layout/SideButtons";
import theme from "../theme";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: "relative",
      }}
    >
      <Navbar />
      <Box className="children-box" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
      <SideButtons />
    </Box>
  );
};

export default MainLayout;
