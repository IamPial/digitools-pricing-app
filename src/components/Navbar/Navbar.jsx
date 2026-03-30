import React from "react";
import logoImg from "../../assets/logo.png";
import cartImg from "../../assets/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm py-3">
      <div className="navbar container mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-slate-900 text-[16px]"
            >
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
            </ul>
          </div>
          <a>
            <img src={logoImg} alt="digiTools" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-slate-900 text-[16px]">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div className="indicator">
            <span className="indicator-item badge p-2 h-4 w-4 badge-secondary rounded-full text-[10px] ">
              12
            </span>
            <img className="" src={cartImg} alt="cart" />
          </div>
          <button className="btn rounded-full bg-white text-neutral-900 hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] border-none hover:text-white font-semibold text-[16px]">
            Login
          </button>
          <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full border-none text-white font-semibold text-[16px]">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
