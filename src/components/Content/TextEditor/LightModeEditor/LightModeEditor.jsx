import React, { useEffect } from "react";
import ReactQuill from "react-quill";
// import "./styles1.css";
// import useStyles from "./styles";
import  clsx  from 'clsx';

const LightModeEditor = ({ text, handleChange }) => {
  console.log("light mode editor");
  // const classes = useStyles();

  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      placeholder="Start typing..."
      key="1"
      // className={clsx(
      //   classes["ql-toolbar"], 
      //   classes["ql-snow"], 
      //   classes["ql-stroke"], 
      //   classes["ql-fill"]
      //   )}
      
      // className={clsx("ql-toolbar", "ql-snow", "ql-stroke", "ql-fill")}
    />
  );
};

export default LightModeEditor;
