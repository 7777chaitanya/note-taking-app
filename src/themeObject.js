import { createTheme } from "@material-ui/core";

const themeObject = (darkMode) =>
  createTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            scrollbarColor: !darkMode ? "#3f51b5 #ffffff" : "#3f51b5 #959595",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: !darkMode ? "#ffffff" : "#424242",
              width: "0.3rem",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#3f51b5",
              minHeight: 24,
              // border: "1px solid #ffffff",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "#959595",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#ffffff",
            },
          },
        },
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

export default themeObject;
