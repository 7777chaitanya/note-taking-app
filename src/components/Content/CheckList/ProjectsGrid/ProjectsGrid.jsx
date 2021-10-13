import React from "react";
import EachProject from "./EachProject/EachProject";
import {Grid} from "@material-ui/core";

const ProjectsGrid = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <EachProject />
      </Grid>
    </Grid>
  );
};

export default ProjectsGrid;
