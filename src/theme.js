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
      default: "#121212",
      paper: "#1f1f1f", 
    },

    text: {
      primary: "#ffffff", 
      secondary: "#ffff",
      disabled: "#999999", 
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
    fontFamily:  "Inter, sans-serif", 
  },
});
