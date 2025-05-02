import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blogs from "./Pages/Blogs"
import Campaigns from "./Pages/Campaigns"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/campaigns" element={<Campaigns />} />


      </Routes>
    </Router>
  );
}

export default App;
