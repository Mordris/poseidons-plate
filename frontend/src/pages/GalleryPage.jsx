import React from "react";
import { Box, Typography } from "@mui/material";
import GalleryGrid from "../components/GalleryGrid";
import { useTheme } from "@mui/material/styles";
import images from "../data/imageData";

const GalleryPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 }, 
        backgroundColor: theme.palette.background.default,
        minHeight: "80vh",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          textAlign: "center",
          mb: 3,
          fontSize: { xs: "h4.fontSize", sm: "h3.fontSize" },
        }}
      >
        Gallery
      </Typography>
      <GalleryGrid images={images} />
    </Box>
  );
};

export default GalleryPage;
