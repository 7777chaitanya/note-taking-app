import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchNoteField = () => {
  const classes = useStyles();
  return (
    <FormControl
      className={clsx(classes.margin, classes.textField)}
      variant="outlined"
    >
      <InputLabel htmlFor="outlined-adornment-password">Search notes</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        }
        labelWidth={100}
      />
    </FormControl>
  );
};

export default SearchNoteField;
