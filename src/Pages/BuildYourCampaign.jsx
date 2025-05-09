import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import logo from '../images/logo.svg';
import { FaCircle } from 'react-icons/fa';


const steps = [
  "Contract",
  "Education",
  "Personal Statement",
  "Campaign Information",
  "Upload Photos",
  "Upload Video",
  "Submit Campaign",
  "Request Payments"
];

const BuildYourCampaign = () => {
  const [activeStep, setActiveStep] = useState("Contract");

  const renderCustomSidebarItems = (collapsed) => (
    <ul className="list-unstyled ps-2">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`mb-3 d-flex align-items-center fw-bold ${
            step === activeStep ? 'text-danger bg-light rounded px-2 py-1' : 'text-muted'
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => setActiveStep(step)}
        >
          <FaCircle className="me-2" size={10} />
          {!collapsed && step}
        </li>
      ))}
    </ul>
  );

      const [lifeStory, setLifeStory] = useState("");
      const [donorReason, setDonorReason] = useState("");
      const [paybackPlan, setPaybackPlan] = useState("");
      const countWords = (text) => text.trim().split(/\s+/).filter(Boolean).length;
      const [photos, setPhotos] = useState([]);
      const handlePhotoUpload = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviews = files.map(file => ({
          file,
          url: URL.createObjectURL(file),
        }));
        setPhotos(prev => [...prev, ...imagePreviews]);
      };

      const [video, setVideo] = useState(null);

      const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
          setVideo({
            file,
            url: URL.createObjectURL(file),
          });
        } else {
          alert("Please upload a valid video file.");
        }
      };


      const [availableBalance, setAvailableBalance] = useState(1000);
      const [paymentRequests, setPaymentRequests] = useState([]);
      const [recipient, setRecipient] = useState('');
      const [amount, setAmount] = useState('');
      const [studentId, setStudentId] = useState('');



      const renderStepContent = () => {
        if (activeStep === "Contract") {
          return (
            <div className="p-4 border rounded">
              <h5>Contract</h5>
              <p>Sign the document and upload it please!</p>
              <a
                href="https://drive.google.com/file/d/1NFOi723F1MUri7465LdN0bH9TfDLYeow/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Document
              </a>
              <div className="mt-3">
                <label className="form-label">Signed Document</label>
                <input type="file" className="form-control w-auto" />
              </div>
              <button
                className="btn mt-3 text-white"
                style={{ backgroundColor: '#13897d' }}
                onClick={() => setActiveStep("Education")}
              >
                Save & Proceed
              </button>
            </div>
          );
        }

        

    if (activeStep === "Education") {
      return (
        <div className="p-4 border rounded">
          <h5>Prospective Degree</h5>
          <div className="row mb-3">
          <div className="col-md-4">
            <label>Institution</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter institution name"
            />
          </div>

            <div className="col-md-4">
              <label>Degree *</label>
              <select className="form-select">
                <option>None</option>
                <option>Associate Degree/Diploma</option>
                <option>Clinical Research</option>
                <option>Doctoral</option>
                <option>Highschool</option>
                <option>Junior College</option>
                <option>Professional Post Graduate</option>
                <option>Undergraduate</option>
                <option>Vocational</option>
              </select>

            </div>
            <div className="col-md-4">
              <label>Major</label>
              <input type="text" className="form-control" placeholder="Enter your major" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Academic Year</label>
              <select className="form-select">
                <option>None</option>
                <option>2017/2018</option>
                <option>2018/2019</option>
                <option>2019/2020</option>
                <option>2020/2021</option>
                <option>2021/2022</option>
                <option>2022/2023</option>
                <option>2023/2024</option>
                <option>2024/2025</option>
                <option>2025/2026</option>
                <option>2026/2027</option>
                <option>2027/2028</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Semester</label>
              <select className="form-select">
                <option>None</option>
                <option>Fall</option>
                <option>Winter</option>
                <option>Spring</option>
                <option>Summer</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Scholarship Program</label>
              <select className="form-select">
              <option>None</option>
                <option>Unite Lebanon Youth Project(ULYP)</option>
                <option>Jusoor</option>
                <option>Project Turquoise</option>
                <option>Türkiye Bursları</option>
                <option>American University of Beirut</option>
                <option>Sparks of Hope</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label>Scholarship Program Code</label>
            <input className="form-control" type="text" />
          </div>

          <h5>Prior/Current Education</h5>
          <div className="row mb-3">
          <div className="col-md-4">
            <label>Institution</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter institution name"
            />
          </div>
            <div className="col-md-4">
              <label>Degree</label>
              <select className="form-select">
                <option>None</option>
                <option>Associate Degree/Diploma</option>
                <option>Clinical Research</option>
                <option>Doctoral</option>
                <option>Highschool</option>
                <option>Junior College</option>
                <option>Professional Post Graduate</option>
                <option>Undergraduate</option>
                <option>Vocational</option>
              </select>
            </div>
            <div className="col-md-4">
              <label>Major</label>
              <input type="text" className="form-control" placeholder="Enter your major" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-4">
              <label>Student ID</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Completion Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="col-md-4">
              <label>Average</label>
              <input type="text" className="form-control" />
            </div>
          </div>

          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#13897d' }}
            onClick={() => setActiveStep("Personal Statement")}
          >
            Update
          </button>
        </div>
      );
    }

    if (activeStep === "Personal Statement") {
    
      return (
        <div className="p-4 border rounded">
          <h5>Personal Statement</h5>
    
          {/* Life Story */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              Life story <span className="text-danger">*</span>
            </label>
            <div className="text-muted mb-2">
              Family history, travel, displacement, special circumstances<br />
              <small>
                {lifeStory.length}/1200 characters • {countWords(lifeStory)}/240 words
              </small>
            </div>
            <textarea
              className="form-control"
              rows="6"
              maxLength={1200}
              value={lifeStory}
              onChange={(e) => setLifeStory(e.target.value)}
              placeholder="Tell your story here..."
            ></textarea>
          </div>
    
          {/* Donor Reason */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              Why Would Donors Fund You? <span className="text-danger">*</span>
            </label>
            <div className="text-muted mb-2">
              <small>
                {donorReason.length}/300 characters • {countWords(donorReason)}/60 words
              </small>
            </div>
            <textarea
              className="form-control"
              rows="4"
              maxLength={300}
              value={donorReason}
              onChange={(e) => setDonorReason(e.target.value)}
              placeholder="Explain why you're a great candidate..."
            ></textarea>
          </div>
    
          {/* Payback Plan */}
          <div className="mb-4">
            <label className="form-label fw-bold">
              How Do You Plan to Payback? <span className="text-danger">*</span>
            </label>
            <div className="text-muted mb-2">
              <small>
                {paybackPlan.length}/500 characters • {countWords(paybackPlan)}/100 words
              </small>
            </div>
            <textarea
              className="form-control"
              rows="5"
              maxLength={500}
              value={paybackPlan}
              onChange={(e) => setPaybackPlan(e.target.value)}
              placeholder="Describe your plan to give back..."
            ></textarea>
          </div>
    
          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#13897d' }}
            onClick={() => setActiveStep("Campaign Information")}
          >
            Update
          </button>
        </div>
      );
    }

    if (activeStep === "Campaign Information") {
      return (
        <div className="p-4 border rounded">
          <h5 className="mb-3">Campaign Information</h5>
    
          <div className="mb-3">
            <label className="form-label fw-bold">Campaign Name <span className="text-danger">*</span></label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter campaign name"
            />
          </div>
    
          <h5 className="mt-4 mb-3">Financial Information</h5>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label fw-bold">Target Amount ($) <span className="text-danger">*</span></label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label fw-bold">Target Per <span className="text-danger">*</span></label>
              <select className="form-select">
                <option>None</option>
                <option>Semester</option>
                <option>Acadimic Year</option>
              </select>
            </div>
          </div>
    
          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#13897d' }}
            onClick={() => setActiveStep("Upload Photos")}
          >
            Save & Proceed
          </button>
        </div>
      );
    }

    
    if (activeStep === "Upload Photos") {
    
      return (
        <div className="p-4 border rounded">
          <h5 className="mb-4">Upload Campaign Photos</h5>
    
          <div className="mb-3">
            <label className="form-label">Upload Photo</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
            />
          </div>
    
          {/* Preview Section */}
          {photos.length > 0 && (
            <div className="mb-4">
              <h6>Preview:</h6>
              <div className="d-flex flex-wrap gap-3">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo.url}
                    alt={`Preview ${index}`}
                    style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                ))}
              </div>
            </div>
          )}
    
          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#13897d' }}
            onClick={() => setActiveStep("Upload Video")}
          >
            Save & Proceed
          </button>
        </div>
      );
    }

    if (activeStep === "Upload Video") {
    
      return (
        <div className="p-4 border rounded">
          <h5 className="mb-4">Upload Campaign Video</h5>
    
          <div className="mb-3">
            <label className="form-label">Upload Video</label>
            <input
              type="file"
              className="form-control"
              accept="video/*"
              onChange={handleVideoUpload}
            />
          </div>
    
          {video && (
            <div className="mb-4">
              <h6>Preview:</h6>
              <video
                controls
                src={video.url}
                style={{ width: "100%", maxWidth: "600px", borderRadius: "8px", border: "1px solid #ccc" }}
              />
            </div>
          )}
    
          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#13897d' }}
            onClick={() => setActiveStep("Submit Campaign")}
          >
            Save & Proceed
          </button>
        </div>
      );
    }
    
    if (activeStep === "Submit Campaign") {
      return (
        <div className="p-4 border rounded">
          <h5 className="mb-3">Submit Campaign</h5>
    
          <p className="mb-4 text-muted">
            You’ve completed all the required steps. Please review your information before submitting your campaign.
          </p>
    
          <div className="alert alert-info">
            <strong>Note:</strong> Once submitted, your campaign will be sent for review and cannot be edited until approved.
          </div>
    
          <button
            className="btn mt-3 text-white"
            style={{ backgroundColor: '#13897d' }}
            onClick={() => alert("Campaign submitted!")}
          >
            Submit Campaign
          </button>
        </div>
      );
    }
    
    if (activeStep === "Request Payments") {
      const handleSubmitRequest = () => {
        const numericAmount = parseFloat(amount);
    
        if (!recipient || !numericAmount) {
          return alert("Please fill all required fields.");
        }
    
        if (isNaN(numericAmount) || numericAmount <= 0) {
          return alert("Please enter a valid amount.");
        }
    
        if (numericAmount > availableBalance) {
          return alert(`Requested amount exceeds available balance of $${availableBalance}`);
        }
    
        const newRequest = {
          id: Date.now(),
          recipient,
          amount: numericAmount,
          studentId,
          status: "pending",
          timestamp: new Date().toLocaleString(),
        };
    
        setPaymentRequests(prev => [newRequest, ...prev]);
        setAvailableBalance(prev => prev - numericAmount);
    
        setRecipient('');
        setAmount('');
        setStudentId('');
      };
    
      return (
        <div className="p-4 border rounded">
          <h5>Request funds (up to ${availableBalance})</h5>
          <p className="text-muted">
            Payments are processed once a month only. Funds go to Universities or Educational partners only.<br />
            <em>Fields marked with * are required.</em>
          </p>
    
          {/* Render Existing Requests */}
          {paymentRequests.length > 0 && (
            <div className="mb-4">
              <h6 className="mt-3">All Requests</h6>
              <div className="d-flex flex-wrap gap-3">
                {paymentRequests.map(req => (
                  <div
                    key={req.id}
                    className="p-3 bg-light rounded shadow-sm"
                    style={{ minWidth: '220px' }}
                  >
                    <div className="fw-bold">{req.recipient}</div>
                    <div className="text-muted">${req.amount}</div>
                    <div className={req.status === 'sent' ? 'text-success' : 'text-warning'}>
                      {req.status}
                    </div>
                    <div className="small text-dark">{req.timestamp}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
    
          {/* Request Form */}
          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <label className="form-label">Recipient Institution *</label>
              <select
                className="form-select"
                value={recipient}
                onChange={e => setRecipient(e.target.value)}
              >
                <option value="">Select Institution</option>
                <option>MAPS Lebanon</option>
                <option>Lebanese International University</option>
                <option>American University of Beirut</option>
              </select>
            </div>
    
            <div className="col-md-4 mb-3">
              <label className="form-label">Amount (in USD) *</label>
              <input
                type="number"
                className="form-control"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="e.g. 500"
              />
            </div>
    
            <div className="col-md-4 mb-3">
              <label className="form-label">Student ID</label>
              <input
                type="text"
                className="form-control"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                placeholder="Optional"
              />
            </div>
          </div>
    
          <button
            className="btn text-white mt-2"
            style={{ backgroundColor: '#13897d' }}
            onClick={handleSubmitRequest}
          >
            Submit Payment Request
          </button>
        </div>
      );
    }    

const renderCustomSidebarItems = (collapsed) => (
  <div className="d-flex flex-column h-100">
    <ul className="list-unstyled ps-2">
      {steps.map((step, index) => (
        <li
          key={index}
          className={`mb-3 d-flex align-items-center fw-bold ${
            step === activeStep ? 'text-danger bg-light rounded px-2 py-1' : 'text-muted'
          }`}
          style={{ cursor: 'pointer' }}
          onClick={() => setActiveStep(step)}
        >
          <FaCircle className="me-2" size={10} />
          {!collapsed && step}
        </li>
      ))}
    </ul>

    {/* Separate Back to Dashboard item */}
    <div className="mt-auto ps-2 mb-3">
      <li
        className="d-flex align-items-center fw-bold text-muted"
        style={{ cursor: 'pointer' }}
        onClick={() => window.location.href = "/mainfunds"}
      >
        <FaArrowLeft className="me-2" size={12} />
        {!collapsed && "Back to Dashboard"}
      </li>
    </div>
  </div>
);


    return (
      <div className="text-muted">
        <h5>{activeStep}</h5>
        <p>This section will be built soon.</p>
      </div>
    );
  };

  return (
    <div className="main-layout d-flex">
      <Sidebar customItems={renderCustomSidebarItems} />
      <div className="main-panel d-flex flex-column flex-grow-1">
        <div className="top-navbar d-flex align-items-center px-4" style={{ backgroundColor: '#13897d', height: '60px' }}>
          <h5 className="text-white fw-bold mb-0">Build Your Campaign</h5>
        </div>
        <div className="flex-grow-1 p-4">
          {renderStepContent()}
        </div>
      </div>
    </div>
  );
};

export default BuildYourCampaign;
