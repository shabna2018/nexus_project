import React from "react";
import { useLocation } from "react-router-dom";
import "./topbar.css";

// Import assets
import breadcrumbIcon from "./assets/Group 1000003826.png";
import notificationIcon from "./assets/Group 418.png";
import dropdownIcon from "./assets/Group 39.png";
import profileImage from "./assets/Ellipse 3.png";
import helpIcon from "./assets/help-icon.png"; // Add help icon
import backIcon from "./assets/back-icon.png"; // Add back arrow icon

function TopBar() {
  const location = useLocation();

  // Map routes to breadcrumb structure
  const breadcrumbMap = {
    "/location-table": ["Settings", "Location Table"],
    "/code-development": ["Settings", "Code & Development"],

    "/add-location": ["Settings", "Location Table", "Location info"],
    "/edit-location": ["Settings", "Location Table", "Edit Location"],
    "/card-product": ["Products", "Card Product"],
    "/coin-product": ["Products", "Coin Product"],
    "/time-product": ["Products", "Time Product"],
    "/item-product": ["Products", "Item Product"],
    "/led-product": ["Products", "LED Product"],
    "/sticker-product": ["Products", "sticker Product"],
    "/combo-product": ["Products", "combo Product"],
    "/game-Cat": ["Products", "combo Product"],

    // Add more routes as needed
  };

  const currentPath = location.pathname;
  const breadcrumbs = breadcrumbMap[currentPath] || ["Settings"];

  return (
    <div className="topbar-container">
      {/* -------- Top Section (Help + Notification + Profile + Name + Dropdown) -------- */}
      <div className="topbar-main">
        <div className="topbar-left">
          {/* you can keep logo or breadcrumb trigger here later */}
        </div>

        <div className="topbar-right">
          {/* ✅ Help section moved here */}
          <div className="help-section">
            <img src={helpIcon} alt="Help" className="help-icon" />
            <span className="help-text">Help</span>
          </div>

          <img
            src={notificationIcon}
            alt="Notifications"
            className="notification-icon"
          />

          <div className="profile-section">
            <div className="profile-info">
              <span className="profile-name">Muhammed Mubin</span>
              <span className="profile-role">Manager</span>
            </div>
            <img src={profileImage} alt="Profile" className="profile-img" />
            <img src={dropdownIcon} alt="Dropdown" className="dropdown-icon" />
          </div>
        </div>
      </div>

      {/* -------- Bottom Section (Back Arrow + Breadcrumbs) -------- */}
      <div className="breadcrumb">
        <img src={backIcon} alt="Back" className="back-icon" />

        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span
              className={
                index === breadcrumbs.length - 1 ? "active" : "inactive"
              }
            >
              {crumb}
            </span>
            {index < breadcrumbs.length - 1 && (
              <img
                src={breadcrumbIcon}
                alt="Breadcrumb Icon"
                className="breadcrumb-icon"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TopBar;
