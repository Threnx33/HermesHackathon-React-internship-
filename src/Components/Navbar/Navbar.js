import React from "react";
import styles from "./Navbar.module.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavbarData } from "../Data/NavbarData";
import NavbarItems from "../Items/NavbarItems";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <div className={styles.navbar_toggle_button}>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className={styles.navbar}>
        <nav className={styles.navbar_navigation}>
          <div className={styles.navbar_logo}>
            <a href="/">
              <img
                src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_82/v1627030543/HermesWhiTee_ityapw.png"
                alt="Logo Hermes"
              />
            </a>
          </div>
          <div className={styles.spacer} />
          <div className={styles.navbar_navigation_items}>
            <ul>
              <NavbarItems data={NavbarData} />
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
