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
    <div className="userrole-modal-overlay">
      <div className="userrole-modal-container">
        {/* Header */}
        <div className="userrole-modal-header">
          <div className="userrole-header-content">
            <div className="userrole-star-icon">
              <img src={userroleIcon} alt="User Role" className="userrole-user-details-close" />
            </div>
            <h2 className="userrole-modal-title">User Role Setup</h2>
          </div>
          <button onClick={() => navigate("/userrole")} className="userrole-close-button">
            <img src={cancelIcon} alt="Close" className="userrole-user-details-close" />
          </button>
        </div>

        <div className="userrole-modal-body">
          {/* General Settings Section */}
          <div className="userrole-section">
            <div className="userrole-section-header">
              <h3>General Settings</h3>
            </div>
            <div className="userrole-general-settings-content">
              {/* First row: ID and User Role */}
              <div className="userrole-form-row">
                <div className="userrole-form-group userrole-id-group">
                  <label>ID</label>
                  <input
                    type="text"
                    value="120"
                    className="userrole-form-input userrole-id-input"
                    readOnly
                  />
                </div>
                <div className="userrole-form-group userrole-user-role-group">
                  <label>User Role</label>
                  <input
                    type="text"
                    value={userRole}
                    onChange={(e) => setUserRole(e.target.value)}
                    className="userrole-form-input userrole-user-role-input"
                  />
                </div>
              </div>
              
              {/* Second row: Description */}
              <div className="userrole-form-row">
                <div className="userrole-form-group userrole-description-group">
                  <label>Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="userrole-form-input userrole-description-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Application and Description Sections */}
          <div className="userrole-two-column-layout">
            {/* Application Section */}
            <div className="userrole-section">
              <div className="userrole-section-header">
                <h3>Application</h3>
              </div>
              <div className="userrole-section-content">
                <div className="userrole-scrollable-list">
                  {applicationItems.map((item, index) => (
                    <div
                      key={index}
                      className={`userrole-list-item ${
                        item === selectedApp ? 'userrole-selected' : ''
                      } ${item === 'Product Definitions' ? 'userrole-outlined' : ''}`}
                      onClick={() => setSelectedApp(item)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description Section */}
            <div className="userrole-section">
              <div className="userrole-section-header">
                <h3>Description</h3>
              </div>
              <div className="userrole-section-content">
                <div className="userrole-scrollable-list">
                  {descriptionItems.map((item, index) => (
                    <div key={index} className="userrole-description-item">
                      <div className="userrole-checkbox-icon">
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
          <div className="userrole-button-group">
            <button className="userrole-btn userrole-btn-save">Save</button>
            <button className="userrole-btn userrole-btn-okay">Okay</button>
            <button className="userrole-btn userrole-btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRoleSetup;