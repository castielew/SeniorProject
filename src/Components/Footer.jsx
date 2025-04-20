import React from 'react';
import '../Css/Footer.css';
import wlogo from '../images/wlogo.svg';
import { Link } from 'react-router-dom';
import image2 from '../images/image2.png';
import svg1 from '../images/facebook.svg';
import svg2 from '../images/instagram.svg';
import svg3 from '../images/linkedin.svg';
import svg4 from '../images/twitter.svg';

function Footer() {
  return (
    <div className="Footer">
      <div className="d-flex">
        <div>
          <ul>
            <li>
              <Link to="/">
                <img src={wlogo} alt="Logo" className="img-fluid" style={{ width: '120px' }} />
              </Link>
            </li>
            <li>
              <img src={image2} alt="Badge" className="img-fluid" style={{ width: '120px' }} />
            </li>
          </ul>
        </div>


          <ul className="footer-links">
            <li id="Get_In">Get Involved</li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About Sandini</Link></li>
            <li><Link to="/blogs">Blog+</Link></li>
            <li><Link to="/funds">Funds</Link></li>
            <li><Link to="/campaigns">Campaigns</Link></li>
          </ul>

        <ul className="social-icons">
          <li>Follow us</li>
          <div className="social-row">
            <li><a href=""><img src={svg1} alt="facebook" className="svg" /></a></li>
            <li><a href=""><img src={svg2} alt="instagram" className="svg" /></a></li>
            <li><a href=""><img src={svg3} alt="linkedin" className="svg" /></a></li>
            <li><a href=""><img src={svg4} alt="twitter" className="svg" /></a></li>
          </div>
        </ul>
      </div>

      <hr/>

      <div className="d-flex justify-content-center">
        <p>©2025 Sanidni. All rights reserved. Unauthorized use or reproduction is prohibited.</p>
      </div>
    </div>
  );
}

export default Footer;