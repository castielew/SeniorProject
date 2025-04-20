import React from 'react'
import "../Css/Newsletter.css"
function Newsletter() {
  return (
<div className="Newsletter my-4 ">
    <div className="container py-4">
<h3 className=' text-center '> Want to hear our news?</h3>
<p className=' text-center '> Subscribe to our newsletter </p>
<div className="row text-center my-3 justify-content-center "> 
 <div className="col-12  ">
  <input type="text" className='mx-2  col-5 col-lg-4' placeholder=' First Name' />
  <input type="text" className='mx-2 col-5 col-lg-4' placeholder=' Last Name' />
</div>
</div>


<div className="row text-center my-3 justify-content-center  "> 
<div className="col-12 ">
  <input type="text" className='col-7 col-lg-6' placeholder='Enter Your Email ' />
 <input type="submit" className=' col-3 col-lg-2 submitButton' value="Subscribe" />
</div>
</div>
<p className='text-center '> By clicking subscribe, you're agreeing to our <span>terms of use</span></p>
    </div>
</div>
  )
}

export default Newsletter