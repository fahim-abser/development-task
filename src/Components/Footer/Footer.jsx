import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10   rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover " href="#privacy Policy">Privacy Policy </a>
          <a className="link link-hover" href="Terms of Use ">Terms of Use </a>
          <a className="link link-hover" href="Sales and Refunds">Sales and Refunds </a>
          <a className="link link-hover" href="Legal">Legal </a>
          <a className="link link-hover font-bold" href="About">About </a>
          <a className="link link-hover font-bold" href="Schedules">Schedules </a>
          <a className="link link-hover font-bold" href="Pricing">Pricing </a>
          <a className="link link-hover font-bold" href="Membership">Membership </a>
          <a className="link link-hover font-bold" href="Joins" >Joins</a>
          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
