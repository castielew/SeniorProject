import React from 'react';
import student from '../images/student.png';
import donor from '../images/donor.png';
import educationalInstitution from '../images/educationalInstitution.png';
import '../Css/Home.css';

function Home1() {
  return (
    <section className="home1-section py-3 my-5">
      <div className="container text-center">
        <p className="subheading">Sanidni’s Crowdfunding</p>
        <h4 className="heading mb-5">How it Works</h4>
        <div className="row justify-content-center gx-5">
  {/* Students */}
  {/* Students */}
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="d-flex flex-column align-items-center h-100 text-center px-3">
      <img src={donor} alt="Donor" className="icon-img mb-3" />
      <h5 className="role-title">Students</h5>
      <p className="description">
      Through social media and marketing, you can crowdfund your education with Sanidni.      </p>
      <div className="pb-2">
        <button className="btn custom-btn">Launch a Campaign</button>
      </div>
    </div>
  </div>


  {/* Donors */}
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="d-flex flex-column align-items-center h-100 text-center px-3">
      <img src={donor} alt="Donor" className="icon-img mb-3" />
      <h5 className="role-title">Donors</h5>
      <p className="description">
        With your contribution, conflict-impacted youth and their families have a second chance at a new life.
      </p>
      <div className="pb-2">
        <button className="btn custom-btn">Donate a Student</button>
      </div>
    </div>
  </div>

  {/* Educational Institutions */}
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="d-flex flex-column align-items-center h-100 text-center px-3">
      <img src={donor} alt="Donor" className="icon-img mb-3" />
      <h5 className="role-title">Educational Institutions</h5>
      <p className="description">
      Partner with Sanidni to verify enrollment of students and receive funds on behalf of our students.
      </p>
      <div className="pb-2">
        <button className="btn custom-btn">Receive Funds</button>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default Home1;
