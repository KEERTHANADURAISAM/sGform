import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import '../styles/ReactQuill.css';

const TextEditorQuill = () => {
  const [value, setValue] = useState("Untitled form"); // Track editor content
  const [sub, setSub] = useState("Form description"); 
  const [showToolbar, setShowToolbar] = useState(false); // Track toolbar visibility



  // Conditionally apply the modules with or without toolbar
  const modules = {
    toolbar: showToolbar
      ? [
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          ["clean"], // remove formatting button
        ]
      : false, // Hide toolbar initially
  };

  return (
    <div>
      {/* React Quill Editor */}
      <ReactQuill
        theme="snow"
        value={value}
        // onChange={handleChange}
        modules={modules} // Conditionally show or hide toolbar
      />
       <ReactQuill
        theme="snow"
        value={sub}
        // onChange={handleChange}
        modules={modules} // Conditionally show or hide toolbar
      />
    </div>
  );
};

export default TextEditorQuill;
