import React from "react";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10   rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover ">Privacy Policy </a>
          <a className="link link-hover">Terms of Use </a>
          <a className="link link-hover">Sales and Refunds </a>
          <a className="link link-hover">Legal </a>
          <a className="link link-hover font-bold">About </a>
          <a className="link link-hover font-bold">Schedules </a>
          <a className="link link-hover font-bold">Pricing </a>
          <a className="link link-hover font-bold">Membership </a>
          <a className="link link-hover font-bold" >Joins</a>
          {/* <Link to="/about">Joins</Link> */}
          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
