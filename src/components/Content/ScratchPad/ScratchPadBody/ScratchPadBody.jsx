import React, { useState, useContext } from "react";
import useStyles from "./styles";
import { Box, Paper, InputBase } from "@material-ui/core";
import changeScratchPadTextInFirebase from "../../../../firebaseFunctions/changeScratchPadTextInFirebase";
import { ScratchPadContext } from "../../../../contexts/ScratchPadContext";

const ScratchPadBody = () => {
  const classes = useStyles();
  const [value, setValue] = useState("helllo");
  const { scratchPad } = useContext(ScratchPadContext);

  const handleScratchpadChange = (e) => {
    setValue(e.target.value);
    changeScratchPadTextInFirebase(e.target.value);
  };

  return (
    <div>
      <Box>
        <Paper className={classes.outerPaper} elevation={9}>
          {/* <input type="text" className={classes.input} /> */}
          <Box className={classes.textAreaBox}>
            <InputBase
              id="standard-basic"
              value={scratchPad.content}
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
