import React from "react";
import { Box, Typography } from "@mui/material";
import GalleryGrid from "../components/GalleryGrid";
import { useTheme } from "@mui/material/styles";

const GalleryPage = () => {
  const theme = useTheme();
  const images = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
  ];

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: theme.palette.background.default,
        minHeight: "80vh",
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
        Gallery
      </Typography>
      <GalleryGrid images={images} />
    </Box>
  );
};

export default GalleryPage;
