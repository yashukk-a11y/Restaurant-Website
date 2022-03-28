import React from "react";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding app__bg" >
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Shree Krishna Colony , Attabira , Bargarh , Odisha
        </p>
        <p className="p__opensans">+91 8144110261</p>
        <p className="p__opensans">+91 9776948724</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer" />
        <p className="p__opensans">
          {" "}
          "The best way to find yourself in the service of others"{" "}
        </p>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">
          Monday-Friday
        </p>
        <p className="p__opensans">10:00 AM - 10:00 PM</p>
        <p className="p__opensans">Saturday-Sunday</p>
        <p className="p__opensans">10:00 AM - 02:00 PM</p>
      </div>
    </div>
    <div className="app__footer__copyright">
      <p className="p__opensans"> 2022 Food Bonanza . All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
