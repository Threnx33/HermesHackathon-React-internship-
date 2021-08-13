import React, { useLayoutEffect, useState } from "react";
import styles from "./Register.module.css";

const Register = () => {
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

  const RegisterMobile = () => (
    <div className={styles.register_card}>
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_400/v1626849856/Untitled_cyt1fm.png"
        alt="Logo Hermes mare"
      />
      <label className={styles.label}>Input1:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input2:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input3:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input4:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input5:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input6:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input7:</label>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input8:</label>
      <input className={styles.field} type="text"></input>
      <button className={styles.button}>Înregistrează-te</button>
    </div>
  );

  const RegisterDesktop = () => (
    <div className={styles.register_card}>
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_400/v1626849856/Untitled_cyt1fm.png"
        alt="Logo Hermes mare"
      />
      <label className={styles.label}>Input1: </label>
      <label className={styles.label}>Input2: </label>
      <input className={styles.field} type="text"></input>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input3: </label>
      <label className={styles.label}>Input4: </label>
      <input className={styles.field} type="text"></input>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input5: </label>
      <label className={styles.label}>Input6: </label>
      <input className={styles.field} type="text"></input>
      <input className={styles.field} type="text"></input>
      <label className={styles.label}>Input7: </label>
      <label className={styles.label}>Input8: </label>
      <input className={styles.field} type="text"></input>
      <input className={styles.field} type="text"></input>
      <button className={styles.button}>Înregistrează-te</button>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>Înregistrare</div>
      {ShowWindowDimensions() <= 768 ? RegisterMobile() : RegisterDesktop()}
    </div>
  );
};

export default Register;
