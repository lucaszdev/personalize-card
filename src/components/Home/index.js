import React, { useContext } from "react";
import "react-icons/ri";

import "./styles.css";

import LogoImg from "../../assets/Logo.png";
import { ThemeContext } from "styled-components";

export default function Home({ toogleTheme }) {
  const { title } = useContext(ThemeContext);
  return (
    <section className="home section" id="home">
      <div className="homeContainer container">
        <i
          className={
            title === "light"
              ? "ri-moon-line change-theme"
              : "ri-sun-line change-theme"
          }
          id="theme-button"
          onClick={toogleTheme}
        />
        <img src={LogoImg} className="homeImg" alt="Logo personalize" />
        <h2 className="homeTitle">SEU COMERCIO ON-LINE!</h2>
        <p className="homeDescription">GRÁFICA DIGITAL</p>
        <div className="homeButtons">
          <a href="/#" className="button">
            <i className="ri-whatsapp-line"></i>
          </a>
          <a href="/#" className="button">
            <i className="ri-map-pin-line"></i>
          </a>
          <a href="/#" className="button">
            <i className="ri-instagram-line"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
