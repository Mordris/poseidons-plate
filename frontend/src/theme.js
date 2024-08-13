import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#009688", // Teal color
    },
    background: {
      default: "#e0f2f1", // Light teal background
      image: "/path-to-your-background-image.jpg", // Background image if applicable
    },
    text: {
      primary: "#004d40", // Dark teal text
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    body1: {
      fontWeight: 400,
    },
  },
});

export default theme;
