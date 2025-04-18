import React from 'react'
import "../Css/Home.css";
import { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Notes from '../Components/Notes';
import Newsletter from '../Components/Newsletter';
function Home() {
    useEffect(()=>{
document.body.style.backgroundColor=""



    })
  return (
<div className="home ">
<NavBar></NavBar>
<Notes></Notes>
<Footer></Footer>
</div>
  )
}

export default Home