import React, { useRef, useState, useEffect } from "react";
import { Box, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";
import PageFlip from "react-pageflip";
import MenuCategory from "../components/MenuCategory";
import menuData from "../data/menuData";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const MenuPage = () => {
  const theme = useTheme();
  const pageFlipRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const categories = Object.keys(menuData);

  const handleNextPage = () => {
    if (pageFlipRef.current) {
      pageFlipRef.current.pageFlip().flipNext();
    }
  };

  const handlePreviousPage = () => {
    if (pageFlipRef.current) {
      pageFlipRef.current.pageFlip().flipPrev();
    }
  };

  // Update current page state
  useEffect(() => {
    const pageFlipInstance = pageFlipRef.current?.pageFlip();
    if (pageFlipInstance) {
      pageFlipInstance.event.on('onFlip', (e) => {
        setCurrentPage(e.data);
      });
    }
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto", // Allow scrolling if content exceeds viewport
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ textAlign: "center", mb: 4 }}>
        Our Menu
      </Typography>
      <Box
        sx={{
          position: "relative",
          width: isSmallScreen ? "100%" : "90%",
          maxWidth: isSmallScreen ? "100%" : "1400px",
          height: "auto", // Allow height to grow based on content
          maxHeight: "90vh", // Maximum height of container with scrolling
          backgroundColor: theme.palette.background.paper,
          boxShadow: 3,
          borderRadius: 2,
          overflow: "auto", // Allow scrolling if content exceeds max height
        }}
      >
        <PageFlip
          width={isSmallScreen ? 300 : 1000}
          height={isSmallScreen ? 400 : 800}
          size="fixed"
          minWidth={200}
          maxWidth={1400}
          minHeight={200}
          maxHeight={800}
          ref={pageFlipRef}
        >
          {categories.map((category, index) => (
            <div key={category} className="page">
              <MenuCategory category={category} items={menuData[category]} />
            </div>
          ))}
        </PageFlip>

        {/* Navigation Arrows */}
        <IconButton
          onClick={handlePreviousPage}
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            zIndex: 1,
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.action.hover },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>

        <IconButton
          onClick={handleNextPage}
          sx={{
            position: "absolute",
            top: "50%",
            right: 10,
            zIndex: 1,
            transform: "translateY(-50%)",
            backgroundColor: theme.palette.background.paper,
            "&:hover": { backgroundColor: theme.palette.action.hover },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Page Number Display */}
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: theme.palette.background.paper,
            borderRadius: 1,
            px: 2,
            py: 1,
            boxShadow: 1,
            color: theme.palette.text.primary,
          }}
        >
          <Typography variant="body2">
            Page {currentPage + 1} of {categories.length}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuPage;
