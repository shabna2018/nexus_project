import React, { useState } from 'react';
import './locationtable.css';
import AddLocation from "./AddLocation";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filtered = data.filter(
    (row) =>
      row.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.address1.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.address2.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.phoneNumber.includes(searchTerm)
  );

  const handleAddLocation = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="location-table-container">
      {/* Top Bar with Search and Buttons */}
      <div className="location-top-bar">
        <div className="location-search-container">
          <img src={searchIcon} alt="Search" className="location-search-icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="location-search-input"
            placeholder="Search"
          />
        </div>
        
        <div className="location-action-buttons">
          <button 
            className="location-btn location-btn-add"
            onClick={handleAddLocation}
          >
            Add
          </button>
          <button className="location-btn location-btn-refresh">Refresh</button>
          <button className="location-btn location-btn-close">Close</button>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="location-table-wrapper">
        {/* Table Header */}
        <div className="location-table-header">
          <div className="location-header-cell location-col-id">
            <span>Id</span>
            <div className="location-sort-arrows">
              <div className="location-arrow-up"></div>
              <div className="location-arrow-down"></div>
            </div>
          </div>
          <div className="location-header-cell location-col-location">
            <span>Location name</span>
            <div className="location-sort-arrows">
              <div className="location-arrow-up"></div>
              <div className="location-arrow-down"></div>
            </div>
          </div>
          <div className="location-header-cell location-col-address1">
            <span>Address 1</span>
            <div className="location-sort-arrows">
              <div className="location-arrow-up"></div>
              <div className="location-arrow-down"></div>
            </div>
          </div>
          <div className="location-header-cell location-col-address2">
            <span>Address 2</span>
            <div className="location-sort-arrows">
              <div className="location-arrow-up"></div>
              <div className="location-arrow-down"></div>
            </div>
          </div>
          <div className="location-header-cell location-col-phone">
            <span>Phone number</span>
            <div className="location-sort-arrows">
              <div className="location-arrow-up"></div>
              <div className="location-arrow-down"></div>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="location-table-content">
          {filtered.map((row, index) => (
            <div key={index} className={`location-table-row ${index % 2 === 1 ? 'location-row-yellow' : ''}`}>
              <div className="location-cell location-col-id">{row.id}</div>
              <div className="location-cell location-col-location">{row.locationName}</div>
              <div className="location-cell location-col-address1">{row.address1}</div>
              <div className="location-cell location-col-address2">{row.address2}</div>
              <div className="location-cell location-col-phone">{row.phoneNumber}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="location-modal-overlay">
          <AddLocation onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default LocationTable;