import React, { useState, useLayoutEffect } from "react";
import "./MainView.css";

const MainView = () => {
  function useWindowSize() {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  function ShowWindowDimensions(props) {
    const width = useWindowSize();
    return width;
  }

  const MainViewDesktop = () => (
    <div className="first_div">
      <div className="items">
        <img
          className="logo_big"
          src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_400/v1626849856/Untitled_cyt1fm.png"
          alt="Logo Hermes mare"
        />
        <p className="time">Începem curând</p>
        <button
          className="btn_signup"
          onClick={() => {
            alert("Esti bagabooont!🌿⚗️");
          }}
        >
          Înscrie-te
        </button>
      </div>
      <img
        className="image"
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,h_400/v1627373821/Image_trasparent_g90ds7.png"
        alt="Imagine Hackathon mare"
      />
    </div>
  );

  const MainViewMobile = () => (
    <div className="first_div">
      <img
        className="logo_big flex_item"
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_400/v1626849856/Untitled_cyt1fm.png"
        alt="Logo Hermes mare"
      />
      <img
        className="image flex_item"
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,h_400/v1627373821/Image_trasparent_g90ds7.png"
        alt="Imagine Hackathon mare"
      />
      <div className="items">
        <p className="time flex_item">Începem curând</p>
        <button
          className="btn_signup flex_item"
          onClick={() => {
            alert("Esti bagabooont!🌿⚗️");
          }}
        >
          Înscrie-te
        </button>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className="contain">
        {ShowWindowDimensions() <= 768 ? MainViewMobile() : MainViewDesktop()}
      </div>
    </React.Fragment>
  );
};

export default MainView;
