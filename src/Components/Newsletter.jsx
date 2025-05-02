import React from 'react';
import "../Css/Newsletter.css";

function Newsletter() {
  return (
    <div className="Newsletter my-4">
      <div className="container py-5">
        <h3 className="text-center">Want to hear our news?</h3>
        <p className="text-center">Subscribe to our newsletter</p>

        <form className="row justify-content-center g-3">
          
          <div className="col-12 col-md-5 col-lg-4">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>

          
          <div className="col-12 col-md-10 col-lg-8">
            <div className="input-group">
              <input
                type="email"
                className="form-control email-input"
                placeholder="Enter Your Email"
              />
              <button type="submit" className="btn submitButton">
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <p className="text-center mt-3">
          By clicking subscribe, you're agreeing to our <span>terms of use</span>
        </p>
      </div>
    </div>
  );
}

export default Newsletter;