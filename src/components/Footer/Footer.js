import React from "react";
import logo from "../../assets/images/Logo.png";
import mail from "../../assets/images/mail.png";
import classes from "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className={classes.newsLetter}>
        <img src={logo} alt="Ment Logo" />
        <p>
          sign up our newsletter <img src={mail} alt="Ment Logo" />
        </p>
      </div>
      <div className={classes.bottomFooter}>
        <p className={classes.copyRights}>
          <i className="far fa-copyright" />
          2018 Ment. Designed by Omar Zikry
        </p>
        <div className={classes.socials}>
          <a
            href="https://www.facebook.com/OmarZikryDeveloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square" />
          </a>
          <a
            href="https://www.instagram.com/omar_zikry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://omarzikry.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube" />
          </a>
          <a
            href="https://twitter.com/realOmarZikry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
