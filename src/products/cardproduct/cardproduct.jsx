import React, { useState } from "react";
import "./cardproduct.css";
import { useNavigate } from "react-router-dom";  // ✅ import navigation

// import cardIcon from "../components/assets/card-icon.png"; 
import searchIcon from "../../components/assets/search.png";
import filterIcon from "../../components/assets/filter.png";
import glass2Icon from "../../components/assets/glass2.png"; 
import cardIcon from "../../components/assets/card-icon.png"; 


const data = Array.from({ length: 12 }, () => ({
  productId: 34569,
  productName: "New Card $100",
  active: true,
  category: "Card Product",
  displayGroup: "New Card",
  displayOrder: 34,
  displayInPOS: true,
  faceValue: "$90.00",
  sellingPrice: "$100.00",
  cashBalance: "$100.00",
  bonusBalance: "$20.00",
  cardQuantity: 9,
  accessProfile: "attraction: content",
  membership: "Happy monday",
  cardValidity: 360,
  cardExpiry: "2025-04-23",
  vipCard: false,
  posCounter: "Pos 1, Pos 2",
  taxCategory: "TAX001",
  taxPercent: "10%",
  priceNoTax: "90.00",
  kiosk: true,
  kot: true,
  CustomerCard: true,
  lastUpdatedDate: "2024-12-09 12:11",
  lastUpdatedUser: "Ahmed bin jaseel"
}));

const HeaderCell = ({ label }) => (
  <div className="cp-header-container">
    <span className="cp-header-text">{label}</span>
    <div className="cp-sort-icons">
      <span className="cp-arrow cp-up1"></span>
      <span className="cp-arrow cp-down1"></span>
    </div>
  </div>
);

const CardProduct = () => {
  const [activeProductsOnly, setActiveProductsOnly] = useState(false);
  const [productFilter, setProductFilter] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate hook

  return (
    <div className="cp-table-wrapper">
      {/* ---------- Section Header ---------- */}
      <div className="cp-section-header">
        <div className="cp-section-title-container">
          {/* Card Icon - using emoji as placeholder */}
          <img src={cardIcon} alt="Card Icon" className="cp-section-icon" /> 
          
          <h2 className="cp-section-title">Card Product</h2>

          <div className="cp-checkbox-container">
            <input
              type="checkbox"
              id="activeOnly"
              checked={activeProductsOnly}
              onChange={(e) => setActiveProductsOnly(e.target.checked)}
            />
            <label htmlFor="activeOnly" className="cp-checkbox-label22">
              Active Products Only
            </label>
          </div>
        </div>
      </div>

      {/* ---------- Action Row ---------- */}
      <div className="cp-header-actions">
        {/* Search group - contains search input, filter, and search button */}
        <div className="cp-search-group">
          {/* Search box with icon inside */}
          <div className="cp-search-container2">
            <img src={searchIcon} alt="Search" className="cp-search-input2-icon" />
            <input
              type="text"
              placeholder="Search"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="cp-search-input2"
            />
          </div>

          {/* Filter Button with Icon and Dropdown */}
          <div className="cp-filter-container">
            <button 
              className="cp-filter-btn"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <img src={filterIcon} alt="Filter" className="cp-filter-icon" />
            </button>
            {showFilterDropdown && (
              <div className="cp-filter-dropdown">
                <div className="cp-filter-option">Product</div>
                <div className="cp-filter-option">Display Group</div>
                <div className="cp-filter-option">POS Counter</div>
              </div>
            )}
          </div>

          {/* Blue Search Button with Icon */}
          <button className="cp-btn-search">
            <img src={glass2Icon} alt="Search" className="cp-search-btn-icon" />
            Search
          </button>
        </div>

        {/* Right aligned Add + Refresh */}
        <div className="cp-action-buttons">
          <button 
            className="cp-btn-add"
            onClick={() => navigate("/card-productform")} // ✅ navigate on click
          >
            Add
          </button>

          <button className="cp-btn-refresh">Refresh</button>
        </div>
      </div>

      {/* Table */}
      <div className="cp-table-scroll">
        <table className="cp-custom-table">
          <thead>
            <tr>
              <th><HeaderCell label="Product Id" /></th>
              <th><HeaderCell label="Product Name" /></th>
              <th><HeaderCell label="Active" /></th>
              <th><HeaderCell label="Product Category" /></th>
              <th><HeaderCell label="Display Group" /></th>
              <th><HeaderCell label="Display Order" /></th>
              <th><HeaderCell label="Display in POS" /></th>
              <th><HeaderCell label="Face Value" /></th>
              <th><HeaderCell label="Selling Price" /></th>
              <th><HeaderCell label="Cash Balance" /></th>
              <th><HeaderCell label="Bonus Balance" /></th>
              <th><HeaderCell label="Card Quantity" /></th>
              <th><HeaderCell label="Access Profile" /></th>
              <th><HeaderCell label="Membership" /></th>
              <th><HeaderCell label="Card Validity (in days)" /></th>
              <th><HeaderCell label="Card Expiry date" /></th>
              <th><HeaderCell label="VIP Card" /></th>
              <th><HeaderCell label="POS Counter" /></th>
              <th><HeaderCell label="Tax Category" /></th>
              <th><HeaderCell label="Tax %" /></th>
              <th><HeaderCell label="Price no Tax" /></th>
              <th><HeaderCell label="kiosk" /></th>
              <th><HeaderCell label="KOT" /></th>
              <th><HeaderCell label="Customer Card" /></th>
              <th><HeaderCell label="Last Updated Date" /></th>
              <th><HeaderCell label="Last Updated User" /></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.productId}</td>
                <td>{row.productName}</td>
                <td><input type="checkbox" checked={row.active} readOnly /></td>
                <td>
                  <select value={row.category} readOnly>
                    <option>{row.category}</option>
                  </select>
                </td>
                <td>
                  <select value={row.displayGroup} readOnly>
                    <option>{row.displayGroup}</option>
                  </select>
                </td>
                <td>{row.displayOrder}</td>
                <td><input type="checkbox" checked={row.displayInPOS} readOnly /></td>
                <td>{row.faceValue}</td>
                <td>{row.sellingPrice}</td>
                <td>{row.cashBalance}</td>
                <td>{row.bonusBalance}</td>
                <td>{row.cardQuantity}</td>
                <td>
                  {row.accessProfile === "attraction: content" ? (
                    <div className="cp-text-box">{row.accessProfile}</div>
                  ) : (
                    <select value={row.accessProfile} readOnly>
                      <option>{row.accessProfile}</option>
                    </select>
                  )}
                </td>
                <td>
                  <select value={row.membership} readOnly>
                    <option>{row.membership}</option>
                  </select>
                </td>
                <td>{row.cardValidity}</td>
                <td><input type="date" value={row.cardExpiry} readOnly /></td>
                <td><input type="checkbox" checked={row.vipCard} readOnly /></td>
                <td>{row.posCounter}</td>
                <td>
                  <select value={row.taxCategory} readOnly>
                    <option>{row.taxCategory}</option>
                  </select>
                </td>
                <td>{row.taxPercent}</td>
                <td>{row.priceNoTax}</td>
                <td><input type="checkbox" checked={row.kiosk} readOnly /></td>
                <td><input type="checkbox" checked={row.kot} readOnly /></td>
                <td><input type="checkbox" checked={row.CustomerCard} readOnly /></td>
                <td>{row.lastUpdatedDate}</td>
                <td>{row.lastUpdatedUser}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardProduct;