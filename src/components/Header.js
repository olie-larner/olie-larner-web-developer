import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Menu from "../menu/Menu";

const Header = ({ title, projectsInView }) => {
  const [isOpen, setOpen] = useState(false);
  const [buttonColor, setButtonColor] = useState("#1f2937");

  useEffect(() => {
    if (isOpen) {
      setButtonColor("#FFFFFF");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY <= 200) {
        setButtonColor("#FFFFFF");
      }
      if (window.scrollY >= 200 && !projectsInView) {
        setButtonColor("#1f2937");
      }

      if (window.scrollY >= 200 && projectsInView) {
        setButtonColor("#FFFFFF");
      }
    });
  }, [isOpen, projectsInView]);

  const isMenuOpen = (menuOpen) => {
    setOpen(menuOpen);
  };

  return (
    <div className="fixed top-0 flex z-50 items-center w-full h-20">
      <h1
        className="w-10/12 sm:w-11/12 mx-auto text-2xl z-10 font-arastin_std transition-all"
        style={{ color: buttonColor }}
      >
        {title}
      </h1>
      <div className="z-50 ml-auto mr-5">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          duration={1}
          color={buttonColor}
        />
      </div>
      <Menu isOpen={isOpen} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
