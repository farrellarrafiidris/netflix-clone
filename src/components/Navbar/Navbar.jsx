import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useEffect, useRef } from "react";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    // Start Navbar
    <div
      ref={navRef}
      className="navbar"
    >
      {/* Navbar Left */}
      <div className="navbar-left">
        <img src={logo} />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse my Language</li>
        </ul>
      </div>
      {/* Navbar Right */}
      <div className="navbar-right">
        <img
          src={search_icon}
          className="icons"
        />
        <p>Children</p>
        <img
          src={bell_icon}
          className="icons"
        />
        <div className="navbar-profile">
          <img
            src={profile_img}
            className="profile"
          />
          <img src={caret_icon} />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign Out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
    // End Navbar
  );
};

export default Navbar;
