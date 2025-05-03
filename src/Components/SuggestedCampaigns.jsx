import React from "react";
import "../Css/Home-Campaigns.css";
import campaign1 from "../images/Campaign1.jpg";
import campaign2 from "../images/Campaign2.jpg";
import campaign3 from "../images/Campaign3.jpg";
import campaign4 from "../images/Campaign4.jpg";

const SuggestedCampaigns = () => {
  const campaigns = [
    {
      name: "Lina Salah",
      image: campaign1,
      raised: "$5,426",
      goal: "$69,700",
      percentage: "5.5%",
      duration: "50 months",
      age: "29",
      nationality: "Jordan",
    },
    {
      name: "Rania Alzaal",
      image: campaign2,
      raised: "$217",
      goal: "$4,120",
      percentage: "5.3%",
      duration: "4 months",
      age: "22",
      nationality: "Syrian",
    },
    {
      name: "Mouamena Mallisho",
      image: campaign3,
      raised: "$4,183",
      goal: "$5,100",
      percentage: "82%",
      duration: "39 months",
      age: "23",
      nationality: "Syrian",
    },
    {
      name: "Abdelhadi Sahyouni",
      image: campaign4,
      raised: "$3,752",
      goal: "$4,760",
      percentage: "78.8%",
      duration: "14 months",
      age: "23",
      nationality: "Syrian",
    },
  ];

  return (
    <div className="suggested-campaigns container mb-5">
      <h4 className="fw-bold mb-4 ccc">
        Learn more about other <span className="highlight">Sanidni scholars</span>
      </h4>
      <div className="row g-4">
        {campaigns.map((c, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img src={c.image} alt={c.name} className="card-img-top card-img-top-custom" />
              <div className="card-body d-flex flex-column ">
                <h6 className="fw-bold mb-1 size">{c.name}</h6>
                <div className="card-duration mb-1 mar">Raised so far in {c.duration}</div>
                <div className="card-details">
                  {c.age} Years old, from {c.nationality} <br />
                  Degree: Undergraduate
                </div>
                <div className="funding-row">
                  <div className="funding-left">
                    <span>{c.raised}</span>
                    <span className="goal">of {c.goal} goal</span>
                  </div>
                  <span className="funding-right">{c.percentage}</span>
                </div>
                <div className="progress progress-custom">
                  <div
                    className="progress-bar"
                    style={{ width: c.percentage }}
                    role="progressbar"
                    aria-valuenow={parseFloat(c.percentage)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className="card-footer-buttons">
                  <span className="text-muted fw-bold">View</span>
                  <span className="text-success fw-bold">Donate</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuggestedCampaigns;
