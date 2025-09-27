import React, { useState } from 'react';
import './displaygroupadd.css';
import ConsoleIcon from '../../components/assets/console.png';

const DisplayGroupAdd = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    group: '',
    image: null,
    imagePreview: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: file.name
      }));
    }
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      name: '',
      group: '',
      image: null,
      imagePreview: ''
    });
    if (onClose) {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <img src={ConsoleIcon} alt="Console Icon" className="modal-icon" />
            <h2 className="modal-title">New Group</h2>
          </div>
          <button className="close-btn" onClick={handleClose}>
            <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Details Section */}
        <div className="details-section">
          <h3 className="details-title">Details</h3>
        </div>

        {/* Details Container */}
        <div className="details-container">
          {/* Form Content */}
          <div className="form-content">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Trampoline"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="group">Group</label>
              <input
                type="text"
                id="group"
                name="group"
                className="form-input"
                placeholder="Products/Climbing Wall/Low height/"
                value={formData.group}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Image</label>
              <div className="image-upload-section">
                <div className="file-input-container">
                  <div className="file-input-wrapper">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="file-input"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="image" className="file-input-label">
  <div className="file-input-left-section">
    <span className="file-input-text">Choose File</span>
  </div>
  <div className="file-input-separator"></div>
  <div className="file-input-right-section">
    <span className="file-preview-text">
      {formData.imagePreview || 'Trampoline.jpg'}
    </span>
  </div>
</label>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* ✅ closed .form-content */}

        
          
        </div>
        <div className="modal-actions">
            <button className="action-button save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="action-button close-action-btn" onClick={handleClose}>
              Close
            </button>
          </div>
      </div>
      
    </div>
    
  );
};

export default DisplayGroupAdd;
