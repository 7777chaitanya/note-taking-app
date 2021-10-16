import { Grid, Paper, Typography, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { NotesContext } from "../../../../contexts/NotesContext";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";

const HomeNotesGrid = () => {
  const classes = useStyles();
  const { notes } = useContext(NotesContext);
  const history = useHistory();

  const handleNotePaperClick = (eachNote) => {
    console.log("eachnnnnote=>", eachNote.id);
    history.push(`/notes/${eachNote.id}`);
  };

  return (
    <Grid container spacing={1} className={classes.homeNotesCardsGrid}>
      {notes.map((eachNote) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          onClick={() => handleNotePaperClick(eachNote)}
        >
          <Paper className={classes.eachNotePaper} elevation={5}>
            <Box className={classes.eachNoteBox}>
              <Typography color="primary" variant="h6" align="center">
                {eachNote.title}
              </Typography>
              <Divider className={classes.divider} />
              <p dangerouslySetInnerHTML={{ __html: eachNote.content }} />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeNotesGrid;
