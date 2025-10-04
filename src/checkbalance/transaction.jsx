import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './transaction.css';
import sortArrow from '../components/assets/taxarrow.png';
import emailIcon from '../components/assets/email.png';
import exportIcon from '../components/assets/export.png';
import printIcon from '../components/assets/print.png';
import dropdownArrow from '../components/assets/dropdownarrow.png';

// Sample transaction data
const transactionData = [
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  },
  {
    device: 'Server',
    promotion: 'Offer 10 + 3',
    cash: 'JODO.89',
    bonusCash: 'JODO.89',
    coins: '5',
    time: '2:45 PM',
    action: 'Debit',
    timeStamp: '19-Jun-24 4:45 PM',
    employee: 'Muhammed Mubin',
    location: 'Albanon Rides'
  }
];

export default function Transaction() {
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { cardNumber, userData } = location.state || {};

  const userInfo = {
    cardNumber: cardNumber || 'FGH06781',
    cash: userData?.cash || '678,000',
    bonus: userData?.bonus || '678,000',
    coin: userData?.coin || '100',
    time: userData?.time || '123ms'
  };

  const handleBack = () => {
    navigate('/check-balance');
  };

  const filtered = transactionData.filter(
    (row) =>
      row.device.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.promotion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="transaction-table-container-check-transaction">
      {/* Button Container */}
      <div className="transaction-button-container-check-transaction">
        <button className="transaction-btn-check-transaction transaction-btn-refresh-check-transaction">
          Refresh
        </button>
        <button className="transaction-btn-check-transaction transaction-btn-export-check-transaction">
  <img src={exportIcon} alt="Export" className="transaction-btn-icon-check-transaction" />
  Export
  <img src={dropdownArrow} alt="Dropdown" className="transaction-btn-dropdown-icon-check-transaction" />
</button>

        <button className="transaction-btn-check-transaction transaction-btn-print-check-transaction">
          <img src={printIcon} alt="Print" className="transaction-btn-icon-check-transaction" />
          Print
        </button>
        <button className="transaction-btn-check-transaction transaction-btn-email-check-transaction">
          <img src={emailIcon} alt="Email" className="transaction-btn-icon-check-transaction" />
          Send Email
        </button>
      </div>

      {/* User Info Summary Bar */}
      <div className="transaction-info-bar-check-transaction">
        {/* Card Number - Separate Styling */}
        <div className="transaction-card-number-item-check-transaction">
          <span className="transaction-card-number-label-check-transaction">
            Card Number 
            <span className="transaction-card-number-value-check-transaction">
              {userInfo.cardNumber}
            </span>
          </span>
        </div>
        
        {/* Other Info Items */}
        <div className="transaction-info-item-check-transaction">
          <span className="transaction-info-label-check-transaction">
            Cash
            <img src={dropdownArrow} alt="Dropdown" className="transaction-dropdown-icon-check-transaction" />
          </span>
          <span className="transaction-info-value-check-transaction">{userInfo.cash}</span>
        </div>
        <div className="transaction-info-item-check-transaction">
          <span className="transaction-info-label-check-transaction">
            Bonus
            <img src={dropdownArrow} alt="Dropdown" className="transaction-dropdown-icon-check-transaction" />
          </span>
          <span className="transaction-info-value-check-transaction">{userInfo.bonus}</span>
        </div>
        <div className="transaction-info-item-check-transaction">
          <span className="transaction-info-label-check-transaction">
            Coin
            <img src={dropdownArrow} alt="Dropdown" className="transaction-dropdown-icon-check-transaction" />
          </span>
          <span className="transaction-info-value-check-transaction">{userInfo.coin}</span>
        </div>
        <div className="transaction-info-item-check-transaction">
          <span className="transaction-info-label-check-transaction">
            Time
            <img src={dropdownArrow} alt="Dropdown" className="transaction-dropdown-icon-check-transaction" />
          </span>
          <span className="transaction-info-value-check-transaction">{userInfo.time}</span>
        </div>
      </div>

      {/* Table Wrapper with Scroll */}
      <div className="transaction-table-wrapper-check-transaction">
        {/* Table Header */}
        <div className="transaction-table-header-check-transaction">
          <div className="transaction-header-cell-check-transaction transaction-col-device-check-transaction">
            <span>Device</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-promotion-check-transaction">
            <span>Promotion</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-cash-check-transaction">
            <span>Cash</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-bonus-check-transaction">
            <span>Bonus Cash</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-coins-check-transaction">
            <span>Coins</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-time-check-transaction">
            <span>Time</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-action-check-transaction">
            <span>Action</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-timestamp-check-transaction">
            <span>Time Stamp</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-employee-check-transaction">
            <span>Employee</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
          <div className="transaction-header-cell-check-transaction transaction-col-location-check-transaction">
            <span>Location</span>
            <img src={sortArrow} alt="Sort" className="transaction-sort-icon-check-transaction" />
          </div>
        </div>

        {/* Table Content */}
        <div className="transaction-table-content-check-transaction">
          {filtered.map((row, index) => (
            <div key={index} className={`transaction-table-row-check-transaction ${index % 2 === 1 ? 'transaction-row-yellow-check-transaction' : ''}`}>
              <div className="transaction-cell-check-transaction transaction-col-device-check-transaction">{row.device}</div>
              <div className="transaction-cell-check-transaction transaction-col-promotion-check-transaction">{row.promotion}</div>
              <div className="transaction-cell-check-transaction transaction-col-cash-check-transaction">{row.cash}</div>
              <div className="transaction-cell-check-transaction transaction-col-bonus-check-transaction">{row.bonusCash}</div>
              <div className="transaction-cell-check-transaction transaction-col-coins-check-transaction">{row.coins}</div>
              <div className="transaction-cell-check-transaction transaction-col-time-check-transaction">{row.time}</div>
              <div className="transaction-cell-check-transaction transaction-col-action-check-transaction">{row.action}</div>
              <div className="transaction-cell-check-transaction transaction-col-timestamp-check-transaction">{row.timeStamp}</div>
              <div className="transaction-cell-check-transaction transaction-col-employee-check-transaction">{row.employee}</div>
              <div className="transaction-cell-check-transaction transaction-col-location-check-transaction">{row.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}