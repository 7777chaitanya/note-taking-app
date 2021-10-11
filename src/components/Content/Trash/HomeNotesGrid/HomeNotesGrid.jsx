import {
  Grid,
  Paper,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@material-ui/core";
import React, { useContext } from "react";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";
import { TrashNotesContext } from "../../../../contexts/TrashNotesContext";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import RestoreIcon from "@material-ui/icons/Restore";

const HomeNotesGrid = () => {
  const classes = useStyles();
  const { trashNotes } = useContext(TrashNotesContext);
  const history = useHistory();

  const handleNotePaperClick = (eachNote) => {
    console.log("eachnnnnote=>", eachNote.id);
    history.push(`/notes/${eachNote.id}`);
  };

  return (
    <Grid container spacing={1}>
      {trashNotes.map((eachNote) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          onClick={() => handleNotePaperClick(eachNote)}
        >
          <Paper className={classes.eachNotePaper} elevation={5}>
            <Typography color="primary" variant="h6" align="center">
              {eachNote.title}
            </Typography>
            <Box className={classes.contentBox}>{eachNote.content}</Box>
            <Divider />
            <Box className={classes.footerBox}>
              <IconButton>
                <DeleteForeverIcon />
              </IconButton>
              <IconButton>
                <RestoreIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default HomeNotesGrid;
