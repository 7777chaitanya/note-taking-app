import React, { useRef, useState } from "react";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import addItemToTodoList from "../../../../../../../firebaseFunctions/addItemToTodoList";

const AddProjectPopOverBody = ({ handleClose, eachProject }) => {
  const classes = useStyles();
  const projectNameRef = useRef(null);

  const [projectName, setProjectName] = useState("");

  const handleChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCreateNewProject = (e) => {
    e.preventDefault()
    // addNewProject(projectName);
    addItemToTodoList(eachProject.id, projectName)
    handleClose();
  };

  return (
    <div>
      <form action="submit" onSubmit={handleCreateNewProject}>
        <Paper elevation={9} className={classes.root}>
          {/* <Typography>The content of the Popover.hdfaflsk</Typography> */}
          <TextField
            id="outlined-basic"
            label="Task name"
            variant="outlined"
            inputRef={projectNameRef}
            onChange={handleChange}
            value={projectName}
            autoFocus
          />
          <Button
            color="primary"
            variant="contained"
            disabled={!projectName}
            onClick={handleCreateNewProject}
            type="submit"
          >
            Add Task
          </Button>
          <Button color="secondary" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default AddProjectPopOverBody;
