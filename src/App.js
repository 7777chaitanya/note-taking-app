import { useContext, useState } from "react";
import { NotesContext } from "./contexts/NotesContext";
import { LeftMenu, Content } from "./components";
import { Box, createTheme, ThemeProvider } from "@material-ui/core";
import useStyles from "./styles";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";


const App = () => {
  const classes = useStyles();
  const { notes } = useContext(NotesContext);
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            scrollbarColor: !darkMode ? "#3f51b5 #ffffff" : "#3f51b5 #959595",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: !darkMode ? "#ffffff" : "#424242",
              width : "0.3rem"
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
    palette : {
      type : darkMode ? "dark" : "light"
    }
    
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      

      <Box className={classes.outerBox}>
        
        <LeftMenu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Content />
      </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
