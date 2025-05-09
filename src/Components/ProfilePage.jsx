import React, { useState } from 'react';
import profilePlaceholder from '../images/Campaign2.jpg'; // default image
import '../Css/ProfilePage.css';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(profilePlaceholder);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h4 className="text-center mb-3">Profile</h4>

        <div className="text-center mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-circle mb-2"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <br />
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <label htmlFor="fileInput" className="btn custom-profile-btn px-4 py-1">
            Change
          </label>
        </div>

        <form>
          <div className="row g-3">
            <div className="col-md-4"><input type="text" className="form-control" placeholder="First Name" /></div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Last Name" /></div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Middle Name" /></div>

            <div className="col-md-4"><input type="password" className="form-control" placeholder="Password" /></div>
            <div className="col-md-4"><input type="date" className="form-control" placeholder="Birthdate" /></div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Country of Birth" /></div>

            <div className="col-md-4">
              <select className="form-select">
                <option>Nationality</option>
                <option>Moroccan</option>
                <option>American</option>
              </select>
            </div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="City/State of Origin" /></div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="City of Birth" /></div>

            <div className="col-md-4"><input type="text" className="form-control" placeholder="Country of Residence" /></div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="City of Residence" /></div>
            <div className="col-md-4"><input type="text" className="form-control" placeholder="Address" /></div>

            <div className="col-md-4">
              <select className="form-select">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="col-md-8"><input type="text" className="form-control" placeholder="LinkedIn Profile Link" /></div>
          </div>

          <div className="text-end mt-4">
            <button type="submit" className="btn custom-profile-btn px-4">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;