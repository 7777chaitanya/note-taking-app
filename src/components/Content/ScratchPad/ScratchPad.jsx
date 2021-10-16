import { Typography, Box, Divider } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import ScratchPadBody from "./ScratchPadBody/ScratchPadBody";

const ScratchPad = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.homeHeader}>
        <Typography variant="h4" color="primary" display="inline">
          Scratch Pad
        </Typography>
        <Typography variant="body1" display="inline">
          {new Date().toDateString()}
        </Typography>
      </Box>

      <Divider className={classes.headerDivider} />

      <ScratchPadBody/>

     
    </div>
  );
};

export default ScratchPad;
