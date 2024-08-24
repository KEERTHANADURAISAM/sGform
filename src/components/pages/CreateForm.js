import React from "react";
import { FaFolder, FaTableList } from "react-icons/fa6";
import Header from "./Header";
import "../styles/CreateForm.css";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { IconContext } from "react-icons";

const CreateForm = () => {
  return (
    <div>
      <Header />
      <div className="form-head-flex">
        <p>Recent Forms</p>
        <span>Owned by anyone</span>
        <div className="form-icon">
        <IconContext.Provider value={{ color: "#5F6368", size: "1.5rem" }}>
          <FaTableList />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#5F6368", size: "1.5rem" }}>
          <RiSortAlphabetAsc />
        </IconContext.Provider> 
        <IconContext.Provider value={{ color: "#5F6368", size: "1.5rem" }}>
          <FaFolder />
        </IconContext.Provider>
       
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
