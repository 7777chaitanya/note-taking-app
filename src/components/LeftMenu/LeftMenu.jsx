import React from "react";

import useStyles from "./styles";
import SearchNoteField from "./SearchNoteField/SearchNoteField";
import NewNoteButton from "./NewNoteButton/NewNoteButton"
import MenuList from "./MenuList/MenuList";
import {Card} from "@material-ui/core";

const LeftMenu = ({darkMode, setDarkMode}) => {
  const classes = useStyles();
  return (
  <Card className={classes.leftBox}>
    <SearchNoteField darkMode={darkMode} setDarkMode={setDarkMode} />
    <NewNoteButton/>
    <MenuList/>
  </Card>);
};

export default LeftMenu;
