import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";

const MenuCategory = ({ category, items }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        flex: "0 0 100%",
        height: "100%",
        p: 2, // Padding adjusted for better fit on smaller screens
        display: "flex",
        flexDirection: "column",
        backgroundColor: theme.palette.background.paper,
        boxSizing: "border-box",
        position: "relative",
        borderRadius: 2,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, color: theme.palette.text.primary }}
      >
        {category}
      </Typography>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{ borderBottom: `1px solid ${theme.palette.divider}`, py: 1 }}
          >
            <ListItemText
              primary={item.name}
              secondary={`$${item.price}`}
              primaryTypographyProps={{
                variant: "body1",
                fontWeight: "bold",
              }}
              secondaryTypographyProps={{ variant: "body2" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuCategory;
