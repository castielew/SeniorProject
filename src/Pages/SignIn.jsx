import React from "react";
import logo from "../images/logo.svg";
import "../Css/Signin.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import bgImage from "../images/image1.png";

function SignIn() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  
    return () => {
      document.body.style.backgroundImage = "none"; 
    };
  }, []);

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-cover bg-no-repeat" >
     
      <div className="  content bg-white p-4 shadow rounded text-center ">
  <Link to="/"><img src={logo} alt="Logo" className="img-fluid mb-3" style={{ width: "200px" }} /></Link>
        <h1 className="fs-1">Welcome</h1>
        <p className="text-muted">Log in to Sanidni to continue.</p>

        <div className="mb-2 ">
          <input type="text" className="field w-100" placeholder=" Email" />
        </div>

        <div className="mb-3">
          <input type="password" className="w-100 field" placeholder=" Password" />
        </div>

        <div className="">
          <input type="submit" value="Log In" className=" submit w-100" />
        </div>
        <p className="mt-3">
          Did you forget your Password? <Link to="/signup" className="link">Reset </Link>
        </p>
        <p className="mt-3">
          Don't you have an account? <Link to="/signup" className="link">Sign up</Link>
        </p>

      </div>
    </div>
  );
}

export default SignIn;
