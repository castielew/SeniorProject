import React from 'react'
import "../Css/Home.css";
import { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Notes from '../Components/Notes';
import Newsletter from '../Components/Newsletter';
import Welcome from '../Components/Welcome';
import Home1 from '../Components/Home1';
import SeedFunds from '../Components/SeedFunds';
import HomeCampaigns from '../Components/HomeCampaigns';
function Home() {
    useEffect(()=>{
document.body.style.backgroundColor=""



    })
  return (
<div className="home ">
<NavBar></NavBar>
<Welcome></Welcome>
<Notes></Notes>
<HomeCampaigns></HomeCampaigns>
<Home1></Home1>
<SeedFunds></SeedFunds>
<Newsletter></Newsletter>
<Footer></Footer>
</div>
  )
}

export default Home