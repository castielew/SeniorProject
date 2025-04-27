import React, { useState } from "react";
import logo from "../images/logo.svg";
import "../Css/NavBar.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";
import { Link } from "react-router-dom";
import SignIn from "../Pages/SignIn.jsx";

function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => setIsSidebarOpen(true);
  const hideSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="navbar container-fluid">
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

      <div className="firstView">
        <div className="pages d-flex mt-3">
          <ul className="d-flex nav-links align-items-center">
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to ="/about" className="nav-item">About</Link></li>
            <li><Link className="nav-item">Campaigns</Link></li>
            <li><Link to ="/about" className="nav-item">Blogs</Link></li>
            <li><Link className="nav-item">Funds</Link></li>
          </ul>
        </div>
      </div>

      <div className="secView">
        <div className="org">
          <div className="buttons me-2">
            <Link><button className="startCamp me-1">Start Campaign</button></Link>
            <Link to="/signin" className="logIn_SignUp">Log In/Sign Up</Link>
          </div>
        </div>

        <div className="menu-button" onClick={showSidebar}>
          <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#13897d"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
        </div>

        <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
          <ul>
            <li onClick={hideSidebar}>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#13897d"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
            </li>
            <li><Link to="/" className="nav-item">Home</Link></li>
            <li><Link to ="/about" className="nav-item">About</Link></li>
            <li><Link className="nav-item">Campaigns</Link></li>
            <li><Link className="nav-item">Blogs</Link></li>
            <li><Link className="nav-item">Funds</Link></li>
            <li><Link to="/signin" className="nav-item hideMe">Log In/Sign Up</Link></li>
            <li><Link><button className="startCamp hideMe">Start Campaign</button></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
