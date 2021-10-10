import { useState, useEffect, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { NotesContext } from "../../../contexts/NotesContext";
import changeNoteDocContent from "../../../firebaseFunctions/changeNoteDocContent";

const TextEditor = ({ roomId }) => {
  const [text, setText] = useState("");
  const { notes } = useContext(NotesContext);

  //   console.log("room Id in editor ",roomId);

  const handleChange = (value) => {
    console.log(value);
    setText(value);
    changeNoteDocContent(value, roomId);
    // this.setText(e.target.value)
  };

  useEffect(() => {
     const note =  notes.find(note => note.id === roomId)
    setText(note?.content);
  }, [roomId]);

  return <ReactQuill value={text} onChange={handleChange} />;
};

export default TextEditor;
