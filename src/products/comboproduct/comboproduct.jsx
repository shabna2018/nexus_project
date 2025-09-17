import React, { useState } from "react";
import "./comboproduct.css";
import { useNavigate } from "react-router-dom";  // ✅ import navigation

// import cardIcon from "../components/assets/card-icon.png"; 
import searchIcon from "../../components/assets/search.png";
import filterIcon from "../../components/assets/filter.png";
import glass2Icon from "../../components/assets/glass2.png"; 
import comboIcon from "../../components/assets/combo.png"; 


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
  kot: true,
  CustomerCard: true,
  lastUpdatedDate: "2024-12-09 12:11",
  lastUpdatedUser: "Ahmed bin jaseel"
}));

const HeaderCell = ({ label }) => (
  <div className="combo-product-header-container">
    <span className="combo-product-header-text">{label}</span>
    <div className="combo-product-sort-icons">
      <span className="combo-product-arrow combo-product-up1"></span>
      <span className="combo-product-arrow combo-product-down1"></span>
    </div>
  </div>
);

const CardProduct = () => {
  const [activeProductsOnly, setActiveProductsOnly] = useState(false);
  const [productFilter, setProductFilter] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate hook

  return (
    <div className="combo-product-table-wrapper">
      {/* ---------- Section Header ---------- */}
      <div className="combo-product-section-header">
        <div className="combo-product-section-title-container">
          {/* Combo Icon */}
          <img src={comboIcon} alt="Combo Icon" className="combo-product-section-icon" /> 
          
          <h2 className="combo-product-section-title">Combo Product</h2>

          <div className="combo-product-checkbox-container">
            <input
              type="checkbox"
              id="activeOnly"
              checked={activeProductsOnly}
              onChange={(e) => setActiveProductsOnly(e.target.checked)}
            />
            <label htmlFor="activeOnly" className="combo-product-checkbox-label22">
              Active Products Only
            </label>
          </div>
        </div>
      </div>

      {/* ---------- Action Row ---------- */}
      <div className="combo-product-header-actions">
        {/* Search group - contains search input, filter, and search button */}
        <div className="combo-product-search-group">
          {/* Search box with icon inside */}
          <div className="combo-product-search-container2">
            <img src={searchIcon} alt="Search" className="combo-product-search-input2-icon" />
            <input
              type="text"
              placeholder="Search"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
              className="combo-product-search-input2"
            />
          </div>

          {/* Filter Button with Icon and Dropdown */}
          <div className="combo-product-filter-container">
            <button 
              className="combo-product-filter-btn"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <img src={filterIcon} alt="Filter" className="combo-product-filter-icon" />
            </button>
            {showFilterDropdown && (
              <div className="combo-product-filter-dropdown">
                <div className="combo-product-filter-option">Product</div>
                <div className="combo-product-filter-option">Display Group</div>
                <div className="combo-product-filter-option">POS Counter</div>
              </div>
            )}
          </div>

          {/* Blue Search Button with Icon */}
          <button className="combo-product-btn-search">
            <img src={glass2Icon} alt="Search" className="combo-product-search-btn-icon" />
            Search
          </button>
        </div>

        {/* Right aligned Add + Refresh */}
        <div className="combo-product-action-buttons">
          <button 
            className="combo-product-btn-add"
            onClick={() => navigate("/combo-product-add")} // ✅ navigate on click
          >
            Add
          </button>

          <button className="combo-product-btn-refresh">Refresh</button>
        </div>
      </div>

      {/* Table */}
      <div className="combo-product-table-scroll">
        <table className="combo-product-custom-table">
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
                    <div className="combo-product-text-box">{row.accessProfile}</div>
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
                <td>
                  <div className="combo-product-text-box">{row.priceNoTax}</div>
                </td>
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