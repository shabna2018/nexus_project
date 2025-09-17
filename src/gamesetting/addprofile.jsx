// AddProfileModal.js
import React, { useState } from 'react';
import './addprofile.css';
import cancelIcon from '../components/assets/iconoir_cancel.png';
import closeIcon from '../components/assets/close.png';
import accessProfileIcon from '../components/assets/accessprofile.png';
import { useNavigate } from 'react-router-dom';
import AccessProfileAddGamesModal from './accessprofileadd'; // Import the new modal

const AddProfileModal = () => {
  const [formData, setFormData] = useState({
    id: '1234',
    active: true,
    profile: '',
    description: ''
  });

  const [categories, setCategories] = useState([
    { id: 1, name: 'Redemption', checked: true },
    { id: 2, name: 'Arcade', checked: true },
    { id: 3, name: 'Attraction', checked: true },
    { id: 4, name: 'Redemption', checked: true },
    { id: 5, name: 'Checked', checked: true },
    { id: 1, name: 'Redemption', checked: true },
    { id: 2, name: 'Arcade', checked: true },
    { id: 3, name: 'Attraction', checked: true },
    { id: 4, name: 'Redemption', checked: true },
    { id: 5, name: 'Arcade', checked: true }
  ]);

  // State for Add Games modal
  const [isAddGamesModalOpen, setIsAddGamesModalOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategoryChange = (categoryId) => {
    setCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, checked: !cat.checked }
          : cat
      )
    );
  };
  
  const navigate = useNavigate(); 
  
  const handleSave = () => {
    console.log('Saving profile:', formData);
    console.log('Selected categories:', categories.filter(cat => cat.checked));
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  const handleAddGames = () => {
    setIsAddGamesModalOpen(true);
  };

  const handleCloseAddGamesModal = () => {
    setIsAddGamesModalOpen(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        {/* Header */}
        <div className="modal-header">
          <div className="header-left">
            <img src={accessProfileIcon} alt="Access Profile" className="access-profile-icon" />
            <h2 className="modal-title">Add Profile</h2>
          </div>
          <button onClick={() => navigate("/accessprofile")} className="item-add-close-button-item">
            <img src={cancelIcon} alt="Close" className="item-add-close-icon-item" />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          <div className="content-grid">
            {/* Profile Box */}
            <div className="profile-box">
              <h3 className="section-header">Profile</h3>
              
              <div className="form-fields">
                {/* Horizontal Row: ID, Active, Profile */}
                <div className="horizontal-field-row">
                  {/* ID Field */}
                  <div className="horizontal-field-item">
                    <label className="field-label">ID</label>
                    
                    <input
                      type="text"
                      value={formData.id}
                      onChange={(e) => handleInputChange('id', e.target.value)}
                      className="field-input"
                      placeholder="1234"
                    />
                  </div>

                  {/* Active Checkbox */}
                  <div className="horizontal-field-item">
                    <label className="field-label">Active</label>
                    <div className="checkbox-container">
                      <input
                        type="checkbox"
                        id="active-checkbox"
                        checked={formData.active}
                        onChange={(e) => handleInputChange('active', e.target.checked)}
                        className="checkbox-input"
                      />
                      <label htmlFor="active-checkbox" className="checkbox-custom"></label>
                    </div>
                  </div>

                  {/* Profile Field */}
                  <div className="horizontal-field-item">
                    <label className="field-label">Profile</label>
                    <input
                      type="text"
                      value={formData.profile}
                      onChange={(e) => handleInputChange('profile', e.target.value)}
                      className="field-input"
                    />
                  </div>
                </div>

                {/* Description Field - Separate Row */}
                <div className="field-row">
                  <label className="field-label description-label">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="field-textarea"
                  />
                </div>
              </div>
            </div>

            {/* Select Category Box - Updated Structure */}
            <div className="category-box">
              {/* Category Header with two sections */}
              <div className="category-header">
                <div className="category-header-section category-select-section">
                  Select
                </div>
                <div className="category-header-section category-title-section">
                  Category
                </div>
              </div>
              
              {/* Category List */}
              <div className="category-list">
                {categories.map((category) => (
                  <div key={category.id} className="category-item">
                    <div className="category-checkbox-section">
                      <div className="checkbox-container">
                        <input
                          type="checkbox"
                          id={`category-${category.id}`}
                          checked={category.checked}
                          onChange={() => handleCategoryChange(category.id)}
                          className="checkbox-input"
                        />
                        <label htmlFor={`category-${category.id}`} className="checkbox-custom"></label>
                      </div>
                    </div>
                    <div className="category-name-section">
                      <span className="category-name">{category.name}</span>
                    </div>
                    <div className="category-remove-section">
                       <img src={closeIcon} alt="Close" className="close-icon" />
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="footer-section">
            <div className="footer-info">
              <div className="info-item">
                <span className="info-label">Last Updated Date:</span>
                <span className="info-value">09-Nov-2024</span>
              </div>
              <div className="info-item">
                <span className="info-label">Last Updated User:</span>
                <span className="info-value">Ahmed Jaseel</span>
              </div>
            </div>
            <button onClick={handleAddGames} className="add-games-button">
              Add Games
            </button>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button onClick={handleSave} className="save-button">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Add Games Modal */}
      <AccessProfileAddGamesModal 
        isOpen={isAddGamesModalOpen} 
        onClose={handleCloseAddGamesModal} 
      />
    </div>
  );
};

export default AddProfileModal;