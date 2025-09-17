import React, { useState } from 'react';
import './locationtable.css';
import AddLocation from "./AddLocation"; // ✅ Import your popup page

import { useNavigate } from "react-router-dom";
import searchIcon from "../components/assets/Vector.png";

const data = Array.from({ length: 50 }, (_, i) => ({
  id: 34569,
  locationName: 'Allbaron Rides',
  address1: 'Amman',
  address2: 'Jordan',
  phoneNumber: '+99 3456 8976'
}));

const LocationTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ popup state

  const filtered = data.filter(
    (row) =>
      row.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.address1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.address2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phoneNumber.includes(searchTerm)
  );

  // ✅ Function to open modal
  const handleAddLocation = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  // ✅ Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="separated-table-container">
      {/* Top Bar with Search and Buttons */}
      <div className="separated-top-bar">
        <div className="separated-search-container">
          <img src={searchIcon} alt="Search" className="separated-search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="separated-search-input"
            placeholder="Search"
          />
        </div>
        
        <div className="separated-action-buttons">
          <button 
            className="separated-btn separated-btn-add"
            onClick={handleAddLocation} // ✅ Changed to open modal instead of navigate
          >
            Add
          </button>
          <button className="separated-btn separated-btn-refresh">Refresh</button>
          <button className="separated-btn separated-btn-close">Close</button>
        </div>
      </div>

      {/* Separated Table Header */}
      <div className="separated-table-header">
        <div className="separated-header-cell separated-col-id">
          <span>Id</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-location">
          <span>Location name</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-address1">
          <span>Address 1</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-address2">
          <span>Address 2</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-phone">
          <span>Phone number</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
      </div>

      {/* Separated Table Content */}
      <div className="separated-table-content">
        {filtered.map((row, index) => (
          <div key={index} className={`separated-table-row ${index % 2 === 1 ? 'separated-row-yellow' : ''}`}>
            <div className="separated-cell separated-col-id">{row.id}</div>
            <div className="separated-cell separated-col-location">{row.locationName}</div>
            <div className="separated-cell separated-col-address1">{row.address1}</div>
            <div className="separated-cell separated-col-address2">{row.address2}</div>
            <div className="separated-cell separated-col-phone">{row.phoneNumber}</div>
          </div>
        ))}
      </div>

      {/* ✅ Modal Overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <AddLocation onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default LocationTable;