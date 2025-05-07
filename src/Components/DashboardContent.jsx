import React from 'react';

const DashboardContent = () => (
  <div className="dashboard-content p-4">
    <div className="d-flex justify-content-between">
      <div className="campaign-box p-3 shadow-sm rounded bg-light">
        <h6 className="mb-1">My Campaigns</h6>
        <p className="text-danger mb-0">No Campaigns Yet</p>
      </div>
      <div className="about-box p-3 shadow-sm rounded bg-light">
        <h6 className="mb-1">About</h6>
        <p className="text-success fw-bold mb-0">Abdelhadi Sahyouni</p>
        <p className="small text-dark mb-0">alexandergrantids@gmail.com</p>
        <img src="/profile.png" alt="Profile" className="profile-image" />
      </div>
    </div>
  </div>
);

export default DashboardContent;
