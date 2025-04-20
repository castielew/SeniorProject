import React from "react";
import img3 from "../images/welcome.png";
import std1 from "../images/std1.png";
import std2 from "../images/std2.png";
import std3 from "../images/std3.png";
import std4 from "../images/std4.png";
import "../Css/Welcome.css"

function Welcome() {
  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-center">

        <div className="col-md-3 position-relative image-stack">
          <img src={std1} alt="Student 1" className="img-fluid rounded stacked-img img1" />
          <img src={std2} alt="Student 2" className="img-fluid rounded stacked-img img2" />
        </div>

        <div className="col-md-5 text-center my-4 my-md-0">
          <h2 className="display-6 fw-bold" style={{ fontFamily: "'Patrick Hand', cursive" }}>
            Stand with<br />Youth, Rebuild<br />futures!
          </h2>
          <button className="btn btn-teal mt-3 px-4 py-2">Donate</button>
        </div>

        <div className="col-md-3 position-relative image-stack">
          <img src={std3} alt="Student 3" className="img-fluid rounded stacked-img img3" />
          <img src={std4} alt="Student 4" className="img-fluid rounded stacked-img img4" />
        </div>

      </div>

      <div className="row mt-4 text-center">
        <div className="col-md-6 text-muted small py-5">
          Conflict in Arab countries has left millions of young people without access to education.
        </div>
        <div className="col-md-6 text-muted small py-5">
          Get started in just a few minutes — write a compelling story, and share it with the world.
        </div>
      </div>
    </div>
  );
}

export default Welcome;
