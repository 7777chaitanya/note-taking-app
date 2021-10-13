import React, { useRef, useState } from "react";
import { Typography, Paper, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import addNewProject from "../../../../../firebaseFunctions/addNewProject";

const AddProjectPopOverBody = ({ handleClose }) => {
  const classes = useStyles();
  const projectNameRef = useRef(null);

  const [projectName, setProjectName] = useState("");

  const handleChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleCreateNewProject = (e) => {
    e.preventDefault()
    addNewProject(projectName);
    handleClose();
  };

  return (
    <div>
      <form action="submit" onSubmit={handleCreateNewProject}>
        <Paper elevation={9} className={classes.root}>
          {/* <Typography>The content of the Popover.hdfaflsk</Typography> */}
          <TextField
            id="outlined-basic"
            label="Project name"
            variant="outlined"
            inputRef={projectNameRef}
            onChange={handleChange}
            value={projectName}
          />
          <Button
            color="primary"
            variant="contained"
            disabled={!projectName}
            onClick={handleCreateNewProject}
            type="submit"
          >
            Create Project
          </Button>
          <Button color="secondary" variant="contained">
            Cancel
          </Button>
        </Paper>
      </form>
    </div>
  );
};

export default AddProjectPopOverBody;
