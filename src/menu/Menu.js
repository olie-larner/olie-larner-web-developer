import React, { useState, useEffect } from "react";
import classnames from "classnames";

const Menu = ({ isOpen, isMenuOpen }) => {
  const onLinkSelect = () => {
    isMenuOpen(false);
  };

  return (
    <div
      className={classnames(
        "overflow-hidden bg-gray-800 font-white fixed text-white z-40 flex items-center justify-center transition-all duration-700",
        {
          "w-full h-screen rounded-none top-0 right-0": isOpen,
          "w-0 h-0 rounded-full top-5 right-5": !isOpen,
        }
      )}
    >
      <ul
        className={classnames("transition-all duration-400 font-playfair", {
          "opacity-100 delay-700": isOpen,
          "opacity-0 delay-0": !isOpen,
        })}
      >
        <li>
          <a href="#skills" onClick={onLinkSelect}>
            Skills
          </a>
        </li>
        <li>
          <a href="#previous-projects" onClick={onLinkSelect}>
            Previous Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onLinkSelect}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
