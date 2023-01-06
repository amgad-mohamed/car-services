import React from "react";
import "./Sidebar.scss";
import BrandLogo from "..//assests/BrandLogo.png";
import {
  HomeIcon,
  LayoutIcon,
  CalendarIcon,
  InvoiceIcon,
  UserIcon,
  RolesIcon,
  PagesIcon,
  AuthIcon,
  WizardIcon,
  ModalIcon,
} from "./Icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <span className="logo">
          <img src={BrandLogo} alt="Brand logo" />
        </span>
        <span className="app__brand__text">Motiv.</span>
        <div className="menu">
          <div className="item">
            <HomeIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Dashboards</span>
          </div>
          <div className="item">
            <LayoutIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Assets</span>
          </div>
          <div className="item">
            <CalendarIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Booking</span>
          </div>
          <div className="item">
            <InvoiceIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Sell Cars</span>
          </div>
          <div className="item">
            <UserIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Buy Cars</span>
          </div>
          <div className="item">
            <RolesIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Services</span>
          </div>
          <div className="item">
            <PagesIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Calender</span>
          </div>
          <div className="item">
            <AuthIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Messages</span>
          </div>
        </div>
        <div className="under-slider">
          <div className="item">
            <WizardIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Settings</span>
          </div>
          <div className="item">
            <ModalIcon style={{ color: "#5F6165" }} />
            <span className="items-name">Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;