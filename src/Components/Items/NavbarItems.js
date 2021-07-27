import React from "react";

const NavbarItems = (props) =>
  props.data.map((val, key) => (
    <li
      key={key}
      onClick={() => {
        window.location.pathname = val.link;
      }}
    >
      <div className="icon">{props.icons && val.icon}</div>
      <div className="title">{val.title}</div>
    </li>
  ));

export default NavbarItems;
