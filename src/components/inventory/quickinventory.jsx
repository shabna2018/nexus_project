import React from "react";
import "./quickinventory.css";
import cancelIcon from '../../components/assets/iconoir_cancel.png';
import { useNavigate } from "react-router-dom";


  
const QuickInventory = ({ onClose }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/stock"); // route to your UserList page
      };
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        {/* Header */}
        <div className="popup-header">
          <h2 className="popup-title">Quick Inventory</h2>
          <button className="popup-close" onClick={handleClose}>
            <img src={cancelIcon} alt="Close"  />
          </button>
        </div>
        {/* Content */}
        <div className="popup-body">
          <div className="content-border">
            {/* Product Details */}
            <div className="content-header">
              <p>Product : Pepsi 330 ML</p>
              <p>Barcode : 2323845</p>
            </div>
            {/* Body */}
            <div className="content-body">
              <div className="quantity-section">
                <label>Received Quantity</label>
                <input type="number" value="12" readOnly className="quantity-input" />
              </div>
              {/* Stock Info */}
              <div className="stock-section">
                <p>Current Counter Stock : 100</p>
                <p>Adjusted Counter Stock : 100</p>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="popup-buttons">
          <button className="btn-save">Save</button>
          <button className="btn-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickInventory;