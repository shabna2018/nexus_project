import React, { useState } from "react";
import expand from '../components/assets/expand.png';
import { Trash2 } from "lucide-react";
import './codedev.css';

const GameCategory = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      description: "Card Sales",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 2,
      description: "Time Play",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 3,
      description: "FNB",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 4,
      description: "Packages",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 5,
      description: "Events",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
  ]);

  const [subCategories, setSubCategories] = useState([
    {
      id: 1,
      description: "Bad Service",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 2,
      description: "Employee",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 3,
      description: "Friends",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 4,
      description: "Good Customer",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
    {
      id: 5,
      description: "Relatives",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM",
    },
  ]);

  // State to track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    productDepartments1: false,
    discount1: false,
    productDepartments2: false,
    discount2: false,
    cardTransfer: false,
    lockAccount: false,
    compCard: false,
    refund: false,
  });

  const handleAddCategory = () => console.log("Add category clicked");
  const handleSaveCategories = () => console.log("Save categories clicked");
  const handleAddSubCategory = () => console.log("Add sub-category clicked");
  const handleSaveSubCategories = () =>
    console.log("Save sub-categories clicked");

  const handleDeleteItem = (id, type) => {
    console.log(`Delete ${type} with id ${id}`);
  };

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const renderSection = (sectionKey, title, data, type, handlers) => {
    const isExpanded = expandedSections[sectionKey];
    
    return (
      <div className="code-dev-section">
        <div 
          className="code-dev-section-header"
          onClick={() => toggleSection(sectionKey)}
          style={{ cursor: 'pointer' }}
        >
          <div className="code-dev-section-header-content">
            <div className="flex items-center gap-2">
              <h2 className="code-dev-section-title">{title}</h2>
            </div>
            <div className="code-dev-button-group">
              {isExpanded ? (
                <img src={expand} alt="Expand" className="expand-icon" style={{ width: "24px", height: "27px" }} />
              ) : (
                <img src={expand} alt="Expand" className="expand-icon" style={{ width: "24px", height: "27px" }}  />
              )}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlers.add();
                }} 
                className="code-dev-btn-add" >
                Add
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlers.save();
                }}
                className="code-dev-btn-save"
              >
                Save
              </button>
            </div>
          </div>
        </div>
        
        {isExpanded && (
          <div className="code-dev-table-container">
            <div className="code-dev-table-header">
              <div className="code-dev-table-header-cell">Description</div>
              <div className="code-dev-table-header-cell">Created</div>
              <div className="code-dev-table-header-cell">Last used</div>
              <div className="code-dev-table-header-cell"></div>
              <div className="code-dev-table-header-cell"></div>
            </div>
            <div className="code-dev-table-body">
              {data.map((item, index) => (
                <div
                  key={`${sectionKey}-${item.id}`}
                  className={`code-dev-table-row ${
                    index % 2 === 1 ? "even" : "odd"
                  }`}
                >
                  <div className="code-dev-table-cell">{item.description}</div>
                  <div className="code-dev-table-cell small-text">
                    {item.created}
                  </div>
                  <div className="code-dev-table-cell small-text">
                    {item.lastUsed}
                  </div>
                  <div className="code-dev-table-cell empty"></div>
                  <div className="code-dev-table-cell action">
                    <button
                      onClick={() => handleDeleteItem(item.id, type)}
                      className="code-dev-delete-button"
                    >
                      <Trash2 size={16} color="#6b7280" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="code-dev-container">
      {/* Header */}
      <div className="code-dev-header">
        <span className="code-dev-header-icon">🎮</span>
        <h1 className="code-dev-header-title">
          Product Departments & Reason Codes
        </h1>
      </div>

      {/* Product Departments Section 1 */}
      {renderSection(
        'productDepartments1',
        'Product Departments',
        categories,
        'category',
        { add: handleAddCategory, save: handleSaveCategories }
      )}

      {/* Discount Section 2 */}
      {renderSection(
        'discount2',
        'Discount Reason',
        subCategories,
        'subcategory',
        { add: handleAddSubCategory, save: handleSaveSubCategories }
      )}

      {/* Card Transfer Section */}
      {renderSection(
        'cardTransfer',
        'Card Transfer Reason',
        categories,
        'cardtransfer',
        { add: handleAddCategory, save: handleSaveCategories }
      )}

      {/* Lock Account Section */}
      {renderSection(
        'lockAccount',
        'Lock Account Reason',
        subCategories,
        'lockaccount',
        { add: handleAddSubCategory, save: handleSaveSubCategories }
      )}

      {/* Comp Card Section */}
      {renderSection(
        'compCard',
        'Comp Card Reason',
        categories,
        'compcard',
        { add: handleAddCategory, save: handleSaveCategories }
      )}

      {/* Refund Section */}
      {renderSection(
        'refund',
        'Refund Reason',
        subCategories,
        'refund',
        { add: handleAddSubCategory, save: handleSaveSubCategories }
      )}
    </div>
  );
};

export default GameCategory;