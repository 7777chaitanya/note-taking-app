import { useContext } from "react";
import { NotesContext } from "../../../contexts/NotesContext";
import TextEditor from "../TextEditor/TextEditor";
import useStyles from "./styles";
import { Box, Typography, List, ListItem, Divider } from "@material-ui/core";
import EachNoteItem from "./EachNoteItem/EachNoteItem";

const Notes = () => {
  const classes = useStyles();
  const { notes } = useContext(NotesContext);
  console.log("notes => ", notes);
  return (
    <div className={classes.root}>
      <Box className={classes.notesList}>
          <Typography variant="h5" align="center">
              All Notes
          </Typography>
          <Divider/>
        <List>
          {notes.map((eachNote) => (
            <ListItem><EachNoteItem noteItem={eachNote}/></ListItem>
          ))}
          </List>
        
      </Box>
      <Box className={classes.editor}>
        <TextEditor />
      </Box>
    </div>
  );
};

export default Notes;
