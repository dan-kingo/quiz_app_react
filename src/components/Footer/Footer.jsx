import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        &copy;{new Date().getFullYear()} Dan-Kingo, Allrights Reserved!
      </footer>
    </div>
  );
};

export default Footer;
