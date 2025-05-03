import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import SuggestedCampaigns from "../Components/SuggestedCampaigns";
import raghad1 from "../images/raghad1.jpg";
import raghad2 from "../images/raghad2.jpg";
import raghad3 from "../images/raghad3.jpg";
import raghad4 from "../images/raghad4.jpg";
import defaultImg from "../images/default.png";
import raghadImg from "../images/raghad.jpg";
import img3 from "../images/img3.png";
import uniIcon from "../images/University.png";
import badgeIcon from "../images/Scholarship.png";
import locationIcon from "../images/location.png";
import uni from "../images/uni.png";
import "../Css/CampaignDetails.css";

const CampaignDetails = () => {
  const [activeTab, setActiveTab] = useState("story");
  const [showFullUpdate, setShowFullUpdate] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({ type: "video", videoUrl: "https://www.youtube.com/embed/T5RabRjTrTQ" });

  const thumbnails = [
    { type: "video", thumbnail: "https://img.youtube.com/vi/T5RabRjTrTQ/0.jpg", videoUrl: "https://www.youtube.com/embed/T5RabRjTrTQ" },
    { type: "image", src: raghad1 },
    { type: "image", src: raghad2 },
    { type: "image", src: raghad3 },
    { type: "image", src: raghad4 },
  ];

  return (
    <div className="CampaignDetails">
      <NavBar />
      <div className="campaign-page container my-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="media-display mb-3">
              {selectedMedia.type === "video" ? (
                <div className="video-wrapper">
                  <iframe
                    className="campaign-video"
                    src={selectedMedia.videoUrl}
                    title="Campaign Video"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img src={selectedMedia.src} alt="Gallery" className="main-gallery-img" />
              )}
            </div>

            <div className="image-thumbnails d-flex gap-2 mb-4">
              {thumbnails.map((item, index) => (
                <img
                  key={index}
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={`thumb-${index}`}
                  className="gallery-img"
                  onClick={() => setSelectedMedia(item.type === "video" ? { type: "video", videoUrl: item.videoUrl } : { type: "image", src: item.src })}
                />
              ))}
            </div>

            <ul className="nav nav-tabs mb-3" id="campaignTabs">
              <li className="nav-item">
                <button className={`nav-link ${activeTab === "story" ? "active" : ""}`} onClick={() => setActiveTab("story")}>Story</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === "updates" ? "active" : ""}`} onClick={() => setActiveTab("updates")}>Updates (1)</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === "comments" ? "active" : ""}`} onClick={() => setActiveTab("comments")}>Comments (2)</button>
              </li>
              <li className="nav-item">
                <button className={`nav-link ${activeTab === "backers" ? "active" : ""}`} onClick={() => setActiveTab("backers")}>Backers (3)</button>
              </li>
            </ul>

            {activeTab === "story" && (
              <div className="story-content">
                <p>Syrian, from Homs; seeking Undergraduate degree in Psychology and is enrolled at Philipps-University Marburg.</p>
                <p>While faced with setbacks and constant upheavals, I discovered an inner stability and resilience that helped me cope with life’s tests.</p>
                <p>For the past five years, my family and I have continued to deal with the consequences of our decision to leave Syria.</p>
                <p>In 2020, I left Syria for the first time at age 17 with my sister...</p>
                <h5 className="mt-4">Why Would Donors Fund You?</h5>
                <p>I am a resilient and ambitious student...</p>
                <h5 className="mt-4">How Do You Plan to Payback?</h5>
                <p>My goal is to contribute to Syria's redevelopment...</p>
              </div>
            )}

            {activeTab === "updates" && (
              <div className="update-box border rounded p-3 mb-3">
                <div className="d-flex justify-content-between flex-wrap align-items-start mb-2">
                  <p className="mb-0 me-3 flex-grow-1">
                    {showFullUpdate ? `Dear Friends and Donors...` : `Dear Friends and Donors, I'm writing to share some exciting news...`}
                  </p>
                  <span className="text-muted small fw-bold text-nowrap ms-auto">7 months ago</span>
                </div>
                <span className="fw-bold toggle-more-less" onClick={() => setShowFullUpdate(!showFullUpdate)}>
                  {showFullUpdate ? "LESS" : "MORE"}
                </span>
              </div>
            )}

            {activeTab === "comments" && (
              <div className="comments-tab">
                {[{"name":"Ezalden SaifElddin","time":"5 months ago","text":"Thanks Abdelhadi and thanks again for your efforts ♡"},{"name":"Abdelhadi Sahyouni","time":"5 months ago","text":"good luck ezalden"}].map((comment, idx) => (
                  <div key={idx} className="d-flex mb-4">
                    <img src={defaultImg} alt={comment.name} className="rounded-circle comment-avatar" />
                    <div>
                      <div className="fw-bold">{comment.name}</div>
                      <div className="text-muted small mb-1">{comment.time}</div>
                      <div>{comment.text}</div>
                    </div>
                  </div>
                ))}
                <div className="mt-4">
                  <textarea className="form-control mb-2" placeholder="Add a comment here..." rows={3} />
                  <button className="btn btn-outline-dark">Comment</button>
                </div>
              </div>
            )}

            {activeTab === "backers" && (
              <div className="backers-tab">
                {[{"img":defaultImg,"name":"Abdullatif Chakaki Fund","time":"5 months ago","contribution":"108.00 USD"},{"img":defaultImg,"name":"Rasha Ajalyaqeen","time":"5 months ago","contribution":"5 Hours"},{"img":defaultImg,"name":"Ammar Al Shami Fund","time":"5 months ago","contribution":"400.00 USD"}].map((backer, idx) => (
                  <div key={idx} className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center">
                      <img src={backer.img} alt={backer.name} className="rounded-circle backer-avatar" />
                      <div>
                        <div className="fw-bold">{backer.name}</div>
                        <div className="text-muted small">{backer.time}</div>
                      </div>
                    </div>
                    <div className="fw-bold text-muted text-end backer-contribution">{backer.contribution}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="campaign-info-box mb-4">
              <h5 className="campaign-title">From War to Wellness: Heal and Build Resilience</h5>
              <div className="amount-row mb-1">
                <span className="raised-amount">$15,121</span> of $15,000 goal per <b>Academic Year</b>
              </div>
              <div className="progress progress-custom mb-2">
                <div className="progress-bar" style={{ width: "100%" }}></div>
              </div>
              <div className="campaign-detail"><strong>Summer of 2024/2025</strong></div>
              <div className="campaign-detail mb-3">Help Raghad out, <span className="donate-link">donate</span> now!</div>
              <div className="campaign-actions d-flex gap-3 align-items-center">
                <button className="btn btn-donate">Donate</button>
              </div>
            </div>

            <div className="student-info-box p-3">
              <div className="d-flex align-items-center mb-3">
                <img src={raghadImg} alt="Raghad Zino" style={{ width: "130px", height: "130px", objectFit: "cover", marginRight: "12px" }} />
                <div>
                  <div className="fw-bold">Raghad Zino</div>
                  <div className="text-muted small">Residing in <b>Mersin, Turkey</b><br/> <b>Syrian</b>, from <b>Homs</b></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="fw-bold mb-1 info-section-title">Prospective Degree</div>
                <div className="d-flex align-items-center mb-1"><img src={img3} className="me-2" width="16" alt="degree" /> Psychology</div>
                <div className="d-flex align-items-center mb-1"><img src={uniIcon} className="me-2" width="16" alt="university" /> Philipps-University Marburg</div>
                <div className="d-flex align-items-center"><img src={badgeIcon} className="me-2" width="16" alt="level" /> Undergraduate</div>
              </div>
              <div>
                <div className="fw-bold mb-1 info-section-title">Prior/Current Education</div>
                <div className="d-flex align-items-center mb-1"><img src={img3} className="me-2" width="16" alt="grade" /> 12th Grade</div>
                <div className="d-flex align-items-center mb-1"><img src={uniIcon} className="me-2" width="16" alt="school" /> Al Haras School</div>
                <div className="d-flex align-items-center" style={{ marginBottom:"25px"}}><img src={badgeIcon} className="me-2" width="16" alt="level" /> Highschool</div>
              </div>
            </div>

            <div className="tuition-box border">
  <div className="d-flex justify-content-between align-items-center tuition-header flex-wrap">
    <div className="flex-grow-1">Prospective Degree</div>
    <div className="d-flex align-items-center mt-2 mt-lg-0">
      <div className="fw-bold me-2" style={{ fontSize: "20px" }}>$15,000</div>
      <img src={uni} alt="tuition" width="24" height="24" />
    </div>
  </div>
  <div className="tuition-content">
    <div className="mb-1 tuition-subtitle">
      Tuition: <span className="fw-semibold">Summer Semester</span>
    </div>
    <div className="tuition-description">
      Student Tuition and Housing Deposit - Resident
    </div>
  </div>
</div>


          </div>
        </div>
      </div>
      <hr className="section-divider" />
      <SuggestedCampaigns></SuggestedCampaigns>
      <Footer />
    </div>
  );
};

export default CampaignDetails;