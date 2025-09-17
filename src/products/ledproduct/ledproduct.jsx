import React, { useState } from "react";
import "./ledproduct.css";
import { useNavigate } from "react-router-dom"; // ✅ import navigation

// import cardIcon from "../components/assets/card-icon.png";
import searchIcon from "../../components/assets/search.png";
import filterIcon from "../../components/assets/filter.png";
import glass2Icon from "../../components/assets/glass2.png";
import ledIcon from "../../components/assets/led.png";

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
  cardQuantity: 9,
  accessProfile: "attraction: content",
  membership: "Happy monday",
  cardValidity: 360,
  cardExpiry: "2025-04-23",
  posCounter: "Pos 1, Pos 2",
  taxCategory: "TAX001",
  taxPercent: "10%",
  priceNoTax: "90.00",
  kot: true,
  CustomerCard: true,
  // ✅ Added new fields after CustomerCard (matching image)
  greenMinutes: 60,
  blueMinutes: 20,
  redMinutes: 15,
  braceletQuantity: 1,
  lastUpdatedDate: "2024-12-09 12:11",
  lastUpdatedUser: "Ahmed bin jaseel",
}));

const HeaderCell = ({ label }) => (
  <div className="led-product-header-container">
    <span className="led-product-header-text">{label}</span>
    <div className="led-product-sort-icons">
      <span className="led-product-arrow led-product-up1"></span>
      <span className="led-product-arrow led-product-down1"></span>
    </div>
  </div>
);

const CardProduct = () => {
  const [activeProductsOnly, setActiveProductsOnly] = useState(false);
  const [productFilter, setProductFilter] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigate hook

  return (
    <div className="led-product-table-wrapper">
      {/* ---------- Section Header ---------- */}
      <div className="led-product-section-header">
        <div className="led-product-section-title-container">
          {/* Card Icon - using emoji as placeholder */}

          <img
            src={ledIcon}
            alt="Card Icon"
            className="led-product-section-icon"
          />

          <h2 className="led-product-section-title">LED Product</h2>

          <div className="led-product-checkbox-container">
            <input
              type="checkbox"
              id="activeOnly"
              checked={activeProductsOnly}
              onChange={(e) => setActiveProductsOnly(e.target.checked)}
            />
            <label
              htmlFor="activeOnly"
              className="led-product-checkbox-label22"
            >
              Active Products Only
            </label>
          </div>
        </div>
      </div>

      {/* ---------- Action Row ---------- */}
      <div className="led-product-header-actions">
        {/* Search box with icon inside */}
        <div className="led-product-search-container2">
          <img
            src={searchIcon}
            alt="Search"
            className="led-product-search-input2-icon"
          />
          <input
            type="text"
            placeholder="Search"
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
            className="led-product-search-input2"
          />
        </div>

        {/* Filter Button with Icon and Dropdown */}
        <div className="led-product-filter-container">
          <button
            className="led-product-filter-btn"
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
          >
            <img
              src={filterIcon}
              alt="Filter"
              className="led-product-filter-icon"
            />
          </button>
          {showFilterDropdown && (
            <div className="led-product-filter-dropdown">
              <div className="led-product-filter-option">Product</div>
              <div className="led-product-filter-option">Display Group</div>
              <div className="led-product-filter-option">POS Counter</div>
            </div>
          )}
        </div>

        {/* Blue Search Button with Icon */}
        <button className="led-product-btn-search">
          <img
            src={glass2Icon}
            alt="Search"
            className="led-product-search-btn-icon"
          />
          Search
        </button>

        {/* Right aligned Add + Refresh */}
        <div className="led-product-action-buttons">
          <button
            className="led-product-btn-add"
            onClick={() => navigate("/led-product-add")} // ✅ navigate on click
          >
            Add
          </button>

          <button className="led-product-btn-refresh">Refresh</button>
        </div>
      </div>

      {/* Table */}
      <div className="led-product-table-scroll">
        <table className="led-product-custom-table">
          <thead>
            <tr>
              <th>
                <HeaderCell label="Product Id" />
              </th>
              <th>
                <HeaderCell label="Product Name" />
              </th>
              <th>
                <HeaderCell label="Active" />
              </th>
              <th>
                <HeaderCell label="Product Category" />
              </th>
              <th>
                <HeaderCell label="Display Group" />
              </th>
              <th>
                <HeaderCell label="Display Order" />
              </th>
              <th>
                <HeaderCell label="Display in POS" />
              </th>
              <th>
                <HeaderCell label="Face Value" />
              </th>
              <th>
                <HeaderCell label="Selling Price" />
              </th>
              <th>
                <HeaderCell label="Card Quantity" />
              </th>
              <th>
                <HeaderCell label="Access Profile" />
              </th>
              <th>
                <HeaderCell label="Membership" />
              </th>
              <th>
                <HeaderCell label="Card Validity (in days)" />
              </th>
              <th>
                <HeaderCell label="Card Expiry date" />
              </th>
              <th>
                <HeaderCell label="POS Counter" />
              </th>
              <th>
                <HeaderCell label="Tax Category" />
              </th>
              <th>
                <HeaderCell label="Tax %" />
              </th>
              <th>
                <HeaderCell label="Price no Tax" />
              </th>
              <th>
                <HeaderCell label="KOT" />
              </th>
              <th>
                <HeaderCell label="Customer Card" />
              </th>
              {/* ✅ Added new headers after Customer Card (matching image structure) */}
              <th>
                <HeaderCell label="Green (Minutes)" />
              </th>
              <th>
                <HeaderCell label="Blue (Minutes)" />
              </th>
              <th>
                <HeaderCell label="Red (Minutes)" />
              </th>
              <th>
                <HeaderCell label="Bracelet Quantity" />
              </th>
              <th>
                <HeaderCell label="Last Updated Date" />
              </th>
              <th>
                <HeaderCell label="Last Updated User" />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.productId}</td>
                <td>{row.productName}</td>
                <td>
                  <input type="checkbox" checked={row.active} readOnly />
                </td>
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
                <td>
                  <input type="checkbox" checked={row.displayInPOS} readOnly />
                </td>
                <td>{row.faceValue}</td>
                <td>{row.sellingPrice}</td>
                <td>{row.cardQuantity}</td>
                <td>
                  {row.accessProfile === "attraction: content" ? (
                    <div className="led-product-text-box">
                      {row.accessProfile}
                    </div>
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
                <td>
                  <input type="date" value={row.cardExpiry} readOnly />
                </td>
                <td>{row.posCounter}</td>
                <td>
                  <select value={row.taxCategory} readOnly>
                    <option>{row.taxCategory}</option>
                  </select>
                </td>
                <td>{row.taxPercent}</td>
                <td>{row.priceNoTax}</td>
                <td>
                  <input type="checkbox" checked={row.kot} readOnly />
                </td>
                <td>
                  <input type="checkbox" checked={row.CustomerCard} readOnly />
                </td>
                {/* ✅ Added new cells after Customer Card (matching image layout) */}
                <td>
                  <div className="led-product-minutes-box">
                    {row.greenMinutes}
                  </div>
                </td>
                <td>
                  <div className="led-product-minutes-box">
                    {row.blueMinutes}
                  </div>
                </td>
                <td>
                  <div className="led-product-minutes-box">
                    {row.redMinutes}
                  </div>
                </td>
                <td>
                  <div className="led-product-minutes-box">
                    {row.braceletQuantity}
                  </div>
                </td>
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