import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10   rounded">
        <nav className="lg:grid lg:grid-flow-col gap-4">
          <div>
          <a className="link link-hover pe-2" href="#privacy Policy">Privacy Policy </a>
          <a className="link link-hover pe-2" href="Terms of Use ">Terms of Use </a>
          <a className="link link-hover pe-2" href="Sales and Refunds">Sales and Refunds </a>
          <a className="link link-hover pe-2" href="Legal">Legal </a>
          </div>
          <div>
           <a className="link link-hover font-bold pe-2" href="About">About </a>
           <a className="link link-hover font-bold pe-2" href="Schedules">Schedules </a>
           <a className="link link-hover font-bold pe-2" href="Pricing">Pricing </a>
           <a className="link link-hover font-bold pe-2" href="Membership">Membership </a>
           <a className="link link-hover font-bold pe-2" href="Joins" >Joins</a>
          </div>
          
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
