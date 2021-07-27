import React from "react";
import "./SideDrawer.css";
import { NavbarData } from "../Data/NavbarData";
import NavbarItems from "../Items/NavbarItems";

const SideDrawer = (props) => {
  let drawerClasses = "side_drawer";
  if (props.show) {
    drawerClasses = "side_drawer open";
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
