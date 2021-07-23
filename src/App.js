import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import ImagineMare from "./Components/ImagineMare/ImagineMare";
import Parteneri from "./Components/Parteneri/Parteneri";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    const negateSideDrawerOpen = !sideDrawerOpen;
    setSideDrawerOpen(negateSideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div style={{ height: "100%" }}>
      <Navbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen ? <Backdrop click={backdropClickHandler} /> : null}
      <ImagineMare />
      <Parteneri />
      <main style={{ marginTop: "1000px" }}>
        {/* <p style={{ width: "90%", padding: "5%" }}>
          zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzDumnezeu e sus si
          vede
        </p> */}
        <p>Dumnezeu e sus si vede</p>
      </main>
    </div>
  );
};

export default App;

// const [windowWidth, setWindowWidth] = useState(0);
// let resizeWindow = () => {
//   setWindowWidth(window.innerWidth);
// };
// useEffect(() => {
//   resizeWindow();
//   window.addEventListener("resize", resizeWindow);
//   return () => window.removeEventListener("resize", resizeWindow);
// }, []);
// {windowWidth <= 768 + 14 ? (
//   <DrawerToggleButton click={drawerToggleClickHandler} />
// ) : (
//   <Navbar />
// )}
