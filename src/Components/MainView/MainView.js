import React, { useState, useLayoutEffect } from "react";
import styles from "./MainView.module.css";

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
    <div className={styles.first_div}>
      <div className={styles.items}>
        <img
          className={styles.logo_big}
          src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_400/v1626849856/Untitled_cyt1fm.png"
          alt="Logo Hermes mare"
        />
        <div className={styles.items2}>
          <p className={styles.time}>Începem curând</p>
          <button className={styles.btn_signup}>Înscrie-te</button>
        </div>
      </div>
      <img
        className={styles.image}
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,h_400/v1627373821/Image_trasparent_g90ds7.png"
        alt="Imagine Hackathon mare"
      />
    </div>
  );

  const MainViewMobile = () => (
    <div className={styles.first_div}>
      <img
        className={`${styles.logo_big} ${styles.flex_item}`}
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_400/v1626849856/Untitled_cyt1fm.png"
        alt="Logo Hermes mare"
      />
      <img
        className={`${styles.image} ${styles.flex_item}`}
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,h_400/v1627373821/Image_trasparent_g90ds7.png"
        alt="Imagine Hackathon mare"
      />
      <div className={styles.items}>
        <p className={`${styles.time} ${styles.flex_item}`}>Începem curând</p>
        <button className={`${styles.btn_signup} ${styles.flex_item}`}>
          Înscrie-te
        </button>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div className={styles.contain}>
        {ShowWindowDimensions() <= 768 ? MainViewMobile() : MainViewDesktop()}
      </div>
    </React.Fragment>
  );
};

export default MainView;
