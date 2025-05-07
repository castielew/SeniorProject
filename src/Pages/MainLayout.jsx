import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import TopNavbar from '../Components/TopNavbar';
import ProfilePage from '../Components/ProfilePage';
import BlogEditor from '../Pages/BlogEditor';
import "../Css/Dashboard.css";

const MainLayout = () => {
  const [showBlogEditor, setShowBlogEditor] = useState(false);

  if (showBlogEditor) {
    return <BlogEditor />;
  }

  return (
    <div className="main-layout d-flex">
      <Sidebar />
      <div className="main-panel d-flex flex-column flex-grow-1">
        <TopNavbar onWriteBlog={() => setShowBlogEditor(true)} />
        <div className="flex-grow-1 p-4">
          <ProfilePage />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
