import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "./styles2.css";

const DarkModeEditor = ({ text, handleChange }) => {
  console.log("dark mode editor");

  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      placeholder="Start typing n darkmode..."
      key="2"
    />
  );
};

export default DarkModeEditor;
