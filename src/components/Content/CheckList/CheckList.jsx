import React from "react";
import { Box, Divider, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
// import EachProject from "./ProjectsGrid/EachProject/EachProject";
import ProjectsGrid from "./ProjectsGrid/ProjectsGrid";


const CheckList = () => {
  const classes = useStyles();
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
        >
          Add Project
        </Button>
      </Box>
      <Divider className={classes.divider} />
      <ProjectsGrid />
      {/* <EachProject/> */}
    </div>
  );
};

export default CheckList;
