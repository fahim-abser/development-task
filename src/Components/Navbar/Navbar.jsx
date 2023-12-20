import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="list-item">
          <a href="#home">Home</a>
        </li>
        <li className="list-item">
          <a href="#about">About</a>
        </li>
        <li className="list-item">
          <a href="#schedules">Schedules</a>
        </li>
        <li className="list-item">
          <a href="#membership">Membership</a>
        </li>
        <li className="list-item">
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
      <div className="nav-login">
        <a href="#offers" className="">
          Offers
        </a>
        <button className="btn px-9  bg-orange-600 border-none text-white rounded-full">
          Courses
        </button>
      </div>
      <div className="nav-smallScreen">
        <GiHamburgerMenu
          className="hamburgerMenu"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="nav-overlay">
            <MdOutlineRestaurantMenu
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="nav-smallScreen-links">
              <li className="list-item">
                <a href="#home">Home</a>
              </li>
              <li className="list-item">
                <a href="#about">About</a>
              </li>
              <li className="list-item">
                <a href="#schedules">Schedules</a>
              </li>
              <li className="list-item">
                <a href="#membership">Membership</a>
              </li>
              <li className="list-item">
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
