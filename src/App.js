import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import MainView from "./Components/MainView/MainView";
import Parteners from "./Components/Parteneri/Partners";
import Register from "./Components/Register/Register";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      {/* <Register /> */}
      <MainView />
      <Parteners />
    </div>
  );
};

export default App;
