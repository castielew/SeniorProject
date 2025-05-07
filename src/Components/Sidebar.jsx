import React, { useState } from 'react';
import { FaTachometerAlt, FaBullhorn, FaBlog, FaFile, FaUser, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../Css/Dashboard.css';
import logo from '../images/logo.svg';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`app-sidebar ${collapsed ? 'collapsed' : ''} bg-light p-3`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {collapsed ? <FaAngleRight /> : <FaAngleLeft />}
      </div>
      <div className="text-center mb-4">
        {!collapsed && <img src={logo} alt="Logo" className="sidebar-logo" />}
      </div>
      <ul className="list-unstyled sidebar-menu">
        <li className="mb-3"><FaTachometerAlt className="me-2" /> {!collapsed && 'Dashboard'}</li>
        <li className="mb-3"><FaBullhorn className="me-2" /> {!collapsed && 'Campaigns'}</li>
        <li className="mb-3"><FaBlog className="me-2" /> {!collapsed && 'Blogs'}</li>
        <li className="mb-3"><FaFile className="me-2" /> {!collapsed && 'Files'}</li>
        <li className="mb-3"><FaUser className="me-2" /> {!collapsed && 'Profile'}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
