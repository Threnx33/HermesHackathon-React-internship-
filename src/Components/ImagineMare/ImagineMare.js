import React from "react";
import "./ImagineMare.css";

const ImagineMare = () => (
  <div className="overlay">
    <div className="first_div">
      <img
        className="logo_mare"
        src="https://res.cloudinary.com/dorint/image/upload/c_scale,w_1024/v1626849856/Untitled_cyt1fm.png"
        alt="Logo Hermes mare"
      />
      <div className="items">
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
    </div>
  </div>
);

export default ImagineMare;
