import React from "react";
import "../styles/Form.css";
import { BiCustomize, BiUndo } from "react-icons/bi";
import { FaRegEye, FaRegFolder } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiGoogleforms } from "react-icons/si";
import {  LiaRedoSolid, LiaUndoSolid } from "react-icons/lia";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
import TextEditorQuill from "./TextEditorQuill";
import { Link } from "react-router-dom";
const FormModel = () => {
  return (
    <div className="bg-head">
      <div className="create-form-header-div">
        <div className="header-icons-form">
          <IconContext.Provider value={{ color: "#7248B9", size: "40px" }}>
            <SiGoogleforms />
          </IconContext.Provider>
          <p>Untilted Form</p>
          <div className="form-icons-left">
        
          <IconContext.Provider value={{ color: "#5F6368", size: "20px" }}>
          <FaRegFolder />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#5F6368", size: "20px" }}>
          <IoIosStarOutline />
          </IconContext.Provider>
          </div>
        </div>
        <div className="form-icons-right">
        <IconContext.Provider value={{ color: "#5F6368", size: "20px",fontWeight:"700"}}>
          <FaRegEye />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#5F6368", size: "20px",fontWeight:"700"}}>
          <LiaUndoSolid />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#5F6368", size: "20px",fontWeight:"700"}}>
          <LiaRedoSolid />
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#5F6368", size: "20px",fontWeight:"700"}}>
          <CiMenuKebab />
          </IconContext.Provider>
          <button className="send-btn">Send</button>
         </div>
      </div>
      <div className="form-tab">
        <p>Questions</p>
       <Link to='/responses' className="response-lnk">Responses</Link>
        <p>Settings</p>
      </div>
    <div className="form-div">
      <form className="form-format">
<div className="untilted-head">
 <input type="text" placeholder="Untitled Form" className="untitled-input"/>
 <input type="text" placeholder="Form description" className="description-input"/>
 
</div>
      </form>
 </div>
    </div>
  );
};

export default FormModel;
