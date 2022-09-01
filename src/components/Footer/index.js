import React from "react";
import "react-icons/ri";

import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerBg ">
        <div className="footerContainer container">
          <div>
            <h1 className="footerTitle">Gostou?!</h1>
            <p className="footerDescription">
              Garanta já seu card digital e dê um up <br /> em seu négocio.
            </p>
            <a href="/#" className="footerButton">
              Entrar em contato
            </a>
          </div>
          <a href="/#home" className="buttonFooterToHome">
            <i className="ri-arrow-up-s-line"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
