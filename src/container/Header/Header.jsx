import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";
const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key to Your Fine Dining</h1>
        <p className="p__opensans app__header-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolores
          expedita asperiores nemo, laboriosam omnis et itaque doloribus odit
          porro alias
        </p>
        <button className="custom__button header__button">Explore Now</button>
      </div>
      <div className="app__wrapper_img"> <img src={images.welcome} alt="welcome" className="welcome__img" /></div>
     
    </div>
  );
};

export default Header;
