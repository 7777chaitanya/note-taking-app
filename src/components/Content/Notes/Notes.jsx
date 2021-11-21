import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../../../contexts/NotesContext";
import TextEditor from "../TextEditor/TextEditor";
import useStyles from "./styles";
import { Box, Typography, List, ListItem, Divider, Card } from "@material-ui/core";
import EachNoteItem from "./EachNoteItem/EachNoteItem";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import { useHistory } from "react-router-dom";

const Notes = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { notes } = useContext(NotesContext);
  console.log("notes => ", notes);
  const params = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const notesToRender = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //   console.log("params => ",params.roomId)

  useEffect(() => {
    history.push(`/notes/${notesToRender[0]?.id}`);
  }, [searchTerm]);

 

  return (
    <div className={classes.root}>
      <Box className={classes.notesList}>
        <Typography variant="h5" align="center">
          All Notes
        </Typography>
        <Divider />
        {/* <SearchNoteField />
        <Divider /> */}
        <Box className={classes.boot}>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Search notes
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment position="end">
                  {searchTerm ? (
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                      onClick={() => setSearchTerm("")}
                    >
                      <CancelIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="toggle password visibility"
                      edge="end"
                    >
                      <SearchIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              }
              labelWidth={100}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </FormControl>
        </Box>
        <Divider />

        <Box className={classes.notesListBox}>
          {notesToRender.length !== 0 ?
          (<List>
            {notesToRender.map((eachNote) => (
              <ListItem onClick={() => setSearchTerm("")}>
                <EachNoteItem noteItem={eachNote} />
              </ListItem>
            ))}
          </List>) :
          (<Card className={classes.noNotes} elevation={3}>
            <Typography variant="h5" align="center">
              No Notes Found
              </Typography>
              </Card>)}
        </Box>
      </Box>
      <Box className={classes.editor}>
        <TextEditor roomId={params?.roomId} />
      </Box>
    </div>
  );
};

export default Notes;
