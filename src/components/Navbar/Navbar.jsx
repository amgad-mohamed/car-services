import React from "react";
import "./Navbar.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import profile from "..//assests/portrait.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search or type" />
        </div>
      </div>
      <div className="right">
        <NotificationsOutlinedIcon />
        <img src={profile} alt="" />
      </div>
    </div>
  );
}

export default Navbar;