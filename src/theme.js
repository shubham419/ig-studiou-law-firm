import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    primary: {
      main: "#121212",
      contrastText: "#ffff",
      light: "#ffff",
    },
    secondary: {
      main: "#edf2ff",
      contrastText: "#585858",
      light: "#212121",
    },
    background: {
      default: "#121212", // Customize the default background color
      paper: "#1f1f1f", // Customize the background color for paper surfaces
    },

    text: {
      primary: "#ffffff", // Customize the primary text color
      secondary: "#ffff", // Customize the secondary text color
      disabled: "#999999", // Customize the disabled text color
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: '0 9.3rem',
          
        },
      },
    },
  },
  typography: {
    fontFamily:  "Inter, sans-serif", // Replace with the desired font stack
  },
});
