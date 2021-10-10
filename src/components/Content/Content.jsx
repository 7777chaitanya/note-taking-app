import React from "react";
import useStyles from "./styles";

import Home from "./Home/Home";
import Notes from "./Notes/Notes";

const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.rightBox}>
      <Home />
      <Notes />
      <Trash />
      <Tags />
    </div>
  );
};

export default Content;
