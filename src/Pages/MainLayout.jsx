import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import TopNavbar from '../Components/TopNavbar';
import DashboardContent from '../Components/DashboardContent';
import ProfilePage from '../Components/ProfilePage';
import StudentsFile from '../Components/StudentsFile';
import StudentBlog from '../Components/StudentBlog';
import BlogEditor from '../Pages/BlogEditor';
import CreateCampaign from '../Components/CreateCampaign';
import "../Css/Dashboard.css";

const MainLayout = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardContent />;
      case 'profile':
        return <ProfilePage />;
      case 'files':
        return <StudentsFile />;
      case 'blog':
        return <StudentBlog onAdd={() => setActivePage('writeBlog')} />;
      case 'writeBlog':
        return <BlogEditor onBack={() => setActivePage('blog')} />;
      case 'createCampaign':
        return <CreateCampaign />;
      default:
        return <DashboardContent />;
    }
  };
  
  

  return (
    <div className="main-layout d-flex">
      <Sidebar onNavigate={setActivePage} />
      <div className="main-panel d-flex flex-column flex-grow-1">
      <TopNavbar
          pageTitle={activePage === 'createCampaign' ? 'Campaigns' : activePage}
          onWriteBlog={() => setActivePage('writeBlog')}
          onStartCampaign={() => setActivePage('createCampaign')}
      />

        <div className="flex-grow-1 p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
