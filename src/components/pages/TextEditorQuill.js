import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import "../styles/ReactQuill.css";
import ReactQuill from "react-quill";

const TextEditorQuill = () => {
  const [value, setValue] = useState("Untitled form"); // Track editor content
  const [sub, setSub] = useState("Form description");

  // Toolbar usestate
  const [isFocusedTitle, setIsFocusedTitle] = useState(false);
  const [isFocusedDescription, setIsFocusedDescription] = useState(false);

  // Corrected modules structure
  const titleModule = {
    toolbar: [
      ["bold", "italic", "underline"],
      // [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"], // remove formatting button
    ],
  };

    // Corrected Description structure
    const modules = {
      toolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"], // remove formatting button
      ],
    };
  // Update the value for the title field
  const handleChangeTitle = (content) => {
    setValue(content);
  };

  // Update the value for the description field
  const handleChangeDescription = (content) => {
    setSub(content);
  };

  return (
    <div>
      {/* React Quill Editor for title */}
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChangeTitle}
        className={ `custom-quill ${isFocusedTitle ? "focus" : ""} ` }
        onFocus={() => setIsFocusedTitle(true)}
        onBlur={() => setIsFocusedTitle(false)}
        modules={titleModule}
      />

      {/* React Quill Editor for description */}
      <ReactQuill
        theme="snow"
        value={sub}
        className={`custom-quill ${isFocusedDescription ? "focus" : ""}`}
        onChange={handleChangeDescription}
        onFocus={() => setIsFocusedDescription(true)}
        onBlur={() => setIsFocusedDescription(false)}
        modules={modules}
      />
    </div>
  );
};

export default TextEditorQuill;
