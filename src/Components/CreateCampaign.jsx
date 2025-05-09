import React from 'react';
import '../Css/CreateCampaign.css'; // Optional: for styles
import { useNavigate } from 'react-router-dom';
const CreateCampaign = () => {
  const handleEdit = () => {
    alert('Edit functionality coming soon!');
  };
  const navigate = useNavigate();
  return (
    <div className="container mt-4">
      <h4 className="mb-4 fw-bold text-capitalize">Campaigns</h4>

      <div className="card p-3 shadow-sm">
        <p className="text-muted mb-1">Created at: 2025-03-10 18:56:19</p>
        <h5 className="fw-bold mb-1">Dream to Change the world</h5>
        <p className="text-danger small mb-1">draft</p>
        <p className="mb-1">Campaign Information has not been added yet!</p>
        <p className="text-danger small">0 Comments</p>

        <button
          className="btn btn-sm fw-bold w-100"
          style={{ backgroundColor: '#13897d', color: 'white' }}
          onClick={() => navigate('/buildyourcampaign')}
        >
          EDIT
        </button>


      </div>
    </div>
  );
};

export default CreateCampaign;