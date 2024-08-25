import React from "react";
import "../styles/Form.css";
import { BiCustomize, BiUndo } from "react-icons/bi";
import { FaRegEye, FaRegFolder } from "react-icons/fa";
import { IconContext } from "react-icons";
import { SiGoogleforms } from "react-icons/si";
import { LiaRedoSolid, LiaUndoSolid } from "react-icons/lia";
import { CiMenuKebab } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";
const FormModel = () => {
  return (
    <div>
      <div create-form-header-div>
        <div>
          <IconContext.Provider value={{ color: "#7248B9", size: "40px" }}>
            <SiGoogleforms />
          </IconContext.Provider>
          <p>Untilted Form</p>
          <FaRegFolder />
          <IoIosStarOutline />
        </div>
        <div>
          <BiCustomize />
          <FaRegEye />
          <LiaUndoSolid />
          <LiaRedoSolid />
          <button>Send</button>
          <CiMenuKebab />
        </div>
      </div>
      <div>
        <p>Questions</p>
        <p>Responses</p>
        <p>Settings</p>
      </div>
    </div>
  );
};

export default FormModel;
