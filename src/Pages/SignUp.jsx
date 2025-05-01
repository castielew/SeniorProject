import logo from "../images/logo.svg";
import "../Css/Signup.css";
import "../bootstrap/css/bootstrap.min.css";
import "../bootstrap/css/all.min.css";
import "../bootstrap/js/all.min.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import bgImage from "../images/image1.png";

function SignUp() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    type: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  useEffect(() => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "none"; // Reset on unmount
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (formData.password.length < 12) {
      alert("Password must be at least 12 characters long.");
      return;
    }

    try {
      const response = await fetch("http://localhost/seniorProject/signup.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname: formData.fname,
          lname: formData.lname,
          type: formData.type,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Account created successfully!");
        // Optionally reset form
        setFormData({
          fname: "",
          lname: "",
          type: "",
          email: "",
          password: "",
          repeatPassword: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while creating account.");
    }
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-cover bg-no-repeat">
      <div className="content2 bg-white p-4 shadow rounded text-center container w-md-50">
        <img
          src={logo}
          alt="Logo"
          className="img-fluid text-left"
          style={{ width: "200px" }}
        />

        <h3 className="text-start">Create an account</h3>
        <p className="text-start">
          Already have an account?
          <Link to="/signin" className="link"> Sign In</Link>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              className="field w-100"
              placeholder="First Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              className="w-100 field"
              placeholder="Last Name"
              required
            />
          </div>

          <div className="mb-3">
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-100 field"
              required
            >
              <option value="">Account Type</option>
              <option value="Student">Student</option>
              <option value="Donor">Donor</option>
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-100 field"
              placeholder="Email"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-100 field"
              placeholder="Password"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
              className="w-100 field"
              placeholder="Repeat Password"
              required
            />
          </div>

          <div className="notes text-start">
            <span className="ms-1">Your password must contain:</span>
            <ul>
              <li>Minimum 12 characters</li>
              <li>1 upper-case letter</li>
              <li>1 number</li>
              <li>1 symbol</li>
            </ul>
          </div>

          <div className="mt-3">
            <input
              type="submit"
              value="Sign Up"
              className="submit w-100"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
