import React from "react";
import styles from "./Partners.module.css";

const Parteners = () => (
  <React.Fragment>
    <p className={styles.parteners_title}>Parteneri</p>
    <div className={styles.partners}>
      <span className={`${styles.partner1} ${styles.box}`}></span>
      <span className={`${styles.partner2} ${styles.box}`}></span>
      <span className={`${styles.partner3} ${styles.box}`}></span>
    </div>
  </React.Fragment>
);

export default Parteners;
