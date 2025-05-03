import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../Css/Home-Campaigns.css";

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <NavBar />

      <div className="py-5 text-center" style={{ backgroundColor: "#C7E5E0" }}>
        <h2 className="fw-bold">Meet the Students</h2>
        <p className="text-muted">Our hope for a better future</p>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <h6 className="fw-bold mb-3">Filter Results</h6>
            {["Major", "Degree", "Birth Place", "Gender"].map((label, i) => (
              <div className="mb-3" key={i}>
                <label className="form-label">{label}</label>
                <select className="form-select">
                  <option>{label}</option>
                </select>
              </div>
            ))}
            <button className="btn btn-success w-100 fw-bold btn_color2">Search</button>
          </div>

          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">
              <input
                type="text"
                className="form-control me-3"
                placeholder="Search by name, campaign, city..."
                style={{ maxWidth: "60%" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div>
                <label className="me-2">Sort By</label>
                <select className="form-select d-inline-block" style={{ width: "auto" }}>
                  <option>All</option>
                </select>
              </div>
            </div>

            <div className="row g-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="col-sm-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={`https://via.placeholder.com/400x400?text=Student+${index + 1}`}
                      alt="Campaign"
                      className="card-img-top card-img-top-custom"
                      onClick={() => navigate(`/campaign/${index + 1}`)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title mb-1">Student Name</h5>
                      <p className="card-duration">Raised for 14 months</p>
                      <p className="card-details">
                        23 Years old, Syrian
                        <br />
                        Degree: Undergraduate
                      </p>

                      <div className="funding-row">
                        <div className="funding-left">
                          <span>$3,752</span>
                          <span className="goal">of $4,760 goal</span>
                        </div>
                        <span className="funding-right">78.8%</span>
                      </div>

                      <div className="progress progress-custom">
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "78.8%" }}
                        ></div>
                      </div>

                      <div className="card-footer-buttons fw-bold">
                        <span
                          className="text-muted"
                          onClick={() => navigate(`/campaign/${index + 1}`)}
                          style={{ cursor: "pointer" }}
                        >
                          View
                        </span>
                        <span className="text-success">Donate</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-outline-secondary btn_color2">Load more</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Campaigns;