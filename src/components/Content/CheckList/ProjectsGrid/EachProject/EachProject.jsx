import React from "react";
import useStyles from "./styles";
import { Paper, Divider , Typography} from "@material-ui/core";

const EachProject = () => {
  const classes = useStyles();

  return (
    <Paper elevation={6} className={classes.root}>
      <Typography color="primary" variant="h5" align="center">heading</Typography>
    <Divider className={classes.divider} />
    hello
    </Paper>
  );
};

export default EachProject;
