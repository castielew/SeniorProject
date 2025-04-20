import React from 'react'
import trueSvg from '../images/true.svg'
import money from '../images/money.svg'
import location from '../images/location.svg'
import '../Css/Notes.css'

function Notes() {
  return (
    <div className='Notes'>
        <div className="row  ">
          <div className="col-lg-4 col-md-6 d-flex  justify-content-center">
              <img src={trueSvg} alt="" srcset="" id='hideMe' />
              <p className='mt-3' id='hideMe'>No fee to start fundraising</p>
          </div>

          <div className="col-lg-4 col-md-6 d-flex  justify-content-center">
              <img src={money} alt="" srcset="" />
              <p className='mt-3' id='getClose'>Get help completing education</p>
          </div>

          <div className="col-lg-4 col-md-6  d-flex  justify-content-center">
              <img src={location} alt="" srcset="" id='hideMe' />
              <p className='mt-3' id='hideMe'>Meet a wide community</p>
          </div>
        </div>
    </div>
  )
}

export default Notes