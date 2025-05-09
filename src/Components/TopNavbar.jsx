import React, { useState, useRef, useEffect } from 'react';
import "../Css/Dashboard.css";
import campaign2 from "../images/Campaign2.jpg";
import { FaSignOutAlt } from 'react-icons/fa';

const TopNavbar = ({ pageTitle, onWriteBlog, onStartCampaign, hideUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const userRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    alert("Logging out..."); // Replace with real logout logic
  };

  return (
    <div className="top-navbar d-flex justify-content-between align-items-center px-4">
      <div className="navbar-title text-white fw-bold text-capitalize">
        {pageTitle}
      </div>

      {!hideUser && (
        <div className="d-flex align-items-center gap-3" ref={userRef}>
          <button
            className="btn custom-green-btn btn-sm fw-bold"
            onClick={onWriteBlog}
          >
            Write a blog
          </button>

          <button
            className="btn custom-green-btn btn-sm fw-bold"
            onClick={onStartCampaign}
          >
            Start a Campaign
          </button>

          <div
            className="d-flex align-items-center gap-2 navbar-user text-white fw-bold position-relative"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{ cursor: 'pointer' }}
          >
            Abdelhadi
            <img src={campaign2} alt="Avatar" className="navbar-avatar" />

            {dropdownOpen && (
              <div className="dropdown-menu-custom shadow-sm">
                <button
                  className="dropdown-item d-flex align-items-center gap-2"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;