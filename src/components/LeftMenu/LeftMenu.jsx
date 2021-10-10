import React from "react";

import useStyles from "./styles";
import SearchNoteField from "./SearchNoteField/SearchNoteField";
import NewNoteButton from "./NewNoteButton/NewNoteButton"
import MenuList from "./MenuList/MenuList";

const LeftMenu = () => {
  const classes = useStyles();
  return (
  <div className={classes.leftBox}>
    <SearchNoteField/>
    <NewNoteButton/>
    <MenuList/>
  </div>);
};

export default LeftMenu;
