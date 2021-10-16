import React, {useState} from "react";
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
import { Box, Paper, InputBase } from "@material-ui/core";
import changeScratchPadTextInFirebase from "../../../../firebaseFunctions/changeScratchPadTextInFirebase"

const ScratchPadBody = () => {
  const classes = useStyles();
  const [value, setValue] = useState("helllo");

  const handleScratchpadChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
    changeScratchPadTextInFirebase(e.target.value);
  };

  return (
    <div>
      {/* <Box className={classes.outerBox}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">
            Scratchpad
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            //   value={values.amount}
            //   onChange={handleChange("amount")}
            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={80}
            multiline
            minRows={5}
            className={classes.textArea}
          />
        </FormControl>
      </Box> */}
      <Box>
        <Paper className={classes.outerPaper} elevation={9}>
          {/* <input type="text" className={classes.input} /> */}
          <Box className={classes.textAreaBox}>
            <InputBase
              id="standard-basic"
              value={value}
              className={classes.noteTitleInput}
              color="primary"
              multiline
              maxRows={9}
              autoFocus
              onChange={handleScratchpadChange}
            />
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default ScratchPadBody;
