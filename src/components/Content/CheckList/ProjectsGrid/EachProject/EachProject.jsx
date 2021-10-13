import React from "react";
import useStyles from "./styles";
import { Paper, Divider, Typography, IconButton, Box, Tooltip } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import TodoItemsCheckList from "./TodoItemsCheckList/TodoItemsCheckList";

const EachProject = ({ eachProject }) => {
  const classes = useStyles();

  return (
    <Paper elevation={6} className={classes.root}>
      <Box className={classes.headerBox}>
        <Typography color="primary" variant="h5" align="center">
          {eachProject?.name}
          <Tooltip title="Add item">
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          </Tooltip>
        </Typography>
      </Box>

      <Divider className={classes.divider} />
      <TodoItemsCheckList />
    </Paper>
  );
};

export default EachProject;
