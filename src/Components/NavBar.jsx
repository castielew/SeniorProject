import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";
import logo from "../images/logo.svg";
import "../Css/NavBar.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);

  const showSidebar = () => setIsSidebarOpen(true);
  const hideSidebar = () => setIsSidebarOpen(false);

  console.log("Is logged in?", isLoggedIn);

  return (
    <div className="navbar container-fluid">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "120px" }}
          />
        </Link>
      </div>

      {/* Main Links */}
      <div className="firstView">
        <div className="pages d-flex mt-3">
          <ul className="d-flex nav-links align-items-center">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            <li><Link to="/campaigns" className="nav-item">Campaigns</Link></li>
            <li><Link to="/blogs" className="nav-item">Blogs</Link></li>
            <li><Link to="/funds" className="nav-item">Funds</Link></li>
          </ul>
        </div>
      </div>

      {/* Right-side Buttons */}
      <div className="secView">
        <div className="org">
          <div className="buttons me-2 d-flex align-items-center gap-2">
            {/* Always show "Start Campaign" */}
            <Link to="/buildyourcampaign">
              <button className="startCamp">Start Campaign</button>
            </Link>

            {/* Show Dashboard or Login based on auth state */}
            {isLoggedIn ? (
              <Link to="/mainfunds" className="logIn_SignUp">Dashboard</Link>
            ) : (
              <Link to="/signin" className="logIn_SignUp">Log In / Sign Up</Link>
            )}
          </div>
        </div>

        {/* Sidebar Menu Button */}
        <div className="menu-button" onClick={showSidebar}>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#13897d">
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </div>

        {/* Sidebar Drawer */}
        <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
          <ul>
            <li onClick={hideSidebar}>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#13897d">
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </a>
            </li>

            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to="/about" className="nav-item">About</Link></li>
            <li><Link to="/campaigns" className="nav-item">Campaigns</Link></li>
            <li><Link to="/blogs" className="nav-item">Blogs</Link></li>
            <li><Link to="/funds" className="nav-item">Funds</Link></li>
            <li><Link to="/buildyourcampaign" className="nav-item">Start Campaign</Link></li>

            {isLoggedIn ? (
              <li><Link to="/mainfunds" className="nav-item">Dashboard</Link></li>
            ) : (
              <li><Link to="/signin" className="nav-item">Log In / Sign Up</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
