import { useContext } from "react";
import EachProject from "./EachProject/EachProject";
import { Grid, Card, Typography } from "@material-ui/core";
import { ProjectsContext } from "../../../../contexts/ProjectsContext";
import useStyles from "./styles";

const ProjectsGrid = () => {
  const classes = useStyles();
  const { project } = useContext(ProjectsContext);
  console.log("projectsfjdfkjdlkfjasdk", project);

  return project.length ? (
    <Grid container spacing={6} className={classes.cardItemsGrid}>
      {project.map((eachProject) => (
        <Grid item xs={6} sm={6} md={6} lg={4} key={eachProject.id}>
          <EachProject eachProject={eachProject} />
          {/* <EachProject /> */}
        </Grid>
      ))}
    </Grid>
  ) : (
    <Card elevation={5} className={classes.noProjects}>
      <Typography variant="h4">You have no projects to show.</Typography>
      {/* <Typography variant="h5">
        Create a new project by clicking on the button on the top-right corner
      </Typography> */}
    </Card>
  );
};

export default ProjectsGrid;
