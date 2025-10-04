import React, { useState } from 'react';
import { Gamepad2, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import cancelIcon from '../components/assets/iconoir_cancel.png'; 
import cardIcon from "../components/assets/item.png"; 
import coinIcon from "../components/assets/gamesetting.png"; 
import './gamesettingadd.css';

const GameSettingsPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    active: true,
    allowBonusPlay: true,
    allowTimePlay: true,
    description: 'Trampoline',
    macId: 'CC:45:AF:89:78:45',
    category: 'Group 2- Video',
    subCategory: 'Video',
    cashPlayPrice: '10.00',
    vipDiscountPrice: '9',
    coinPlayPrice: '1',
    gameInterface: 'Arcade',
    currencyDecimalPlace: '2 Decimal',
    debitOrder: 'Cash First',
    pulseWidth: '100',
    pulsePauseWidth: 'Arcade',
    pulseToActuate: '1',
    rfidTapDelay: '1',
    displayOrientation: 'Landscape',
    ledPattern: 'Multi Color',
    lastUpdatedDate: '09-Nov-2024 12:11',
    lastUpdatedUser: 'Ahmed jaseel'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const navigate = useNavigate();

  return (
    <div className="gameSettings-popup-overlay">
      <div className="gameSettings-popup-container">
        {/* Header */}
        <div className="gameSettings-popup-header">
          <div className="gameSettings-header-content">
            <img src={coinIcon} alt="Card Icon" className="gameSettings-item-add-folder-icon-item" />
            <div className="gameSettings-header-title">Game Settings</div>
          </div>
          <button onClick={() => navigate("/games")} className="gameSettings-item-add-close-button-item">
            <img src={cancelIcon} alt="Close" className="gameSettings-item-add" />
          </button>
        </div>

        {/* Primary Settings Box */}
        <div className="gameSettings-popup-body">
          <div className="gameSettings-settings-container">
            <div className="gameSettings-settings-header">
              <h3>Primary Settings</h3>
            </div>

            <div className="gameSettings-settings-content">
              {/* Checkbox Row */}
              <div className="timeform-checkbox-section">
                <div className="timeform-checkbox-grid">
                  {["Active", "Allow Bonus Play", "Allow Time Play"].map((label, i) => (
                    <div key={i} className="timeform-checkbox-item">
                      <input
                        type="checkbox"
                        className="timeform-checkbox"
                        defaultChecked={label === "Active"}
                        readOnly={label === "Active"}
                      />
                      <span className="timeform-checkbox-label">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* First Row - Description, MAC ID, Category, Sub-Category */}
              <div className="gameSettings-form-row">
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Description</label>
                  <input
                    type="text"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="gameSettings-form-input gameSettings-medium-input"
                  />
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">MAC ID</label>
                  <input
                    type="text"
                    value={formData.macId}
                    onChange={(e) => handleInputChange('macId', e.target.value)}
                    className="gameSettings-form-input gameSettings-mac-input"
                  />
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Group 2- Video</option>
                    <option>Group 1- Arcade</option>
                    <option>Group 3- Redemption</option>
                  </select>
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Sub-Category</label>
                  <select
                    value={formData.subCategory}
                    onChange={(e) => handleInputChange('subCategory', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Video</option>
                    <option>Arcade</option>
                    <option>Redemption</option>
                  </select>
                </div>
              </div>

              {/* Second Row - Price Fields */}
              <div className="gameSettings-price-row">
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Cash Play Price</label>
                  <input
                    type="text"
                    value={formData.cashPlayPrice}
                    onChange={(e) => handleInputChange('cashPlayPrice', e.target.value)}
                    className="gameSettings-form-input gameSettings-short-input"
                  />
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">VIP Discount Price</label>
                  <input
                    type="text"
                    value={formData.vipDiscountPrice}
                    onChange={(e) => handleInputChange('vipDiscountPrice', e.target.value)}
                    className="gameSettings-form-input gameSettings-short-input"
                  />
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Coin Play Price</label>
                  <input
                    type="text"
                    value={formData.coinPlayPrice}
                    onChange={(e) => handleInputChange('coinPlayPrice', e.target.value)}
                    className="gameSettings-form-input gameSettings-short-input"
                  />
                </div>
              </div>

              {/* Third Row - Interface, Currency, Debit Order, Pulse Width */}
              <div className="gameSettings-form-row">
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Game Interface</label>
                  <select
                    value={formData.gameInterface}
                    onChange={(e) => handleInputChange('gameInterface', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Arcade</option>
                    <option>Video</option>
                    <option>Redemption</option>
                  </select>
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Currency Decimal Place</label>
                  <select
                    value={formData.currencyDecimalPlace}
                    onChange={(e) => handleInputChange('currencyDecimalPlace', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>2 Decimal</option>
                    <option>1 Decimal</option>
                    <option>0 Decimal</option>
                  </select>
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Debit Order</label>
                  <select
                    value={formData.debitOrder}
                    onChange={(e) => handleInputChange('debitOrder', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Cash First</option>
                    <option>Card First</option>
                  </select>
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Pulse Width (ms)</label>
                  <input
                    type="text"
                    value={formData.pulseWidth}
                    onChange={(e) => handleInputChange('pulseWidth', e.target.value)}
                    className="gameSettings-form-input"
                  />
                </div>
              </div>

              {/* Fourth Row - Pulse Settings and Display */}
              <div className="gameSettings-form-row">
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Pulse Pause Width (ms)</label>
                  <select
                    value={formData.pulsePauseWidth}
                    onChange={(e) => handleInputChange('pulsePauseWidth', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Arcade</option>
                    <option>Video</option>
                  </select>
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Pulse to Actuate</label>
                  <input
                    type="text"
                    value={formData.pulseToActuate}
                    onChange={(e) => handleInputChange('pulseToActuate', e.target.value)}
                    className="gameSettings-form-input"
                  />
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">RFID Tap Delay (Sec)</label>
                  <input
                    type="text"
                    value={formData.rfidTapDelay}
                    onChange={(e) => handleInputChange('rfidTapDelay', e.target.value)}
                    className="gameSettings-form-input"
                  />
                </div>
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">Display Orientation</label>
                  <select
                    value={formData.displayOrientation}
                    onChange={(e) => handleInputChange('displayOrientation', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Landscape</option>
                    <option>Portrait</option>
                  </select>
                </div>
              </div>

              {/* LED Pattern Row */}
              <div className="gameSettings-form-row gameSettings-led-row">
                <div className="gameSettings-form-group">
                  <label className="gameSettings-form-label">LED Pattern</label>
                  <select
                    value={formData.ledPattern}
                    onChange={(e) => handleInputChange('ledPattern', e.target.value)}
                    className="gameSettings-form-select gameSettings-item-add-form-select-item"
                  >
                    <option>Multi Color</option>
                    <option>Single Color</option>
                    <option>Rainbow</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Last Updated Row */}
          <div className="gameSettings-last-updated-row">
            <div className="gameSettings-last-updated-item">
              <span className="gameSettings-last-updated-label">Last Updated Date: </span>
              <span className="gameSettings-last-updated-value">{formData.lastUpdatedDate}</span>
            </div>
            <div className="gameSettings-last-updated-item">
              <span className="gameSettings-last-updated-label">Last Updated User: </span>
              <span className="gameSettings-last-updated-value">{formData.lastUpdatedUser}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="gameSettings-action-buttons">
            <button className="gameSettings-btn gameSettings-btn-update">Update</button>
            <button className="gameSettings-btn gameSettings-btn-save">Save</button>
            <button className="gameSettings-btn gameSettings-btn-new">New</button>
            <button className="gameSettings-btn gameSettings-btn-duplicate">Duplicate</button>
            <button onClick={onClose} className="gameSettings-btn gameSettings-btn-close">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameSettingsPopup;