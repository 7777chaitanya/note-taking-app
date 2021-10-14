import React from "react";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

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
