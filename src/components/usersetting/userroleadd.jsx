import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './userroleadd.css';
import cancelIcon from '../../components/assets/iconoir_cancel.png'; 
import userroleIcon from "../../components/assets/userroleIcon.png";

const UserRoleSetup = () => {
  const [selectedApp, setSelectedApp] = useState('Back Office System');
  const [userRole, setUserRole] = useState('System Administrator');
  const [description, setDescription] = useState('Redemption');
  const navigate = useNavigate();
  const applicationItems = [
    'POS Software',
    'Back Office System',
    'Product Definitions',
    'Security',
    'Memberships/Rewards',
    'Block Access Profile',
    'Game settings',
    'Location Table'
  ];

  const descriptionItems = [
    'Add ERP Points',
    'Add/Edit Cash Card Definition',
    'Add/Edit Corp Redemption Monetary Value',
    'Add/Edit Gate Passes Definition',
    'Add/Edit General Merchandise Product Definition',
    'Add/Edit Corp Package Deal Definition',
    'Add/Edit Gate Promo codes Definition',
    'Add/Edit Promotions Definition'
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="header-content">
            <div className="star-icon">
              <img src={userroleIcon} alt="User Role" className="user-details-close" />
            </div>
            <h2 className="modal-title">User Role Setup</h2>
          </div>
          <button onClick={() => navigate("/userrole")} className="close-button">
            <img src={cancelIcon} alt="Close" className="user-details-close" />
          </button>
        </div>

        <div className="modal-body">
          {/* General Settings Section */}
          <div className="section">
            <div className="section-header">
              <h3>General Settings</h3>
            </div>
            <div className="general-settings-content">
              {/* First row: ID and User Role */}
              <div className="form-row">
                <div className="form-group id-group">
                  <label>ID</label>
                  <input
                    type="text"
                    value="120"
                    className="form-input id-input"
                    readOnly
                  />
                </div>
                <div className="form-group user-role-group">
                  <label>User Role</label>
                  <input
                    type="text"
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="form-input user-role-input"
                  />
                </div>
              </div>
              
              {/* Second row: Description */}
              <div className="form-row">
                <div className="form-group description-group">
                  <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-input description-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Application and Description Sections */}
          <div className="two-column-layout">
            {/* Application Section */}
            <div className="section">
              <div className="section-header">
                <h3>Application</h3>
              </div>
              <div className="section-content">
                <div className="scrollable-list">
                  {applicationItems.map((item, index) => (
                    <div
                      key={index}
                      className={`list-item ${
                        item === selectedApp ? 'selected' : ''
                      } ${item === 'Product Definitions' ? 'outlined' : ''}`}
                      onClick={() => setSelectedApp(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="section">
              <div className="section-header">
                <h3>Description</h3>
              </div>
              <div className="section-content">
                <div className="scrollable-list">
                  {descriptionItems.map((item, index) => (
                    <div key={index} className="description-item">
                      <div className="checkbox-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Reordered to Save, Okay, Cancel */}
          <div className="button-group">
            <button className="btn btn-save">Save</button>
            <button className="btn btn-okay">Okay</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleSetup;