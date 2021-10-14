import React, {useEffect, useContext, useState} from "react";
import useStyles from "./styles";
import { Paper, Divider, Typography, IconButton, Box, Tooltip } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import addItemToTodoList from "../../../../../firebaseFunctions/addItemToTodoList"

import TodoItemsCheckList from "./TodoItemsCheckList/TodoItemsCheckList";
import AddTodoItemPopover from "./AddTodoItemPopover/AddTodoItemPopover";
import { ProjectsContext } from "../../../../../contexts/ProjectsContext";

const EachProject = ({ eachProject }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [recall, setRecall] = useState(true)

  const {project} = useContext(ProjectsContext);

  useEffect(() => {
    setRecall(p=>!p);
 }, [project])

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const open = anchorEl;
  const id = open ? 'simple-popover' : undefined;
 

  return (
    <Paper elevation={6} className={classes.root}>
      <Box className={classes.headerBox}>
        <Typography color="primary" variant="h5" align="center">
          {eachProject?.name}
          <Tooltip title="Add item">
          {/* <IconButton onClick={()=> addItemToTodoList(eachProject.id)}> */}
          <IconButton onClick={handleClick}>

            <AddCircleIcon />
          </IconButton>
          </Tooltip>
        </Typography>
      </Box>

      <Divider className={classes.divider} />
      <TodoItemsCheckList eachProject={eachProject} />

      <AddTodoItemPopover anchorEl={anchorEl} handleClose={handleClose} eachProject={eachProject}/>

    


    </Paper>
  );
};

export default EachProject;