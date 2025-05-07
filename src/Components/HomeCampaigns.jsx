import React, { useState } from "react";
import campaign1 from "../images/Campaign1.jpg";
import campaign2 from "../images/Campaign2.jpg";
import campaign3 from "../images/Campaign3.jpg";
import campaign4 from "../images/Campaign4.jpg";
import DonationModal from "../Components/DonationModal";
import { useNavigate } from "react-router-dom";
import "../Css/Home-Campaigns.css";

const HomeCampaigns = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({ name: '', image: '' });

  const campaigns = [
    {
      name: "Nada Abu Qamar",
      image: campaign1,
      raised: "$5,842",
      goal: "$7,600",
      percentage: "76.9%",
      duration: "22 months",
      age: "26",
      nationality: "Palestinian",
    },
    {
      name: "Abdelhadi Sahyouni",
      image: campaign2,
      raised: "$3,752",
      goal: "$4,760",
      percentage: "78.8%",
      duration: "14 months",
      age: "23",
      nationality: "Syrian",
    },
    {
      name: "Rania Alzaal",
      image: campaign3,
      raised: "$217",
      goal: "$4,120",
      percentage: "5.3%",
      duration: "4 months",
      age: "22",
      nationality: "Syrian",
    },
    {
      name: "Ahmed Al Moqayad",
      image: campaign4,
      raised: "$1,122",
      goal: "$4,760",
      percentage: "54.2%",
      duration: "19 months",
      age: "26",
      nationality: "Palestinian",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container home-campaigns-container">
      <div className="mb-4">
        <h6 className="text-muted">Students Campaigns</h6>
        <h3 className="fw-bold colorit1">Meet the Students</h3>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap trysmth">
        <div className="btn-group">
          <button
            className={`btn btn-outline-secondary ${activeTab === "featured" ? "active" : ""}`}
            onClick={() => handleTabClick("featured")}
          >
            Featured Campaigns
          </button>
          <button
            className={`btn btn-outline-secondary ${activeTab === "almost" ? "active" : ""}`}
            onClick={() => handleTabClick("almost")}
          >
            Almost Funded
          </button>
          <button
            className={`btn btn-outline-secondary ${activeTab === "recent" ? "active" : ""}`}
            onClick={() => handleTabClick("recent")}
          >
            Recently Launched
          </button>
        </div>
        <button className="btn btn text-success btn_color" onClick={() => navigate("/campaigns")}>
          All Campaigns
        </button>
      </div>

      <div className="row g-4">
        {campaigns.map((c, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={c.image}
                alt={c.name}
                className="card-img-top card-img-top-custom"
                onClick={() => navigate(`/campaign/${index + 1}`)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-1">{c.name}</h5>
                <p className="card-duration mb-4">Raised so far in {c.duration}</p>
                <p className="card-details">
                  {c.age} Years old, {c.nationality}
                  <br />
                  Degree: Undergraduate
                </p>

                <div className="funding-row">
                  <div className="funding-left">
                    <span>{c.raised}</span>
                    <span className="goal">of {c.goal} goal</span>
                  </div>
                  <span className="funding-right">{c.percentage}</span>
                </div>

                <div className="progress progress-custom">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: c.percentage }}
                    aria-valuenow={parseFloat(c.percentage)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <div className="card-footer-buttons">
                  <span
                    className="text-muted fw-bold"
                    onClick={() => navigate(`/campaign/${index + 1}`)}
                    style={{ cursor: "pointer" }}
                  >
                    View
                  </span>
                  <span
                    className="text-success fw-bold"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedStudent({ name: c.name, image: c.image });
                      setShowModal(true);
                    }}
                  >
                    Donate
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
  <DonationModal
    onClose={() => setShowModal(false)}
    studentName={selectedStudent.name}
    studentImage={selectedStudent.image}
  />)}
    </div>
  );
};

export default HomeCampaigns;