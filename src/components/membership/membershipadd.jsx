import React, { useState } from 'react';
import { X } from 'lucide-react';
import './membershipadd.css';

const MembershipSetup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    active: true,
    id: '23',
    membership: 'Gold Member',
    discount: '23%',
    description: 'Valid only for VIP Customer',
    validForNewly: true,
    membershipType: 'Auto Earned Based Program',
    startingDate: '09-05-2025',
    endDate: '29-05-2025',
    duration: '12',
    spendingLevel: '12 JOD',
    programDuration: '365',
    registrationRequired: true,
    allowCardDiscount: true,
    allowGameDiscount: true,
    lastUpdated: '12-04-2025',
    lastUpdatedUser: '23-07-2025'
  });

  const [timeSlots, setTimeSlots] = useState({
    Sunday: { start: '8:00 AM', end: '8:00 PM', enabled: true },
    Monday: { start: '8:00 AM', end: '8:00 PM', enabled: true },
    Tuesday: { start: '8:00 AM', end: '8:00 PM', enabled: true },
    Wednesday: { start: '8:00 AM', end: '8:00 PM', enabled: true },
    Thursday: { start: '8:00 AM', end: '8:00 PM', enabled: true },
    Friday: { start: '8:00 AM', end: '8:00 PM', enabled: true },
    Saturday: { start: '8:00 AM', end: '8:00 PM', enabled: true }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTimeChange = (day, type, value) => {
    setTimeSlots(prev => ({
      ...prev,
      [day]: { ...prev[day], [type]: value }
    }));
  };

  const handleDayToggle = (day) => {
    setTimeSlots(prev => ({
      ...prev,
      [day]: { ...prev[day], enabled: !prev[day].enabled }
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="membership-overlay">
      <div className="membership-popup">
        <div className="popup-header">
          <div className="header-left">
            <div className="icon">🦊</div>
            <h2>Membership setup</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="popup-content">
          <div className="content-grid">
            {/* Left Column */}
            <div className="left-column">
              {/* Details Section */}
              <div className="section details-section">
                <h3>Details</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      <input 
                        type="checkbox" 
                        checked={formData.active}
                        onChange={(e) => handleInputChange('active', e.target.checked)}
                      />
                      Active
                    </label>
                    <input 
                      type="text" 
                      placeholder="ID"
                      value={formData.id}
                      onChange={(e) => handleInputChange('id', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Membership"
                      value={formData.membership}
                      onChange={(e) => handleInputChange('membership', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Discount"
                      value={formData.discount}
                      onChange={(e) => handleInputChange('discount', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group description-group">
                    <input 
                      type="text" 
                      placeholder="Description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                    />
                    <label className="checkbox-label">
                      <input 
                        type="checkbox"
                        checked={formData.validForNewly}
                        onChange={(e) => handleInputChange('validForNewly', e.target.checked)}
                      />
                      Valid for Newly Registered Customer
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Membership Type</label>
                    <select 
                      value={formData.membershipType}
                      onChange={(e) => handleInputChange('membershipType', e.target.value)}
                    >
                      <option>Auto Earned Based Program</option>
                      <option>Manual Assignment</option>
                      <option>Time-based Program</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Operational life Section */}
              <div className="section operational-section">
                <h3>Operational life of Membership</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Starting Date</label>
                    <input 
                      type="date" 
                      value={formData.startingDate}
                      onChange={(e) => handleInputChange('startingDate', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input 
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Duration (Days)</label>
                    <input 
                      type="text"
                      value={formData.duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Earned Based Program Settings */}
              <div className="section earned-section">
                <h3>Earned Based Program Settings</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Spending Level</label>
                    <input 
                      type="text"
                      value={formData.spendingLevel}
                      onChange={(e) => handleInputChange('spendingLevel', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Duration (Days)</label>
                    <input 
                      type="text"
                      value={formData.programDuration}
                      onChange={(e) => handleInputChange('programDuration', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={formData.registrationRequired}
                      onChange={(e) => handleInputChange('registrationRequired', e.target.checked)}
                    />
                    Registration Required
                  </label>
                </div>
              </div>

              {/* Footer Info */}
              <div className="footer-info">
                <span>Last Updated Date: {formData.lastUpdated}</span>
                <span>Last Updated User: {formData.lastUpdatedUser}</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="right-column">
              {/* Discount Applies Section */}
              <div className="section discount-section">
                <h3>Discount Applies to</h3>
                <div className="discount-options">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={formData.allowCardDiscount}
                      onChange={(e) => handleInputChange('allowCardDiscount', e.target.checked)}
                    />
                    Allow Card Product Discount
                  </label>
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      checked={formData.allowGameDiscount}
                      onChange={(e) => handleInputChange('allowGameDiscount', e.target.checked)}
                    />
                    Allow Game Product Discount
                  </label>
                </div>
              </div>

              {/* Membership Valid Section */}
              <div className="section valid-section">
                <h3>Membership Valid</h3>
                <div className="time-slots">
                  <div className="time-headers">
                    <span></span>
                    <span>Start</span>
                    <span>End</span>
                  </div>
                  
                  {Object.entries(timeSlots).map(([day, slot]) => (
                    <div key={day} className="time-slot-row">
                      <label className="day-checkbox">
                        <input 
                          type="checkbox"
                          checked={slot.enabled}
                          onChange={() => handleDayToggle(day)}
                        />
                        {day}
                      </label>
                      <select 
                        value={slot.start}
                        onChange={(e) => handleTimeChange(day, 'start', e.target.value)}
                        disabled={!slot.enabled}
                      >
                        <option>8:00 AM</option>
                        <option>9:00 AM</option>
                        <option>10:00 AM</option>
                        <option>11:00 AM</option>
                        <option>12:00 PM</option>
                      </select>
                      <select 
                        value={slot.end}
                        onChange={(e) => handleTimeChange(day, 'end', e.target.value)}
                        disabled={!slot.enabled}
                      >
                        <option>8:00 PM</option>
                        <option>9:00 PM</option>
                        <option>10:00 PM</option>
                        <option>11:00 PM</option>
                        <option>12:00 AM</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button className="btn btn-save">Save</button>
            <button className="btn btn-edit">Edit</button>
            <button className="btn btn-close" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipSetup;