import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#052747] text-[aliceblue] flex h-[200px] mt-10 bottom-0">
      <div className="flex flex-col text-white text-[20px] items-center justify-center mx-[30px]">
        <img
          src="images/ioh.jpg"
          className="flex items-center justify-center h-[80px] w-[250px]"
        />
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="flex flex-col text-white items-center text-[20px] mt-[50px] ml-6">
        <Link to="/buy">Buy</Link>
        <Link to="/resell">Resell</Link>
        <Link to="#">Learn</Link>
        <Link to="/in">Categories</Link>
      </div>
    </footer>
  );
}
export default Footer;
