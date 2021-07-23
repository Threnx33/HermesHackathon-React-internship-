import React from "react";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavbarData } from "../Data/NavbarData";
import NavbarItems from "../Items/NavbarItems";

//https://res.cloudinary.com/dorint/image/upload/c_scale,w_75/v1626970721/HermesFinal_ahwutx.png

const navbar = (props) => {
  return (
    <React.Fragment>
      <div className="navbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <header className="navbar">
        <nav className="navbar_navigation">
          <div className="navbar_logo">
            <a href="/">
              <img
                src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_82/v1627030543/HermesWhiTee_ityapw.png"
                alt="Logo Hermes"
              />
            </a>
          </div>
          <div className="spacer" />
          <div className="navbar_navigation-items">
            <ul>
              <NavbarItems data={NavbarData} />
            </ul>
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default navbar;
