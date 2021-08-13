import React from "react";
import styles from "./NavbarItems.module.css";

const NavbarItems = (props) =>
  props.data.map((val, key) => (
    <li
      key={key}
      onClick={() => {
        window.location.pathname = val.link;
      }}
    >
      <div className={styles.icon}>{props.icons && val.icon}</div>
      <div className={styles.title}>{val.title}</div>
    </li>
  ));

export default NavbarItems;
