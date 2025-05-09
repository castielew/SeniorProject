import React from 'react';
import campaign2 from "../images/Campaign2.jpg";

const DashboardContent = () => (
  <div className="dashboard-content p-4">
    <div className="d-flex justify-content-between">
      <div className="campaign-box p-3 shadow-sm rounded bg-light">
        <h6 className="mb-1">My Campaigns</h6>
        <p className="text-danger mb-0">No Campaigns Yet</p>
      </div>

      <div className="about-box p-3 shadow-sm rounded bg-light d-flex align-items-center justify-content-between" style={{ minWidth: '300px' }}>
        <div>
          <h6 className="mb-1">About</h6>
          <p className="fw-bold mb-0" style={{ color: '#13897d' }}>Abdelhadi Sahyouni</p>
          <p className="small text-dark mb-0">alexandergrantids@gmail.com</p>
        </div>

        <img
          src={campaign2}
          alt="Profile"
          className="rounded-circle"
          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
        />
      </div>
    </div>
  </div>
);

export default DashboardContent;
