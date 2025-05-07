import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs";
import Campaigns from "./Pages/Campaigns";
import CampaignDetails from "./Pages/CampaignDetails";
import Funds from "./Pages/Funds";
import MainLayout from "./Pages/MainLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/funds" element={<Funds/>}/>
        <Route path="/mainfunds" element={<MainLayout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
