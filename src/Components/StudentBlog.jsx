import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../Css/StudentBlog.css';

const StudentBlog = ({ onAdd }) => {
    const totalRecords = 0;
    const emptyRows = Array.from({ length: 5 });
  
    return (
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Blogs</h4>
          <button
            className="btn blog-add-btn d-flex align-items-center gap-2"
            onClick={onAdd}
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
        <table className="table table-bordered blog-table">
        <thead className="table-light">
        <tr>
            <th>ID</th>
            <th className="w-title">Title</th> {/* Add class */}
            <th>Status</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {emptyRows.map((_, index) => (
            <tr key={index}>
            <td></td>
            <td className="w-title"></td> {/* Match class */}
            <td></td>
            <td></td>
            </tr>
        ))}
        </tbody>

        </table>
      </div>
    </div>
  );
};

export default StudentBlog;