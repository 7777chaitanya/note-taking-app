import { useContext } from "react";
import { NotesContext } from "./contexts/NotesContext";
import { LeftMenu, Content } from "./components";
import { Box } from "@material-ui/core";
import useStyles from "./styles";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  const classes = useStyles();
  const { notes } = useContext(NotesContext);
  console.log("notes => ", notes);
  return (
    <Router>
      <Box className={classes.outerBox}>
        <LeftMenu />
        <Content />
      </Box>
    </Router>
  );
};

export default App;
