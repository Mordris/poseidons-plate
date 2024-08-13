import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Box } from "@mui/material";

// Fixing the default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const Map = () => {
  const position = [41.01384, 28.97448]; // Coordinates for Sirkeci, Istanbul

  return (
    <Box
      sx={{
        height: { xs: "400px", md: "100%" },
        width: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MapContainer
        center={position}
        zoom={16}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Poseidon's Plate Restaurant
            <br />
            Hobyar Mah. Hamidiye Cad. No:16 Sirkeci/Istanbul/Turkey
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default Map;
