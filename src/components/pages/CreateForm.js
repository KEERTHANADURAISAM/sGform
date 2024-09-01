import React from "react";
import { FaFolder, FaTableList } from "react-icons/fa6";
import Header from "./Header";
import "../styles/CreateForm.css";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { IconContext } from "react-icons";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const CreateForm = () => {
  return (
    <div>
      <Header />
      <div className="form-head-flex">
        <p className="recent-form">Recent Forms</p>

        <div>
          <select name="cars" id="cars" className="select-form">
            <option value="Owned by anyone">Owned by anyone</option>
            <option value="Owned by me">Owned by me</option>
            <option value="Not owned by me">Not owned by me</option>
          </select>
        </div>
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
      <div className="no-forms-div">
        <h3 className="no-forms-p">No forms yet</h3>
        <br></br>
        <div className="no-forms-p">
          <div className="no-forms-p">
            Select a blank form or choose another template above to get started
          </div>
        </div>
      </div>
      <div className="create-plus">
        <IconContext.Provider value={{ color: "#5F6368", size: "3rem" }}>
          <Link to="/formcreation">
            <FiPlus />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default CreateForm;
