import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const GalleryGrid = ({ images }) => {
  const renderImage = (image, height = 200) => (
    <Card>
      <CardMedia component="img" height={height} image={image} />
    </Card>
  );

  const renderRow = (startIndex, layoutType) => {
    if (startIndex >= images.length) return null;

    return layoutType === "odd" ? (
      <Grid container item spacing={2} xs={12} key={`row-${startIndex}`}>
        <Grid container item xs={12} sm={6} md={4} spacing={2}>
          {images.slice(startIndex, startIndex + 4).map((image, index) => (
            <Grid item xs={6} key={`small-left-${index}`}>
              {renderImage(image)}
            </Grid>
          ))}
        </Grid>

        {startIndex + 4 < images.length && (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`large-center-${startIndex + 4}`}
          >
            {renderImage(images[startIndex + 4], 400)}
          </Grid>
        )}

        {startIndex + 5 < images.length && (
          <Grid container item xs={12} sm={6} md={4} spacing={2}>
            {images
              .slice(startIndex + 5, startIndex + 9)
              .map((image, index) => (
                <Grid item xs={6} key={`small-right-${index}`}>
                  {renderImage(image)}
                </Grid>
              ))}
          </Grid>
        )}
      </Grid>
    ) : (
      <Grid container item spacing={2} xs={12} key={`row-${startIndex}`}>
        <Grid item xs={12} sm={6} md={4} key={`large-left-${startIndex}`}>
          {renderImage(images[startIndex], 400)}
        </Grid>

        {startIndex + 1 < images.length && (
          <Grid container item xs={12} sm={6} md={4} spacing={2}>
            {images
              .slice(startIndex + 1, startIndex + 5)
              .map((image, index) => (
                <Grid item xs={6} key={`small-center-${index}`}>
                  {renderImage(image)}
                </Grid>
              ))}
          </Grid>
        )}

        {startIndex + 5 < images.length && (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={`large-right-${startIndex + 5}`}
          >
            {renderImage(images[startIndex + 5], 400)}
          </Grid>
        )}
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {images.map((_, rowIndex) =>
        renderRow(rowIndex * 9, rowIndex % 2 === 0 ? "odd" : "even")
      )}
    </Grid>
  );
};

export default GalleryGrid;
