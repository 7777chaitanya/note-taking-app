import React, { useState, useContext } from "react";

import useStyles from "./styles";
import { Link } from "react-router-dom";
import { Box, Switch } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { DarkModeContext } from "../../../contexts/DarkModeContext";

const SearchNoteField = () => {
  const classes = useStyles();
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const handleChange = () => {
    console.log("callllled");
    setDarkMode((darkMode) => !darkMode);
  };

  return (
    <Box className={classes.outerBox}>
      <Box component={Link} to="/">
        <img
          src={`${process.env.PUBLIC_URL}/fingertips.png`}
          alt="logo"
          className={classes.navbarLogo}
        />
      </Box>

      <FormControlLabel
        control={
          <Switch checked={darkMode} onClick={handleChange} label="Secondary" />
        }
        label={darkMode ? "Light Mode" : "Dark Mode"}
      />
    </Box>
  );
};

export default SearchNoteField;
