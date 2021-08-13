import React from "react";
import styles from "./DrawerToggleButton.module.css";

const DrawerToggleButton = (props) => (
  <div onClick={props.click} className={styles.container}>
    <button className={styles.toggle_button}>
      <div className={styles.toggle_button_line} />
      <div className={styles.toggle_button_line} />
      <div className={styles.toggle_button_line} />
    </button>
  </div>
);

export default DrawerToggleButton;
