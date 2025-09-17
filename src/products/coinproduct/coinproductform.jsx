import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./coinproductform.css";
import AddGamesModal from "./coinproductadd";
import coinIcon from "../../components/assets/coin.png"; 
import  cancelIcon from "../../components/assets/iconoir_cancel.png"; 
import  calendarIcon from "../../components/assets/calander.png"; 


const CardProduct = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showAddGamesModal, setShowAddGamesModal] = useState(false);
  const navigate = useNavigate();
  
  if (!isOpen) {
    return (
      <div className="coin-form-demo-container7">
        <button onClick={() => setIsOpen(true)} className="coin-form-open-modal-button1">
          Open Card Product Modal
        </button>
      </div>
    );
  }
  
  return (
    <div className="coin-form-modal-overlay1">
      <div className="coin-form-modal-container1">
        {/* Header */}
     <div className="coin-form-modal-header1">
  <div className="coin-form-header-title1">
    <img src={coinIcon} alt="Card Icon" className="coin-form-folder-icon1" />
    <h2 className="coin-form-title-text1">Coin Product</h2>
  </div>
  <button onClick={() => navigate("/coin-product")} className="coin-form-close-button23">
  <img src={cancelIcon} alt="Close" className="coin-form-close-icon22" />
</button>

</div>
        
        {/* Content Area */}
        <div className="coin-form-modal-content1">
          {/* Main Content */}
          <div className="coin-form-main-content1">
            <div className="coin-form-content-wrapper12">
              <div className="coin-form-main-sections1">
                {/* Product Section */}
                <div className="coin-form-product-section1">
                  <div className="coin-form-section-header1">Product</div>
                  <div className="coin-form-product-content1">
                    {/* Row 1 */}
                    <div className="coin-form-form-row1 coin-form-cols-31">
                      <div className="coin-form-form-group1">
                        <label className="coin-form-form-label1">Product Id</label>
                        <input
                          type="text"
                          value="23456"
                          className="coin-form-form-input1"
                          readOnly
                        />
                      </div>
                      <div className="coin-form-form-group1">
                        <label className="coin-form-form-label1">Product Name</label>
                        <input
                          type="text"
                          value="New card $100"
                          className="coin-form-form-input1"
                        />
                      </div>
                      <div className="coin-form-form-group1">
                        <label className="coin-form-form-label1">POS Counter</label>
                        <select className="coin-form-form-select1">
                          <option>Default</option>
                        </select>
                      </div>
                    </div>
                    
                    {/* Row 2 */}
                    <div className="coin-form-form-row1 coin-form-cols-31">
                      <div className="coin-form-form-group1">
                        <label className="coin-form-form-label1">Category</label>
                        <select className="coin-form-form-select1">
                          <option>Card product</option>
                        </select>
                      </div>
                      <div className="coin-form-form-group1">
                        <label className="coin-form-form-label1">Display Group</label>
                        <select className="coin-form-form-select1">
                          <option>New Card</option>
                        </select>
                      </div>
                      <div className="coin-form-form-group1">
                        <label className="coin-form-form-label1">Display Order</label>
                        <input type="text" value="45" className="coin-form-form-input1" />
                      </div>
                    </div>
                    
                    {/* Checkboxes */}
                    <div className="coin-form-checkbox-section33">
                      <div className="coin-form-checkbox-grid33">
                        {[
                          "Active",
                          "Display in POS",
                          "Kiosk",
                          "KOT",
                          "Customer Card",
                        
                        ].map((label, i) => (
                          <div key={i} className="coin-form-checkbox-item33">
                            <input
                              type="checkbox"
                              className="coin-form-checkbox33"
                              defaultChecked={label === "Active"}
                              readOnly={label === "Active"}
                            />
                            <span className="coin-form-checkbox-label33">{label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Sections */}
                <div className="coin-form-bottom-sections1">
                  {/* Price Section */}
                  <div className="coin-form-price-section1">
                    <div className="coin-form-section-header1 coin-form-price-header1">Price</div>
                    <div className="coin-form-section-content1">
                      {/* Face Value and Selling Price */}
                      <div className="coin-form-form-row1 coin-form-cols-21">
                        <div className="coin-form-form-group1">
                          <label className="coin-form-form-label1">Face Value</label>
                          <input
                            type="text"
                            value="$90.00"
                            className="coin-form-form-input1"
                          />
                        </div>
                        <div className="coin-form-form-group1">
                          <label className="coin-form-form-label1">Selling price</label>
                          <input
                            type="text"
                            value="$100.00"
                            className="coin-form-form-input1"
                          />
                        </div>
                      </div>
                      
                      {/* Tax Inclusive */}
                      <div className="coin-form-checkbox-item1 coin-form-tax-inclusive-row">
                        <label className="coin-form-checkbox-label2">Tax Inclusive ?</label>
                        <input type="checkbox" className="coin-form-checkbox12" />
                      </div>
                      
                      {/* Separator Line */}
                      <div className="coin-form-separator-line1"></div>
                      
                      {/* Tax Category */}
                      <div className="coin-form-form-row1 coin-form-cols-21">
                        <div className="coin-form-form-group1">
                          <label className="coin-form-form-label1">Tax Category</label>
                          <select className="coin-form-form-select1">
                            <option>TAX001</option>
                          </select>
                        </div>
                        <div className="coin-form-form-group1">
                          <label className="coin-form-form-label1">Tax 1 %</label>
                          <input
                            type="text"
                            value="10.000000%"
                            className="coin-form-form-input1"
                          />
                        </div>
                      </div>
                      
                      {/* Tax and Price No Tax */}
                      <div className="coin-form-form-row1 coin-form-cols-21">
                        <div className="coin-form-form-group1">
                          <label className="coin-form-form-label1">Tax</label>
                          <input
                            type="text"
                            value="10.00"
                            className="coin-form-form-input1"
                          />
                        </div>
                        <div className="coin-form-form-group1">
                          <label className="coin-form-form-label1">Price No Tax</label>
                          <input
                            type="text"
                            value="90.00"
                            className="coin-form-form-input1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Entitlements Section */}
                  <div className="coin-form-entitlements-section1">
                    <div className="coin-form-section-header1 coin-form-entitlements-header1">Entitlements</div>
                    <div className="coin-form-section-content1">
                      <div className="coin-form-entitlements-row1">
                        {/* Left side column */}
                        <div className="coin-form-left-column1">
                          <div className="coin-form-form-group1">
                            <label className="coin-form-form-label1">Cash Balance</label>
                            <input
                              type="text"
                              value="$100.00"
                              className="coin-form-form-input1 coin-form-cash-balance-input1"
                            />
                          </div>
                          <div className="coin-form-form-group1">
                            <label className="coin-form-form-label1">Bonus Balance</label>
                            <input
                              type="text"
                              value="$20.00"
                              className="coin-form-form-input1 coin-form-bonus-balance-input1"
                            />
                          </div>
                          
                          {/* Membership + Active Profile */}
                          <div className="coin-form-bottom-entitlements-row1">
                            <div className="coin-form-form-group1 coin-form-membership-group1">
                              <label className="coin-form-form-label1">Membership</label>
                              <select className="coin-form-form-select1">
                                <option>Happy Monday</option>
                              </select>
                            </div>
                            <div className="coin-form-form-group1 coin-form-active-profile-group1">
                              <label className="coin-form-form-label1">Active Profile</label>
                              <select className="coin-form-form-select1">
                                <option>Attraction</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side column */}
                        <div className="coin-form-right-column1">
                          {/* Card Expiry Date */}
                          <div className="coin-form-form-group1 coin-form-card-expiry-group1">
                            <label className="coin-form-form-label1">Card Expiry date</label>
                            <div className="coin-form-date-input-with-calendar1">
                              <input
                                type="text"
                                value="23/04/2025"
                                className="coin-form-form-input1 coin-form-card-expiry-input1"
                              />
<span className="coin-form-calendar-icon1">
  <img src={calendarIcon} alt="Calendar" className="coin-form-calendar-image1" />
</span>
                            </div>
                          </div>
                          
                          {/* Card Valid */}
                          <div className="coin-form-form-group1 coin-form-card-valid-group1">
                            <label className="coin-form-form-label1">Card Valid (days)</label>
                            <div className="coin-form-card-valid-horizontal1">
                              <input
                                type="text"
                                value="360"
                                className="coin-form-form-input1 coin-form-card-valid-input1"
                              />
                              <button className="coin-form-clear-button1">Clear Date</button>
                            </div>
                          </div>
                          
                          {/* Quantity + VIP */}
                          <div className="coin-form-quantity-vip-row1">
                            <div className="coin-form-form-group1 coin-form-quantity-group1">
                              <label className="coin-form-form-label1">Quantity</label>
                              <input
                                type="text"
                                value="112"
                                className="coin-form-form-input1 coin-form-quantity-input1"
                              />
                            </div>
                            <div className="coin-form-vip-card-group1">
                              <label htmlFor="vipCard" className="coin-form-vip-card-label1">
                                VIP Card
                              </label>
                              <input
                                type="checkbox"
                                className="coin-form-checkbox1 coin-form-vip-checkbox1"
                                id="vipCard"
                              />
                            </div>
                          </div>
                          
                          {/* Add Games Button */}
                          <button
                            className="coin-form-add-games-button1"
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
          <div className="coin-form-sidebar1">
            <div className="coin-form-registration-section1">
              <div className="coin-form-registration-header1">Registration</div>
              <div className="coin-form-registration-body1">
                {[
                  "Photo",
                  "First Name",
                  "Last Name",
                  "Phone",
                  "DOB",
                  "Sex",
                ].map((label, index) => (
                  <div key={index} className="coin-form-registration-checkbox-row1">
                    <span className="coin-form-registration-label1">{label}</span>
                    <input type="checkbox" className="coin-form-registration-checkbox1" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="coin-form-active-days-section1">
              <div className="coin-form-active-days-header1">Active days for sale</div>
              <div className="coin-form-active-days-content1">
                {[
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ].map((day, index) => (
                  <div key={index} className="coin-form-day-row1">
                    <span className="coin-form-day-name1">{day}</span>
                    <input type="checkbox" className="coin-form-registration-checkbox1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Last Updated Section */}
        <div className="coin-form-last-updated-section1">
          <div className="coin-form-last-updated-info1">
            <span className="coin-form-last-updated-label1">Last Updated Date</span>
            <span className="coin-form-last-updated-value1">09-Nov-2024 12:11</span>
            <span className="coin-form-last-updated-label1">Last Updated User</span>
            <span className="coin-form-last-updated-value1">Ahmed jaseel</span>
          </div>
        </div>
        
        {/* Footer */}
        <div className="coin-form-modal-footer1">
          <button className="coin-form-footer-button1 coin-form-save1">Save</button>
          <button className="coin-form-footer-button1 coin-form-new1">New</button>
          <button className="coin-form-footer-button1 coin-form-duplicate1">Duplicate</button>
          <button className="coin-form-footer-button1 coin-form-cancel1">Cancel</button>
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