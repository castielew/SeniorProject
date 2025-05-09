import React, { useEffect } from 'react';
import '../Css/AddFileModal.css';

const AddFileModal = ({ onClose }) => {
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        onClose();
      }
    };
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h5 className="mb-3">Add New File</h5>
        <form>
          <div className="mb-3">
            <label className="form-label">File *</label>
            <input type="file" className="form-control" />
          </div>

          <div className="row g-3 mb-3">
            <div className="col-md-8">
              <label className="form-label">File Name *</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Fund</label>
              <select className="form-select">
                <option value="">Select</option>
                <option>Education</option>
                <option>Relief</option>
                <option>Medical</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" rows="2" />
          </div>

          <button type="submit" className="btn custom-modal-add-btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddFileModal;
