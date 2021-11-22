import { useState, useEffect, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NotesContext } from "../../../contexts/NotesContext";
import changeNoteDocContent from "../../../firebaseFunctions/changeNoteDocContent";
import deleteNoteFromFirestore from "../../../firebaseFunctions/deleteNoteFromFirestore";
import addToTrashCollection from "../../../firebaseFunctions/addToTrashCollection";
import useStyles from "./styles";
import {
  Box,
  Typography,
  TextField,
  InputBase,
  IconButton,
  Button
} from "@material-ui/core";
import changeNoteDocTitle from "../../../firebaseFunctions/changeNoteDocTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";
import { DarkModeContext } from "../../../contexts/DarkModeContext";
import DarkModeEditor from "./DarkModeEditor/DarkModeEditor";
import LightModeEditor from "./LightModeEditor/LightModeEditor";

const TextEditor = ({ roomId }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const { notes } = useContext(NotesContext);
  const { darkMode } = useContext(DarkModeContext);
  const classes = useStyles();
  const history = useHistory();

  //   console.log("room Id in editor ",roomId);

  const handleChange = (value) => {
    console.log(value);
    setText(value);
    changeNoteDocContent(value, roomId);
    // this.setText(e.target.value)
  };

  const handleTitleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
    changeNoteDocTitle(e.target.value, roomId);
  };

  const handleDelete = () => {
    const noteToDelete = notes?.find((note) => note.id === roomId);
    addToTrashCollection(roomId, { ...noteToDelete });
    //  deleteNoteFromFirestore(roomId);

    // if (notes.length > 1) {
    //   history.push(`/notes/${notes[1].id}`);
    // }
    // if(notes.length===1){
    //   history.push("/home")
    // }
  };

  useEffect(() => {
    if (notes.length > 1) {
      history.push(`/notes/${notes[0].id}`);
    }
    if (notes.length === 0) {
      // history.push("/home");
    }
  }, [notes.length]);

  useEffect(() => {
    const note = notes.find((note) => note.id === roomId);
    setTitle(note?.title);
    setText(note?.content);
  }, [roomId]);

  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <Box className={classes.editorContainer}>
      <Box className={classes.noteTitleInputBox}>
        <InputBase
          id="standard-basic"
          value={title}
          className={classes.noteTitleInput}
          color="primary"
          onChange={handleTitleChange}
          placeholder="Title here..."
        />
        <Button color="primary" variant="outlined">
          Save
        </Button>
        <IconButton onClick={handleDelete}>
          <DeleteIcon color="primary" className={classes.noteDeleteIcon} />
        </IconButton>
      </Box>
      {/* <ReactQuill value={text} onChange={handleChange} /> */}
        {!darkMode ? (
          <LightModeEditor text={text} handleChange={handleChange} />
        ) : (
          <DarkModeEditor text={text} handleChange={handleChange} />
        )}
    </Box>
  );
};

export default TextEditor;
