import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import AddFileModal from '../Components/AddFileModal';
import '../Css/StudentsFile.css';

const StudentsFile = () => {
  const [showModal, setShowModal] = useState(false);
  const totalRecords = 0;
  const emptyRows = Array.from({ length: 5 });

  return (
    <div className="container mt-4">
      {showModal && <AddFileModal onClose={() => setShowModal(false)} />}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="mb-0">Files</h4>
        <button
          className="btn custom-add-btn d-flex align-items-center gap-2"
          onClick={() => setShowModal(true)}
        >
          <FaPlus />
          Add
        </button>
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <p className="mb-1 text-muted">Total Records</p>
            <h3 className="mb-0">{totalRecords}</h3>
          </div>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered custom-table">
          <thead className="table-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Fund</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {emptyRows.map((_, i) => (
              <tr key={i}>
                <td></td><td></td><td></td><td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsFile;