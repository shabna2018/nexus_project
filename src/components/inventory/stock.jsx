import React, { useState } from "react";
import "./stock.css"; 
import searchIcon from "../../components/assets/search.png";
import logo from "../../components/assets/stock-icon.png";

const data = [
  { id: 1, ProductName: "Coffee", Barcode: "434567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 2, ProductName: "Water", Barcode: "434567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 3, ProductName: "Card 10 JD", Barcode: "434567", Quantity: 20, BOM: "Nos", status: "blue" },
  { id: 4, ProductName: "Card 20 JD", Barcode: "134567", Quantity: 20, BOM: "Nos", status: "green" },
  { id: 5, ProductName: "Time Band 1 Hr", Barcode: "234567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 6, ProductName: "Hot Choco", Barcode: "434567", Quantity: 12, BOM: "Nos", status: "red" },
   { id: 7, ProductName: "Coffee", Barcode: "434567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 8, ProductName: "Water", Barcode: "434567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 9, ProductName: "Card 10 JD", Barcode: "434567", Quantity: 20, BOM: "Nos", status: "blue" },
  { id: 10, ProductName: "Card 20 JD", Barcode: "134567", Quantity: 20, BOM: "Nos", status: "green" },
  { id: 11, ProductName: "Time Band 1 Hr", Barcode: "234567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 12, ProductName: "Hot Choco", Barcode: "434567", Quantity: 12, BOM: "Nos", status: "red" },
  { id: 13, ProductName: "Card 20 JD", Barcode: "134567", Quantity: 20, BOM: "Nos", status: "green" },
  { id: 14, ProductName: "Time Band 1 Hr", Barcode: "234567", Quantity: 20, BOM: "Pcs", status: "green" },
  { id: 15, ProductName: "Hot Choco", Barcode: "434567", Quantity: 12, BOM: "Nos", status: "red" },
   { id: 16, ProductName: "Coffee", Barcode: "434567", Quantity: 20, BOM: "Pcs", status: "green" },
  
];

const StockTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const filtered = data.filter((row) =>
  row.ProductName.toLowerCase().includes(searchTerm.toLowerCase()) ||
  row.Barcode.toLowerCase().includes(searchTerm.toLowerCase()) ||
  row.Quantity.toString().includes(searchTerm.toLowerCase()) || 
  row.BOM.toLowerCase().includes(searchTerm.toLowerCase())
);


  // ✅ Function to open modal
  const handleAddLocation = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  // ✅ Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };
  
  const [isQuickInventoryOpen, setIsQuickInventoryOpen] = useState(false);
  const handleOpenQuickInventory = () => setIsQuickInventoryOpen(true);
  const handleCloseQuickInventory = () => setIsQuickInventoryOpen(false);



  return (
    <div className="separated-table-container">
 
    <div className="stock-headers">
        <img src={logo} alt="Stock Logo" className="stock-logo" />
        <h2 className="stock-title"> Stock</h2>
    </div>

  

    <div className="separated-firsttop-bar">
  {/* Buttons Section */}
  <div className="top-buttons">
    <button className="top-btn red">Print</button>
    <button className="top-btn green">Excel</button>
    <button className="top-btn gray">Inventory Count Report</button>
   <button className="top-btn blue" onClick={handleOpenQuickInventory}>
  Quick Inventory
</button>

    <button className="top-btn orange">Adjust Inventory</button>
  </div>
   <div className="product-count">
    <span className="count">Product count: 8</span>
  
    <div className="count-btns">
    <button className="count-btn red">-2</button>
  <button className="count-btn blue">3</button>
  <button className="count-btn green">8</button>
  </div>
 </div>

  </div>
    
      {/* Top Bar with Search and Buttons */}
      <div className="separated-top-bar">
  {/* Search Section */}


<div className="filter-toggles">
    <label className="switch">
      <input type="checkbox" />
      <span className="slider red"></span>
      Negative quantity
    </label>

    <label className="switch">
      <input type="checkbox" />
      <span className="slider green"></span>
      Non Zero quantity
    </label>

    <label className="switch">
      <input type="checkbox" />
      <span className="slider gray"></span>
      Zero quantity
    </label>
   <div className="separated-search-container">
    <img src={searchIcon} alt="Search" className="separated-search-icon" />
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="separated-search-input"
      placeholder=" product search"
    />
  </div>
</div>


 

  {/* Sales / Price Summary */}
  <div className="sales-summary">
  <div className="sales-header">Sales Price</div>

  <div className="sales-item">
    <span className="sales-label">Total:</span>
    <span className="sales-value">1,450.00</span>
  </div>

  <div className="sales-item">
    <span className="sales-label">Total inc Tax:</span>
    <span className="sales-value">1,450.00</span>
  </div>
</div>

</div>


      {/* Separated Table Header */}
      <div className="separated-table-header">
        <div className="separated-header-cell separated-col-id">
          <span>Id</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-productname">
          <span>Product name</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-barcode">
          <span>Barcode</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-quantity">
          <span>Quantity</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
        <div className="separated-header-cell separated-col-bom">
          <span>BOM</span>
          <div className="separated-sort-arrows">
            <div className="separated-arrow-up"></div>
            <div className="separated-arrow-down"></div>
          </div>
        </div>
      </div>

      {/* Separated Table Content */}
     <div className="separated-table-content">
  {filtered.map((row, index) => (
    <div key={index} className={`separated-table-row ${index % 2 === 1 ? 'separated-row-yellow' : ''}`}>
     <div className="separated-cell separated-col-status">
  <span className={`status-dot ${row.status}`}></span>
</div>
<div className="separated-cell separated-col-id">
  {row.id}
</div>

      <div className="separated-cell separated-col-productname">{row.ProductName}</div>
      <div className="separated-cell separated-col-barcode">{row.Barcode}</div>
      <div className="separated-cell separated-col-quantity">{row.Quantity}</div>
      <div className="separated-cell separated-col-bom">{row.BOM}</div>
    </div>
  ))}
</div>
    </div>
  );
};

export default StockTable;