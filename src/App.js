import { useContext, useState } from "react";
import { NotesContext } from "./contexts/NotesContext";
import { LeftMenu, Content } from "./components";
import { Box, createTheme, ThemeProvider } from "@material-ui/core";
import useStyles from "./styles";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import themeObject from "./themeObject.js";
import { DarkModeContext } from './contexts/DarkModeContext';

const App = () => {
  const classes = useStyles();
  const { notes } = useContext(NotesContext);
  const {darkMode, setDarkMode} = useContext(DarkModeContext);
  // const [darkMode, setDarkMode] = useState(false);
  const theme = themeObject(darkMode);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box className={classes.outerBox}>
          <LeftMenu />
          <Content />
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
