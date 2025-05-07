import React from 'react';
import "../Css/Dashboard.css";

const TopNavbar = ({ onWriteBlog }) => (
  <div className="top-navbar d-flex justify-content-between align-items-center px-4">
    <div className="navbar-title text-white fw-bold">Dashboard</div>
    <div className="d-flex align-items-center gap-3">
      <button
        className="btn btn-light btn-sm fw-bold text-success"
        onClick={onWriteBlog}
      >
        Write a blog
      </button>
      <button className="btn btn-light btn-sm fw-bold text-success">Start a Campaign</button>
      <div className="navbar-user text-white fw-bold">Abdelhadi</div>
      <img src="/avatar.png" alt="Avatar" className="navbar-avatar" />
    </div>
  </div>
);

export default TopNavbar;
