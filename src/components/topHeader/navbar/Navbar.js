import React from "react";
import "./Navbar.css";
const Navbar = () => {
  const showNavigationMenu = () => {
    document.querySelector(".showhamburgerdiv").style.left = "-2.6%";
    document.querySelector(".showhamburgerdiv").style.display = "block";
  };

  const hideNavigationMenu = () => {
    document.querySelector(".showhamburgerdiv").style.left = "110%";
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="navbar-main">
            <div className="logo-div">
              <h2>Exclusive</h2>
            </div>
            <div className="links-div">
              <a href="#" className="navLink">
                Home
              </a>
              <a href="#" className="navLink">
                Contact
              </a>
              <a href="#" className="navLink">
                About
              </a>
              <a href="#" className="navLink">
                Sign Up
              </a>
            </div>
            <div className="input-and-icons-div">
              <div className="input-div">
                <input type="text" placeholder="What are you looking for?" />
              </div>
              <div className="icons-div">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-container-mobile">
        <div className="navbar-mobile">
          <div className="navbar-main-mobile">
            <div className="logo-div-mobile">
              <h2>Exclusive</h2>
            </div>

            <div className="hamburger-main">
              <i
                class="fa-sharp fa-solid fa-bars"
                onClick={showNavigationMenu}
              ></i>
            </div>

            <div className="showhamburgerdiv">
              <div className="mobile-top-main">
                <div className="logo-div-mobile">
                  <h2>Exclusive</h2>
                </div>

                <div className="hamburger-main">
                  <i
                    class="fa-solid fa-xmark crossIcon"
                    onClick={hideNavigationMenu}
                  ></i>
                </div>
              </div>

              <div className="links-div-mobile">
                <a href="#" className="navLink-mobile">
                  Home
                </a>
                <a href="#" className="navLink-mobile">
                  Contact
                </a>
                <a href="#" className="navLink-mobile">
                  About
                </a>
                <a href="#" className="navLink-mobile">
                  Sign Up
                </a>
              </div>
              <div className="input-and-icons-div-mobile">
                <div className="input-div-mobile">
                  <input type="text" placeholder="What are you looking for?" />
                </div>
                <div className="icons-div-mobile">
                  <i class="fa-regular fa-heart"></i>
                  <i class="fa-solid fa-cart-shopping mobile-shopping"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
