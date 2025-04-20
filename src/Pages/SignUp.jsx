import logo from "../images/logo.svg";
import "../Css/Signup.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import bgImage from "../images/image1.png";

function SignUp() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
  
    return () => {
      document.body.style.backgroundImage = "none"; // Reset on unmount
    };
  }, []);
  return (
    <div className=" vh-100 d-flex justify-content-center align-items-center bg-cover bg-no-repeat ">
      <div className="  content2 bg-white p-4 shadow rounded text-center container w-md-50 ">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid text-left"
          style={{ width: "200px" }}
        />

        <h3 className="text-start">Create an account</h3>
        <p className="text-start">
          Already have an account?<Link to="/signin" className="link"> Sign In</Link>
        </p>

        <div className="mb-2 ">
          <input
            type="text"
            className="field w-100"
            placeholder=" First Name"
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="w-100 field"
            placeholder=" Last Name"
          />
        </div>
        <div className="mb-3">
          <select name="" id="" className="w-100 field">
            <option value="null">Account Type </option>
            <option value="Student">Student</option>
            <option value="Donor">Donor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div className="mb-3">
          <input type="text" className="w-100 field" placeholder=" Email" />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="w-100 field"
            placeholder=" Password"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="w-100 field"
            placeholder=" Repeat Password"
          />
        </div>

        <div className="notes text-start">
        <span className="ms-1">your password must contain:</span>
          <ul>
            <li>minimum 12 characters</li>
            <li>1 upper-case letter</li>
            <li>1 number </li>
            <li>1 symbol</li>
          </ul>
        </div>

        <div className="">
          <input type="submit" value="Sign Up" className=" submit w-100" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
