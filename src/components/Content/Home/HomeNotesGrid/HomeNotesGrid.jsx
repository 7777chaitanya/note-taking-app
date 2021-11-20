import { Grid, Paper, Typography, Box } from "@material-ui/core";
import React, { useContext } from "react";
import { NotesContext } from "../../../../contexts/NotesContext";
import returnStyles from "./styles";
import { useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";
import truncate from "../../../../utils/truncate"
import { DarkModeContext } from "../../../../contexts/DarkModeContext";

const HomeNotesGrid = () => {
  const { notes } = useContext(NotesContext);
  const {darkMode} = useContext(DarkModeContext);
  const classes = returnStyles(darkMode)();
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
          xs={6}
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
              <p dangerouslySetInnerHTML={{ __html: truncate(eachNote.content) }} />
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeNotesGrid;
