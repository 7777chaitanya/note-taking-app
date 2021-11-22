import React, { useEffect } from "react";
import ReactQuill from "react-quill";
import "../styles.css";

const LightModeEditor = ({ text, handleChange }) => {
  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      placeholder="Start typing..."
      key="1"
    />
  );
};

export default LightModeEditor;
