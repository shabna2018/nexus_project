import React, { useState } from 'react';
import './checkbalance.css';

export default function CheckBalance() {
  const [cardNumber, setCardNumber] = useState('FGH06781');
  const [userData, setUserData] = useState({
    name: 'Muhammed Abdulla Jaleel',
    status: 'Active',
    cash: '678,000',
    bonus: '678,000',
    coin: '100',
    time: '123ms',
    membership: 'Sunday Promo',
    accessProfile: 'N/A',
    discount: '0%',
    cardHolderSince: 'May 24,2024',
    totalPaidIn: 'May 24,2024',
    todaysPaidIn: '865,000',
    startTime: '22-May-24 2:45:00 PM',
    duration: '0',
    endTime: '22-May-24 2:45:00 PM',
    activation: '22-May-24 2:45:00 PM',
    expirition: '22-May-24 2:45:00 PM'
  });

  return (
    <div className="check-balance-container">
      {/* Search Section - Outside main wrapper */}
      <div className="search-section">
        <label>Card Number</label>
        <input 
          type="text" 
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="card-input"
        />
        <button className="search-btn">🔍 Search</button>
        <div className="action-buttons">
          <button className="refresh-btn">Refresh</button>
          <button className="search-card-btn">Search Card</button>
        </div>
      </div>

      {/* Main Container Wrapper */}
      <div className="main-container-wrapper">
        {/* Main Content */}
        <div className="content-wrapper">
          {/* Top Section */}
          <div className="top-section">
            {/* Left Section */}
            <div className="left-section">
              <div className="user-status-outer-wrapper">
                <div className="user-status-wrapper">
                  <div className="user-name-container">
                    <h3>{userData.name}</h3>
                  </div>
                  <div className="status-container">
                    <span className="status-badge">
                      <span className="status-dot"></span>
                      Status: {userData.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats and Info Combined Container */}
              <div className="stats-info-container">
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-label">Cash</div>
                    <div className="stat-value">{userData.cash}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Bonus</div>
                    <div className="stat-value">{userData.bonus}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Coin</div>
                    <div className="stat-value">{userData.coin}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Time</div>
                    <div className="stat-value">{userData.time}</div>
                  </div>
                </div>

                <div className="horizontal-separator"></div>

                <div className="info-grid">
                  <div className="info-item">
                    <div className="info-label">Membership/promo</div>
                    <div className="info-value">{userData.membership}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Access Profile</div>
                    <div className="info-value">{userData.accessProfile}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Discount</div>
                    <div className="info-value">{userData.discount}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <div className="avatar-placeholder">
                <div className="avatar-circle">
                  <svg width="60" height="60" viewBox="0 0 80 80">
                    <circle cx="40" cy="30" r="15" fill="#d1d5db"/>
                    <path d="M 15 70 Q 15 50 40 50 Q 65 50 65 70" fill="#d1d5db"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Full Width */}
          <div className="bottom-section">
            {/* Sections Outer Container */}
            <div className="sections-outer-container">
              <div className="sections-grid-container">
                {/* General Status */}
                <div className="section-card">
                  <div className="section-header">General Status</div>
                  <div className="section-content">
                    <div className="detail-row">
                      <span className="detail-label">Card Holder Since</span>
                      <span className="detail-value">{userData.cardHolderSince}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Total Paid in</span>
                      <span className="detail-value">{userData.totalPaidIn}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Today's Paid in</span>
                      <span className="detail-value">{userData.todaysPaidIn}</span>
                    </div>
                  </div>
                </div>

                {/* Time Play */}
                <div className="section-card time-play-card">
                  <div className="section-header">Time Play</div>
                  <div className="section-content">
                    <div className="detail-row">
                      <span className="detail-label">Start Time</span>
                      <span className="detail-value">{userData.startTime}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Duration</span>
                      <span className="detail-value">{userData.duration}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">End Time</span>
                      <span className="detail-value">{userData.endTime}</span>
                    </div>
                  </div>
                </div>

                {/* Account */}
                <div className="section-card account-section">
                  <div className="section-header">Account</div>
                  <div className="account-content-inline">
                    <div className="account-row">
                      <span className="account-label">Activation</span>
                      <span className="account-value">{userData.activation}</span>
                    </div>
                    <div className="account-row">
                      <span className="account-label">Expirition</span>
                      <span className="account-value">{userData.expirition}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View Transaction Button */}
            <button className="view-transaction-btn">View Transaction</button>
          </div>
        </div>
      </div>
    </div>
  );
}