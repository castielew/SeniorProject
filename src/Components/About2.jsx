import React from 'react';
import '../Css/About1.css';
import about from '../images/about.png';
function About2() {
  return (
    <>
<div className="container-fluid  ">
<div className="container about2 my-5 d-flex flex-column align-content-center justify-content-center  ">
        <p className=" text-start">About Us</p>
        <p>Helping the heroes of the future to help them build their countries</p>
        <div className="img-fluid">
          <img src={about} alt="" className="img-fluid" />
        </div>
        <p className=''>
          Sandni is a non-profit crowdfunding platform founded in early 2025. Our mission is to support Arab youth by
          helping them return to the educational institutions they belong to, enabling them to contribute to the
          rebuilding of their war-affected and conflict-stricken homelands.
        </p>

        <p>
            We do not only provide opportunities for learners, but we also aspire to support impactful tech-related startups and create job opportunities in the market. Through crowdfunding and securing necessary investments, we aim to help these projects launch and thrive.
        </p>
      </div>
      </div>
    </>
  );
}

export default About2;
