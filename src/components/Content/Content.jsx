import React from "react";
import useStyles from "./styles";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import Notes from "./Notes/Notes";
import Tags from "./Tags/Tags";
import Trash from "./Trash/Trash";

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightBox}>
      <Router>
        <Switch>
          <Route path="/home" render={(props) => <Home />} />

          <Route path="/notes/:roomId" render={(props) => <Notes {...props}/>} />
          <Route path="/tags" render={(props) => <Tags />} />
          <Route path="/trash" render={(props) => <Trash />} />
        </Switch>
      </Router>
    </div>
  );
};

export default Content;
