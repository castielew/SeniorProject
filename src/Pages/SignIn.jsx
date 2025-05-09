import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.svg";
import bgImage from "../images/image1.png";
import "../Css/Signin.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";
import { AuthContext } from "../Components/AuthContext"; // adjust path if needed

function SignIn() {


  const navigate = useNavigate();
  const { login, isLoggedIn } = useContext(AuthContext); // ✅ fixed here

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log("isLoggedIn:", isLoggedIn, typeof isLoggedIn);

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "none";
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await fetch("http://localhost/seniorProject/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
    
      const text = await response.text(); // grab raw response
      console.log("Raw response:", text);
    
      const data = JSON.parse(text); // then parse it manually
    
      if (data.success) {
        login(data.user, data.token);
        navigate("/");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login fetch error:", err);
      setError("Something went wrong on the server.");
    }
  }  

  
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-cover bg-no-repeat">
      <div className="content bg-white p-4 shadow rounded text-center">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid mb-3"
            style={{ width: "200px" }}
          />
        </Link>
        <h1 className="fs-1">Welcome</h1>
        <p className="text-muted">Log in to Sanidni to continue.</p>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              className="field w-100"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="field w-100"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <input type="submit" value="Log In" className="submit w-100" />
          </div>
        </form>

        <p className="mt-3">
          Did you forget your Password? <Link to="/signup" className="link">Reset</Link>
        </p>
        <p className="mt-3">
          Don't have an account? <Link to="/signup" className="link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
