import React from 'react';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';
import about4 from '../images/about4.png';
import about5 from '../images/about5.png';
import '../Css/About1.css'
function About3() {
  return (
    <>
      <div className="container-fluid about3 ">
        <div className="row justify-content-center">
          <div className="part1 col-lg-4 text-center">
            <img src={about2} alt="" srcset="" />
            <h5> Address An Overlooked Demographic</h5>
            <p>
              {' '}
              Less than 1% of refugees have access to higher education funding. Few solve the growing problem for
              university students funding, a segment able to support entire families upon graduation and break the
              poverty cycle.
            </p>
          </div>

          <div className="part1 col-lg-4 text-center ">
            <img src={about3} alt="" srcset="" />
            <h5> Analytics And Feedback</h5>
            <p>
              {' '}
              Provide campaign insights and analytics to educational institutions and donors through an easy to use
              web-based and in application dashboard.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="part1 col-lg-4 text-center">
            <img src={about4} alt="" srcset="" />
            <h5> Transparency And Financial Compliance</h5>
            <p>
              {' '}
              Addresses donor concern over campaign credibility by verifying student enrollment and sending raised funds
              directly to the educational institution. 
            </p>
          </div>

          <div className="part1 col-lg-4 text-center ">
            <img src={about5} alt="" srcset="" />
            <h5> Ongoing Campaign Updates</h5>
            <p>
              {' '}
              Using familiar social media skills, students keep donors aware of and interested in their updates and
              obtains endorsements from their community on other social networks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About3;
