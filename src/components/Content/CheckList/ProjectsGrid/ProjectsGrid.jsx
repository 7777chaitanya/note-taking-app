import {useContext} from "react";
import EachProject from "./EachProject/EachProject";
import {Grid} from "@material-ui/core";
import { ProjectsContext } from '../../../../contexts/ProjectsContext';

const ProjectsGrid = () => {
  const {project} = useContext(ProjectsContext);
  console.log("projectsfjdfkjdlkfjasdk", project)
  return (
    <Grid container spacing={6}>
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
