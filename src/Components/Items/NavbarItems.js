import React from "react";

const navbarItems = (props) =>
  props.data.map((val, key) => (
    <li
      key={key}
      onClick={() => {
        window.location.pathname = val.link;
      }}
    >
      <div className="icon">{props.iconite && val.icon}</div>
      <div className="title">{val.title}</div>
    </li>
  ));

export default navbarItems;
