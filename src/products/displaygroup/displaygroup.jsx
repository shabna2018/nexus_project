import React, { useState } from 'react';
import './displaygroup.css';
import DisplayGroupIcon from '../../components/assets/display-group-icon.png';
import ArrowIcon from '../../components/assets/arrows.png';
import ActiveCheckmarkIcon from '../../components/assets/checkbox_yellow.png';
import GroupAddIcon from '../../components/assets/group-add.png';
import GroupCancelIcon from '../../components/assets/group-cancel.png';
import DisplayGroupAdd from './displaygroupadd';
import BlackAddIcon from '../../components/assets/black_add.png';
import BlackCancelIcon from '../../components/assets/black_cancel.png';
import ChecklistIcon1 from '../../components/assets/Checklist.png';

const DisplayGroup = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  // ✅ groupData is now state
  const [groupData, setGroupData] = useState([
    {
      id: 1,
      active: false,
      displayOrder: 34,
      groupName: 'Trampoline Park',
      subItems: [{ name: 'Round Trampoline', isActive: true }]
    },
    {
      id: 2,
      active: false,
      displayOrder: 45,
      groupName: 'Ninja Park',
      subItems: [
        { name: 'Intermediate Zone', isActive: true },
        { name: 'Advanced Zone', isActive: true }
      ]
    },
    {
      id: 3,
      active: false,
      displayOrder: 89,
      groupName: 'Climbing Wall',
      subItems: [
        { name: 'Bouldering Wall', isActive: true },
        { name: 'Overhang Boulders', isActive: true },
        { name: 'Traverse Wall', isActive: true },
        { name: 'Low Height', isActive: true }
      ]
    }
  ]);

  // ✅ Toggle handler
  const handleToggleActive = (id) => {
    setGroupData((prev) =>
      prev.map((group) =>
        group.id === id ? { ...group, active: !group.active } : group
      )
    );
  };

  const handleAddGroup = () => setShowAddModal(true);
  const handleCloseModal = () => setShowAddModal(false);
  const handleSaveGroup = (groupData) => {
    console.log('New group data:', groupData);
  };

  return (
    <div className="display-group-container">
      {/* Header */}
      <div className="display-group-header">
        <h1 className="page-title">
          <img src={DisplayGroupIcon} alt="Display Group Icon" className="title-icon" />
          Display Group
        </h1>
        <div className="controls-section">
          <button className="refresh-btn">Refresh</button>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <div className="table-header">
          <div className="column-header">
            Active <img src={ArrowIcon} alt="Sort Arrow" className="sort-arrow" />
          </div>
          <div className="column-header">
            Display order <img src={ArrowIcon} alt="Sort Arrow" className="sort-arrow" />
          </div>
          <div className="column-header">Group</div>
          <div className="header-actions">
            <button className="add-group-btn" onClick={handleAddGroup}>Add Group</button>
          </div>
        </div>

        {/* Group List */}
        <div className="group-list">
          {groupData.map((group) => (
            <div key={group.id} className="group-item">
              <div className="group-main-row">
                <div className="active-cell">
                  <button
                    className="active-toggle-btn"
                    onClick={() => handleToggleActive(group.id)}
                  >
                    {/* Outer box always visible */}
                    <img
                      src={ActiveCheckmarkIcon}
                      alt="Active"
                      className="active-checkmark"
                    />
                    {/* Overlay checklist when active */}
                    {group.active && (
                      <img
                        src={ChecklistIcon1}
                        alt="Checklist"
                        className="checklist-icon1"
                      />
                    )}
                  </button>
                </div>

                <div className="display-order-cell">
                  <span className="order-number">{group.displayOrder}</span>
                </div>
                <div className="group-name-cell">{group.groupName}</div>
                <div className="group-actions-cell">
                  <button className="action-btn edit-btn">
                    <img src={GroupAddIcon} alt="Edit" className="action-icon" />
                  </button>
                  <button className="action-btn delete-btn">
                    <img src={GroupCancelIcon} alt="Delete" className="action-icon" />
                  </button>
                </div>
              </div>

              {/* Sub Items */}
              <div className="sub-items">
                {group.subItems.map((item, idx) => (
                  <div key={idx} className="sub-item">
                    <div className="sub-item-active-cell" />
                    <div className="sub-item-order-cell" />
                    <div className="sub-item-content-cell">{item.name}</div>
                    <div className="sub-item-actions-cell">
                      <div className="sub-item-extra-actions">
                        <button className="action-btn add-btn">
                          <img src={BlackAddIcon} alt="Add" className="action-icon" />
                        </button>
                        <button className="action-btn cancel-btn">
                          <img src={BlackCancelIcon} alt="Cancel" className="action-icon" />
                        </button>
                      </div>
                      <button className="action-btn edit-btn">
                        <img src={GroupAddIcon} alt="Edit" className="action-icon small" />
                      </button>
                      <button className="action-btn delete-btn">
                        <img src={GroupCancelIcon} alt="Delete" className="action-icon small" />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="sub-items-bottom-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <DisplayGroupAdd
        isOpen={showAddModal}
        onClose={handleCloseModal}
        onSave={handleSaveGroup}
      />
    </div>
  );
};

export default DisplayGroup;
