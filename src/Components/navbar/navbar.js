import React from "react";
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="titile">
          <p>Title</p>
        </div>
        <div class="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>
              <button>Button</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
