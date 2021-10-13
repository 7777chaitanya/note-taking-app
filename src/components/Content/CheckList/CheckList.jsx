import React from "react";
import { Box, Divider, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
// import EachProject from "./ProjectsGrid/EachProject/EachProject";
import ProjectsGrid from "./ProjectsGrid/ProjectsGrid";
import Popover from "@material-ui/core/Popover";
import AddProjectPopover from "./AddProjectPopover/AddProjectPopover";

const CheckList = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };



  return (
    <div>
      <Box className={classes.headerBox}>
        <Typography variant="h4" color="primary">
          Project Checklist
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<LibraryAddIcon />}
          onClick={handleClick}
        >
          Add Project
        </Button>
      </Box>
      <Divider className={classes.divider} />
      <ProjectsGrid />
      {/* <EachProject/> */}

      <AddProjectPopover anchorEl={anchorEl}
        handleClose={handleClose}/>

      
    </div>
  );
};

export default CheckList;
