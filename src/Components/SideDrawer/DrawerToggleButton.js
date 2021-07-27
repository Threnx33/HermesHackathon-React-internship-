import React from "react";
import "./DrawerToggleButton.css";

const DrawerToggleButton = (props) => (
  <div onClick={props.click} className="container">
    <button className="toggle_button">
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
      <div className="toggle_button_line" />
    </button>
  </div>
);

export default DrawerToggleButton;
