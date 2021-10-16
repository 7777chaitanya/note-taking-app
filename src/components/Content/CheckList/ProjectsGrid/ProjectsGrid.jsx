import {useContext} from "react";
import EachProject from "./EachProject/EachProject";
import {Grid} from "@material-ui/core";
import { ProjectsContext } from '../../../../contexts/ProjectsContext';
import useStyles from "./styles";

const ProjectsGrid = () => {
  const classes = useStyles();
  const {project} = useContext(ProjectsContext);
  console.log("projectsfjdfkjdlkfjasdk", project)
  return (
    <Grid container spacing={6} className={classes.cardItemsGrid}>
      {project.map(eachProject=> 
      <Grid item xs={6} sm={6} md={6} lg={4} key={eachProject.id}>
        <EachProject eachProject={eachProject}/>
        {/* <EachProject /> */}

      </Grid>)
}
    </Grid>
  );
};

export default ProjectsGrid;
