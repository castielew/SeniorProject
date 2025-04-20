import React from "react";
import std1 from "../images/std1.jpg";
import std2 from "../images/std2.jpg";
import std3 from "../images/std3.jpg";
import std4 from "../images/std4.jpg";
import stand from "../images/stand.png";
import "../Css/Welcome.css";

function Welcome() {
  return (
    <div className="welcome-section container">
      <div className="firstRow">

        <div className="firstpart">
          <div className="image-stack-left">
            <img src={std2} alt="Student 2" className="img-top" />
            <img src={std1} alt="Student 1" className="img-bottom" />
          </div>
        </div>

        <div className="secondpart">
          <img src={stand} alt="sentence" draggable="false" onContextMenu={(e) => e.preventDefault()}/>
          <button>Donate</button>
        </div>

        <div className="thirdpart">
          <div className="image-stack-right">
            <img src={std4} alt="Student 4" className="img-top" />
            <img src={std3} alt="Student 3" className="img-bottom" />
          </div>
        </div>

        <div className="background-carousel"></div>
      </div>

      <div className="secondRow">
        <div className="quote left-quote">
          <p><strong>Conflict in Arab countries has left millions of young people without access to education.</strong></p>
        </div>
        <div className="quote right-quote">
          <p>Get started in just a few minutes — write a compelling story, and share it with the world.</p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;