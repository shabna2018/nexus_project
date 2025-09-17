import React, { useState } from 'react';
import './accessprofile.css';
import accessProfileIcon from '../components/assets/accessprofile.png';
import { useNavigate } from 'react-router-dom';

const AccessProfile = () => {
  const [profileData, setProfileData] = useState([
    {
      id: 112,
      profile: 'Redemption Only',
      active: true,
      created: '03-Aug-12 12:23 PM',
      updated: '13-Aug-12 12:23 PM'
    },
    {
      id: 212,
      profile: 'Go cart',
      active: true,
      created: '04-Aug-12 12:23 PM',
      updated: '15-Aug-12 12:23 PM'
    },
    {
      id: 245,
      profile: 'Redemption Only',
      active: true,
      created: '04-Aug-12 12:23 PM',
      updated: '20-Aug-12 12:23 PM'
    },
    {
      id: 341,
      profile: 'Redemption Only',
      active: true,
      created: '09-Aug-12 12:23 PM',
      updated: '23-Aug-12 12:23 PM'
    },
    {
      id: 402,
      profile: 'Go cart',
      active: true,
      created: '11-Aug-12 12:23 PM',
      updated: '25-Aug-12 12:23 PM'
    },
    {
      id: 503,
      profile: 'Full Access',
      active: true,
      created: '12-Aug-12 12:23 PM',
      updated: '26-Aug-12 12:23 PM'
    },
    {
      id: 604,
      profile: 'Limited Access',
      active: false,
      created: '13-Aug-12 12:23 PM',
      updated: '27-Aug-12 12:23 PM'
    },
    {
      id: 705,
      profile: 'Guest Access',
      active: true,
      created: '14-Aug-12 12:23 PM',
      updated: '28-Aug-12 12:23 PM'
    }
  ]);

  const navigate = useNavigate(); 
  const toggleActive = (id) => {
    setProfileData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, active: !item.active } : item
      )
    );
  };
  const handleAddClick = () => {
    navigate('/addprofile');  // <-- This will navigate to AddProfile route
  };

  return (
    <div className="access-profile-wrapper">
      <div className="header">
        <div className="header-left">
          <img src={accessProfileIcon} alt="Access Profile" className="access-profile-icon" />
          <h2 className="header-title">Access Profile</h2>
        </div>
        <div className="header-buttons">
          <button className="btn btn-save">Save</button>
          <button className="btn btn-add" onClick={handleAddClick}>Add</button>
          <button className="btn btn-delete">Delete</button>
        </div>
      </div>
      
      <div className="table-container">
        <table className="profile-table">
          <thead>
            <tr>
              <th className="th first-column">ID</th>
              <th className="th">Profile</th>
              <th className="th active-column">Active</th> 
              <th className="th">Created</th>
              <th className="th last-column">Updated</th>
            </tr>
          </thead>
          <tbody>
            {profileData.map((row, index) => (
              <tr key={row.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td className="td first-column">{row.id}</td>
                <td className="td">{row.profile}</td>
                <td className="td active-column">
                  <input
                    type="checkbox"
                    checked={row.active}
                    onChange={() => toggleActive(row.id)}
                    className="custom-checkbox"
                  />
                </td>
                <td className="td">{row.created}</td>
                <td className="td last-column">{row.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccessProfile;