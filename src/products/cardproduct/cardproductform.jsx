import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cardproductform.css";
import AddGamesModal from "./cardproductadd";
import cardIcon from "../../components/assets/card-icon.png"; 
import  cancelIcon from "../../components/assets/iconoir_cancel.png"; 
import  calendarIcon from "../../components/assets/calander.png"; 


const CardProduct = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showAddGamesModal, setShowAddGamesModal] = useState(false);
  const navigate = useNavigate();
  
  if (!isOpen) {
    return (
      <div className="demo-container7">
        <button onClick={() => setIsOpen(true)} className="open-modal-button1">
          Open Card Product Modal
        </button>
      </div>
    );
  }
  
  return (
    <div className="modal-overlay1">
      <div className="modal-container1">
        {/* Header */}
     <div className="modal-header1">
  <div className="header-title1">
    <img src={cardIcon} alt="Card Icon" className="folder-icon1" />
    <h2 className="title-text1">Card Product</h2>
  </div>
  <button onClick={() => navigate("/card-product")} className="close-button23">
  <img src={cancelIcon} alt="Close" className="close-icon22" />
</button>

</div>
        
        {/* Content Area */}
        <div className="modal-content1">
          {/* Main Content */}
          <div className="main-content1">
            <div className="content-wrapper12">
              <div className="main-sections1">
                {/* Product Section */}
                <div className="product-section1">
                  <div className="section-header1">Product</div>
                  <div className="product-content1">
                    {/* Row 1 */}
                    <div className="form-row1 cols-31">
                      <div className="form-group1">
                        <label className="form-label1">Product Id</label>
                        <input
                          type="text"
                          value="23456"
                          className="form-input1"
                          readOnly
                        />
                      </div>
                      <div className="form-group1">
                        <label className="form-label1">Product Name</label>
                        <input
                          type="text"
                          value="New card $100"
                          className="form-input1"
                        />
                      </div>
                      <div className="form-group1">
                        <label className="form-label1">POS Counter</label>
                        <select className="form-select1">
                          <option>Default</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="form-row1 cols-31">
                      <div className="form-group1">
                        <label className="form-label1">Category</label>
                        <select className="form-select1">
                          <option>Card product</option>
                        </select>
                      </div>
                      <div className="form-group1">
                        <label className="form-label1">Display Group</label>
                        <select className="form-select1">
                          <option>New Card</option>
                        </select>
                      </div>
                      <div className="form-group1">
                        <label className="form-label1">Display Order</label>
                        <input type="text" value="45" className="form-input1" />
                      </div>
                    </div>
                    
                    {/* Checkboxes */}
                    <div className="checkbox-section33">
                      <div className="checkbox-grid33">
                        {[
                          "Active",
                          "Display in POS",
                          "Kiosk",
                          "KOT",
                          "Customer Card",
                          "Favourite",
                        ].map((label, i) => (
                          <div key={i} className="checkbox-item33">
                            <input
                              type="checkbox"
                              className="checkbox33"
                              defaultChecked={label === "Active"}
                              readOnly={label === "Active"}
                            />
                            <span className="checkbox-label33">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Sections */}
                <div className="bottom-sections1">
                  {/* Price Section */}
                  <div className="price-section1">
                    <div className="section-header1 price-header1">Price</div>
                    <div className="section-content1">
                      {/* Face Value and Selling Price */}
                      <div className="form-row1 cols-21">
                        <div className="form-group1">
                          <label className="form-label1">Face Value</label>
                          <input
                            type="text"
                            value="$90.00"
                            className="form-input1"
                          />
                        </div>
                        <div className="form-group1">
                          <label className="form-label1">Selling price</label>
                          <input
                            type="text"
                            value="$100.00"
                            className="form-input1"
                          />
                        </div>
                      </div>
                      
                      {/* Tax Inclusive */}
                      <div className="checkbox-item1 tax-inclusive-row">
                        <label className="checkbox-label2">Tax Inclusive ?</label>
                        <input type="checkbox" className="checkbox12" />
                      </div>
                      
                      {/* Separator Line */}
                      <div className="separator-line1"></div>
                      
                      {/* Tax Category */}
                      <div className="form-row1 cols-21">
                        <div className="form-group1">
                          <label className="form-label1">Tax Category</label>
                          <select className="form-select1">
                            <option>TAX001</option>
                          </select>
                        </div>
                        <div className="form-group1">
                          <label className="form-label1">Tax 1 %</label>
                          <input
                            type="text"
                            value="10.000000%"
                            className="form-input1"
                          />
                        </div>
                      </div>
                      
                      {/* Tax and Price No Tax */}
                      <div className="form-row1 cols-21">
                        <div className="form-group1">
                          <label className="form-label1">Tax</label>
                          <input
                            type="text"
                            value="10.00"
                            className="form-input1"
                          />
                        </div>
                        <div className="form-group1">
                          <label className="form-label1">Price No Tax</label>
                          <input
                            type="text"
                            value="90.00"
                            className="form-input1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Entitlements Section */}
                  <div className="entitlements-section1">
                    <div className="section-header1 entitlements-header1">Entitlements</div>
                    <div className="section-content1">
                      <div className="entitlements-row1">
                        {/* Left side column */}
                        <div className="left-column1">
                          <div className="form-group1">
                            <label className="form-label1">Cash Balance</label>
                            <input
                              type="text"
                              value="$100.00"
                              className="form-input1 cash-balance-input1"
                            />
                          </div>
                          <div className="form-group1">
                            <label className="form-label1">Bonus Balance</label>
                            <input
                              type="text"
                              value="$20.00"
                              className="form-input1 bonus-balance-input1"
                            />
                          </div>
                          
                          {/* Membership + Active Profile */}
                          <div className="bottom-entitlements-row1">
                            <div className="form-group1 membership-group1">
                              <label className="form-label1">Membership</label>
                              <select className="form-select1">
                                <option>Happy Monday</option>
                              </select>
                            </div>
                            <div className="form-group1 active-profile-group1">
                              <label className="form-label1">Active Profile</label>
                              <select className="form-select1">
                                <option>Attraction</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side column */}
                        <div className="right-column1">
                          {/* Card Expiry Date */}
                          <div className="form-group1 card-expiry-group1">
                            <label className="form-label1">Card Expiry date</label>
                            <div className="date-input-with-calendar1">
                              <input
                                type="text"
                                value="23/04/2025"
                                className="form-input1 card-expiry-input1"
                              />
<span className="calendar-icon1">
  <img src={calendarIcon} alt="Calendar" className="calendar-image1" />
</span>
                            </div>
                          </div>
                          
                          {/* Card Valid */}
                          <div className="form-group1 card-valid-group1">
                            <label className="form-label1">Card Valid (days)</label>
                            <div className="card-valid-horizontal1">
                              <input
                                type="text"
                                value="360"
                                className="form-input1 card-valid-input1"
                              />
                              <button className="clear-button1">Clear Date</button>
                            </div>
                          </div>
                          
                          {/* Quantity + VIP */}
                          <div className="quantity-vip-row1">
                            <div className="form-group1 quantity-group1">
                              <label className="form-label1">Quantity</label>
                              <input
                                type="text"
                                value="112"
                                className="form-input1 quantity-input1"
                              />
                            </div>
                            <div className="vip-card-group1">
                              <label htmlFor="vipCard" className="vip-card-label1">
                                VIP Card
                              </label>
                              <input
                                type="checkbox"
                                className="checkbox1 vip-checkbox1"
                                id="vipCard"
                              />
                            </div>
                          </div>
                          
                          {/* Add Games Button */}
                          <button
                            className="add-games-button1"
                            onClick={() => setShowAddGamesModal(true)}
                          >
                            Add Games
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="sidebar1">
            <div className="registration-section1">
              <div className="registration-header1">Registration</div>
              <div className="registration-body1">
                {[
                  "Photo",
                  "First Name",
                  "Last Name",
                  "Phone",
                  "DOB",
                  "Sex",
                ].map((label, index) => (
                  <div key={index} className="registration-checkbox-row1">
                    <span className="registration-label1">{label}</span>
                    <input type="checkbox" className="registration-checkbox1" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="active-days-section1">
              <div className="active-days-header1">Active days for sale</div>
              <div className="active-days-content1">
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day, index) => (
                  <div key={index} className="day-row1">
                    <span className="day-name1">{day}</span>
                    <input type="checkbox" className="registration-checkbox1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Last Updated Section */}
        <div className="last-updated-section1">
          <div className="last-updated-info1">
            <span className="last-updated-label1">Last Updated Date</span>
            <span className="last-updated-value1">09-Nov-2024 12:11</span>
            <span className="last-updated-label1">Last Updated User</span>
            <span className="last-updated-value1">Ahmed jaseel</span>
          </div>
        </div>
        
        {/* Footer */}
        <div className="modal-footer1">
          <button className="footer-button1 save1">Save</button>
          <button className="footer-button1 new1">New</button>
          <button className="footer-button1 duplicate1">Duplicate</button>
          <button className="footer-button1 cancel1">Cancel</button>
        </div>
      </div>
      
      {showAddGamesModal && (
        <AddGamesModal
          isOpen={showAddGamesModal}
          onClose={() => setShowAddGamesModal(false)}
        />
      )}
    </div>
  );
};

export default CardProduct;