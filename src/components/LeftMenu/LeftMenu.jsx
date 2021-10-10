import React from "react";

import useStyles from "./styles";
import SearchNoteField from "./SearchNoteField/SearchNoteField";

const LeftMenu = () => {
  const classes = useStyles();
  return (
  <div className={classes.leftBox}>
    <SearchNoteField/>
  </div>);
};

export default LeftMenu;
