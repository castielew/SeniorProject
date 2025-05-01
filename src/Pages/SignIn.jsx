import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import "../Css/Signin.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../images/image1.png";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

    try {
      const response = await fetch("http://localhost/seniorProject/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        navigate("/"); // ✅ Change to your desired route
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-cover bg-no-repeat">
      <div className="content bg-white p-4 shadow rounded text-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="img-fluid mb-3" style={{ width: "200px" }} />
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
