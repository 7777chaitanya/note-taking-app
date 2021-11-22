import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "../styles.css";

const DarkModeEditor = ({ text, handleChange }) => {
  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      placeholder="Start typing..."
      key="2"
    />
  );
};

export default DarkModeEditor;
