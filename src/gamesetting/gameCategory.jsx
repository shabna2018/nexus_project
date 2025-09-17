import React, { useState } from 'react';
import { Trash2, MoreVertical } from 'lucide-react';
import './gameCategory.css';

const GameCategory = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      description: "Group-1 Video",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 2,
      description: "Group-1 Redemption",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 3,
      description: "Group-1 Cranes",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 4,
      description: "Group-1 Merch",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 5,
      description: "Group-1 Photo / Fixed",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 6,
      description: "Group-1 Additional Item",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 7,
      description: "Group-1 Extra Content",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 8,
      description: "Group-1 More Items",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    }
  ]);

  const [subCategories, setSubCategories] = useState([
    {
      id: 1,
      description: "Description",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 2,
      description: "Cranes",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 3,
      description: "Merchandisers",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 4,
      description: "Not Assigned",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 5,
      description: "Photo / Fixed",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 6,
      description: "Additional Sub-Category",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 7,
      description: "Extra Sub-Category",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    },
    {
      id: 8,
      description: "More Sub-Categories",
      created: "03-Aug-12 12:23 PM",
      lastUsed: "03-Aug-12 12:23 PM"
    }
  ]);

  const handleAddCategory = () => {
    console.log('Add category clicked');
  };

  const handleSaveCategories = () => {
    console.log('Save categories clicked');
  };

  const handleAddSubCategory = () => {
    console.log('Add sub-category clicked');
  };

  const handleSaveSubCategories = () => {
    console.log('Save sub-categories clicked');
  };

  const handleDeleteItem = (id, type) => {
    console.log(`Delete ${type} with id ${id}`);
  };

  return (
    <div className="game-category-container">
      {/* Header */}
      <div className="game-category-header">
        <span className="game-category-header-icon">🎮</span>
        <h1 className="game-category-header-title">Game Category</h1>
      </div>

      {/* Category Section */}
      <div className="game-category-section">
        {/* Category Header */}
        <div className="game-category-section-header">
          <div className="game-category-section-header-content">
            <h2 className="game-category-section-title">Category</h2>
            <div className="game-category-button-group">
              <button 
                onClick={handleAddCategory}
                className="game-category-btn-add"
              >Add</button>
              <button 
                onClick={handleSaveCategories}
                className="game-category-btn-save"
              >Save</button>
            </div>
          </div>
        </div>

        {/* Category Table */}
        <div className="game-category-table-container">
          {/* Table Header */}
          <div className="game-category-table-header">
            <div className="game-category-table-header-cell">Description</div>
            <div className="game-category-table-header-cell">Created</div>
            <div className="game-category-table-header-cell">Last used</div>
            <div className="game-category-table-header-cell"></div>
            <div className="game-category-table-header-cell"></div>
          </div>
          
          {/* Table Body */}
          <div className="game-category-table-body">
            {categories.map((item, index) => (
              <div key={item.id} className={`game-category-table-row ${index % 2 === 1 ? 'even' : 'odd'}`}>
                <div className="game-category-table-cell">{item.description}</div>
                <div className="game-category-table-cell small-text">{item.created}</div>
                <div className="game-category-table-cell small-text">{item.lastUsed}</div>
                <div className="game-category-table-cell empty"></div>
                <div className="game-category-table-cell action">
                  <button 
                    onClick={() => handleDeleteItem(item.id, 'category')}
                    className="game-category-delete-button"
                  >
                    <Trash2 size={16} color="#6b7280" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-Category Section */}
      <div className="game-category-section">
        {/* Sub-Category Header */}
        <div className="game-category-section-header">
          <div className="game-category-section-header-content">
            <h2 className="game-category-section-title">Sub-Category</h2>
            <div className="game-category-button-group">
              <button 
                onClick={handleAddSubCategory}
                className="game-category-btn-add"
              >Add</button>
              <button 
                onClick={handleSaveSubCategories}
                className="game-category-btn-save"
              >Save</button>
            </div>
          </div>
        </div>

        {/* Sub-Category Table */}
        <div className="game-category-table-container">
          {/* Table Header */}
          <div className="game-category-table-header">
            <div className="game-category-table-header-cell">Description</div>
            <div className="game-category-table-header-cell">Created</div>
            <div className="game-category-table-header-cell">Last used</div>
            <div className="game-category-table-header-cell"></div>
            <div className="game-category-table-header-cell"></div>
          </div>
          
          {/* Scrollable Table Body */}
          <div className="game-category-table-body">
            {subCategories.map((item, index) => (
              <div key={item.id} className={`game-category-table-row ${index % 2 === 1 ? 'even' : 'odd'}`}>
                <div className="game-category-table-cell">{item.description}</div>
                <div className="game-category-table-cell small-text">{item.created}</div>
                <div className="game-category-table-cell small-text">{item.lastUsed}</div>
                <div className="game-category-table-cell empty"></div>
                <div className="game-category-table-cell action">
                  <button 
                    onClick={() => handleDeleteItem(item.id, 'subcategory')}
                    className="game-category-delete-button"
                  >
                    <Trash2 size={16} color="#6b7280" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCategory;