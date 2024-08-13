import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const GalleryGrid = () => {
  return (
    <Grid container spacing={2} sx={{ p: 4 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="140"
            image="/path/to/image.jpg"
            alt="Gallery Image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Image description or title
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more Grid items */}
    </Grid>
  );
};

export default GalleryGrid;
