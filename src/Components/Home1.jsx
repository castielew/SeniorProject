import React from 'react';
import student from '../images/student.png';
import donor from '../images/donor.png';
import educationalInstitution from '../images/educationalInstitution.png';
function Home1() {
  return (
    <>
      <div className="Home1 container-fluid my-5 py-4 ">
        <p className=" text-center ">Sanidni’s Crowdfunding</p>
        <h4 className=" text-center ">How it Works </h4>
        <div className="container
         ">
          <div className="row ">
            <div className="sec1 ">
              <img src={student} alt="" srcset="" />
              <h5 className="py-2">Students</h5>
              <p> Through social media and marketing, you can crowdfund your education with Sanidni.</p>
            </div>
            <div className="sec2 ">
              <img src={donor} srcset="" />
              <h5 className="py-2">Donor</h5>
              <p>
                {' '}
                With your contribution, conflict-impacted youth and their families have a second chance at a new life.
              </p>
            </div>

            <div className="sec3 ">
              <img src={educationalInstitution} srcset="" />
              <h5 className="py-2 ">Students</h5>
              <p> Through social media and marketing, you can crowdfund your education with Sanidni.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;
