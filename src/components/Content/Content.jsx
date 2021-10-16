import React from "react";
import useStyles from "./styles";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home";
import Notes from "./Notes/Notes";
import Tags from "./Tags/Tags";
import Trash from "./Trash/Trash";
import CheckList from "./CheckList/CheckList";
import ScratchPad from "./ScratchPad/ScratchPad";
import {Card} from "@material-ui/core";

const Content = () => {
  const classes = useStyles();
  return (
    <Card className={classes.rightBox}>
      <Router>
        <Switch>
          {/* <Card> */}
            <Route
              path="/notes/:roomId"
              render={(props) => <Notes {...props} />}
            />
            <Route path="/notes/" render={(props) => <Notes />} />

            <Route path="/tags" render={(props) => <Tags />} />
            <Route path="/trash" render={(props) => <Trash />} />
            <Route path="/checklist" render={(props) => <CheckList />} />
            <Route path="/scratchpad" render={(props) => <ScratchPad />} />

            <Route path="/" render={(props) => <Home />} />
          {/* </Card> */}
        </Switch>
      </Router>
    </Card>
  );
};

export default Content;
