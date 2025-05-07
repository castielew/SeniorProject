import React from 'react';
import '../Css/ProfilePage.css'; // Custom CSS
import profilePic from '../images/logo.svg'; // Replace with your real path

const ProfilePage = () => {
  return (
    <div className="profile-page container mt-4">
      <div className="card p-4 shadow-sm">
        <h4 className="text-center mb-3">Profile</h4>
        <div className="text-center mb-4">
          <img src={profilePic} alt="Profile" className="profile-avatar mb-2" />
          <br />
          <button className="btn btn-success btn-sm">Change</button>
        </div>

        <form>
          <div className="row g-3">
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="First Name" required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Last Name" required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Middle Name" />
            </div>

            <div className="col-md-4">
              <input type="password" className="form-control" placeholder="Password" required />
            </div>
            <div className="col-md-4">
              <input type="date" className="form-control" placeholder="Birthdate" required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Country of Birth" required />
            </div>

            <div className="col-md-4">
              <select className="form-select" required>
                <option value="">Nationality</option>
                <option>American</option>
                <option>Moroccan</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="City/State of Origin" />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="City of Birth" required />
            </div>

            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Country of Residence" required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="City of Residence" required />
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Address" required />
            </div>

            <div className="col-md-4">
              <select className="form-select" required>
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="col-md-8">
              <input type="text" className="form-control" placeholder="LinkedIn Profile Link" />
            </div>
          </div>

          <div className="text-end mt-4">
            <button type="submit" className="btn btn-success">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
