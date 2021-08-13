import React from "react";
import styles from "./SideDrawer.module.css";
import { NavbarData } from "../Data/NavbarData";
import NavbarItems from "../Items/NavbarItems";

const SideDrawer = (props) => {
  let drawerClasses = `${styles.side_drawer}`;
  if (props.show) {
    drawerClasses = `${styles.side_drawer} ${styles.open}`;
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <NavbarItems data={NavbarData} icons={1} />
      </ul>
    </nav>
  );
};

export default SideDrawer;
