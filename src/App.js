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
  console.log("notes => ", notes);

  const [darkMode, setDarkMode] = useState(false)
  console.log('darkMode in app => ', darkMode)

  const theme=createTheme({
    palette : {
      type : darkMode ? "dark" : "light"
    }
  })
  return (
    <Router>
      <CssBaseline />
      <ThemeProvider theme={theme}>

      <Box className={classes.outerBox}>
        
        <LeftMenu darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Content />
      </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
