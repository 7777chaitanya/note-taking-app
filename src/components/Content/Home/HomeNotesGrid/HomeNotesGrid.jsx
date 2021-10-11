import { Grid, Paper, Typography } from "@material-ui/core";
import React, {useContext} from "react";
import { NotesContext } from "../../../../contexts/NotesContext";
import useStyles from "./styles";
import {useHistory} from "react-router-dom";

const HomeNotesGrid = () => {
  const classes = useStyles();
  const { notes } = useContext(NotesContext);
  const history = useHistory();

  const handleNotePaperClick = (eachNote) => {
      console.log('eachnnnnote=>', eachNote.id)
history.push(`/notes/${eachNote.id}`);
  }

  return (

    <Grid container spacing={1}>
      {notes.map((eachNote) => (
        <Grid item xs={12} sm={6} md={4} onClick={()=>handleNotePaperClick(eachNote)}>
          <Paper className={classes.eachNotePaper} elevation={5}>
              <Typography color="primary" variant="h6" align="center">{eachNote.title}</Typography>
              {eachNote.content}
            </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeNotesGrid;