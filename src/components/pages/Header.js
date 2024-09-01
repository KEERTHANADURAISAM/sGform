import React from "react";
import { SiGoogleforms } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-div">
      <div className="header-sub-flex-div">
        <IconContext.Provider value={{ size: "25px" }}>
          <MdOutlineMenu className="menu-item" />
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#7248B9", size: "40px" }}>
          <SiGoogleforms />
        </IconContext.Provider>
        <span className="form-head-span">Forms</span>
      </div>
      <div>
        <input placeholder="Search" className="input-seacrh-box" />
        <IoSearchSharp className="serach-icon" />
      </div>
      <div className="email-letter">
        <span>T</span>
      </div>
    </div>
  );
};

export default Header;
