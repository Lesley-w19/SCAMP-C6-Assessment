import React from "react";
import avatar from "../assets/images/avatar.jpeg";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-links">
            <div className="menu-icon d-flex">
              <i className="bx bx-menu show-icon"></i>
              <h2>t-shirts</h2>
            </div>
            <div className="navlinks">
              <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="profile">
            <i className="bx bx-cart-alt"></i>
            <img src={avatar} alt="avatar profile pic" />
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
