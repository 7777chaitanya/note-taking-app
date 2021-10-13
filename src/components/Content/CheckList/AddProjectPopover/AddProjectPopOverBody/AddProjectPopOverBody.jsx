import React from "react";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";

const AddProjectPopOverBody = () => {
    const classes = useStyles();
  return (
    <div>
      <Paper elevation={9} className={classes.root}>
        {/* <Typography>The content of the Popover.hdfaflsk</Typography> */}
        <TextField id="outlined-basic" label="Project name" variant="outlined" />
        <Button color="primary" variant="contained">Create Project</Button>
        <Button color="secondary" variant="contained">Cancel</Button>



      </Paper>
    </div>
  );
};

export default AddProjectPopOverBody;
