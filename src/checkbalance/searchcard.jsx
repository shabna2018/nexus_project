import React, { useState } from 'react';
import './searchcard.css';

export default function SearchCard({ isOpen, onClose, onSelectCard }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cellPhone, setCellPhone] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);

  // Mock data for demonstration
  const mockData = [
    { firstName: 'Abdulla', lastName: '', cardNumber: 'ASD567', phone: '+966 5678 4567' },
    { firstName: 'Abdulla', lastName: '', cardNumber: 'ASD567', phone: '+966 5678 4567' },
    { firstName: 'Abdulla', lastName: '', cardNumber: 'ASD567', phone: '+966 5678 4567' },
    { firstName: 'Abdulla', lastName: '', cardNumber: 'ASD567', phone: '+966 5678 4567' },
    { firstName: 'Abdulla', lastName: '', cardNumber: 'ASD567', phone: '+966 5678 4567' }
  ];

  const [searchResults, setSearchResults] = useState(mockData);

  const handleSearch = () => {
    // In real implementation, this would make an API call
    setSearchResults(mockData);
  };

  const handleRowClick = (card, index) => {
    setSelectedRow(index);
  };

  const handleOkay = () => {
    if (selectedRow !== null && onSelectCard) {
      onSelectCard(searchResults[selectedRow]);
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-search-card-check" onClick={onClose}>
      <div className="modal-container-search-card-check" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header-search-card-check">
          <div className="modal-title-wrapper-search-card-check">
            <svg className="card-icon-search-card-check" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="2"/>
              <line x1="2" y1="10" x2="22" y2="10" stroke="white" strokeWidth="2"/>
            </svg>
            <span className="modal-title-search-card-check">Search Card</span>
          </div>
          <button className="close-btn-search-card-check" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Info Tab */}
        <div className="info-tab-container-search-card-check">
          <div className="info-tab-search-card-check">
            Info
          </div>
        </div>

        {/* Search Form */}
        <div className="search-form-search-card-check">
          <div className="form-row-search-card-check">
            <div className="form-group-search-card-check">
              <label className="form-label-search-card-check">First Name</label>
              <input 
                type="text" 
                className="form-input-search-card-check"
                placeholder="Mubin"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group-search-card-check">
              <label className="form-label-search-card-check">Last Name</label>
              <input 
                type="text" 
                className="form-input-search-card-check"
                placeholder="Mohammed"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row-search-card-check">
            <div className="form-group-search-card-check">
              <label className="form-label-search-card-check">Cell Phone</label>
              <input 
                type="text" 
                className="form-input-search-card-check"
                placeholder="+9666 4567 8900"
                value={cellPhone}
                onChange={(e) => setCellPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row-search-card-check single-col">
            <div className="search-btn-wrapper-search-card-check">
              <button className="search-btn-search-card-check" onClick={handleSearch}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="5" stroke="white" strokeWidth="2"/>
                  <path d="M11 11L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Results Table */}
        {searchResults.length > 0 && (
          <div className="results-wrapper-search-card-check">
            {/* Table Header */}
            <div className="table-header-wrapper-search-card-check">
              <div className="table-header-search-card-check col-firstname-search-card-check">
                <span>First Name</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 3L9 6L3 6L6 3Z" fill="currentColor"/>
                  <path d="M6 9L3 6L9 6L6 9Z" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <div className="table-header-search-card-check col-lastname-search-card-check">
                <span>Last Name</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 3L9 6L3 6L6 3Z" fill="currentColor"/>
                  <path d="M6 9L3 6L9 6L6 9Z" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <div className="table-header-search-card-check col-cardnumber-search-card-check">
                <span>Card Number</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 3L9 6L3 6L6 3Z" fill="currentColor"/>
                  <path d="M6 9L3 6L9 6L6 9Z" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
              <div className="table-header-search-card-check col-phone-search-card-check">
                <span>Phone</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 3L9 6L3 6L6 3Z" fill="currentColor"/>
                  <path d="M6 9L3 6L9 6L6 9Z" fill="currentColor" opacity="0.3"/>
                </svg>
              </div>
            </div>

            {/* Table Content */}
            <div className="table-content-search-card-check">
              {searchResults.map((result, index) => (
                <div 
                  key={index} 
                  className={`table-row-search-card-check ${selectedRow === index ? 'highlighted-row-search-card-check' : ''}`}
                  onClick={() => handleRowClick(result, index)}
                >
                  <div className="table-cell-search-card-check col-firstname-search-card-check">{result.firstName}</div>
                  <div className="table-cell-search-card-check col-lastname-search-card-check">{result.lastName}</div>
                  <div className="table-cell-search-card-check col-cardnumber-search-card-check">{result.cardNumber}</div>
                  <div className="table-cell-search-card-check col-phone-search-card-check">{result.phone}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Buttons */}
        <div className="modal-footer-search-card-check">
          <button className="okay-btn-search-card-check" onClick={handleOkay}>
            Okay
          </button>
          <button className="cancel-btn-search-card-check" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}