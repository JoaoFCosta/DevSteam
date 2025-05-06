import React from "react";

const Footer = () => {
  return (
      <footer className="pt-4 w-100 d-flex bg-dark justify-content-around align-items-center bottom-0">
        <div
          id="logo"
          role="button"
          className="d-flex align-items-center ms-5 pb-4"
        >
          <span className="fw-bold fs-3">DevSteam</span>
          <small>Powered by VoLvE</small>
        </div>
      </footer>
  );
};

export default Footer;
