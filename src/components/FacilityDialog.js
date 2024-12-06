import React from 'react';
import "../components/Style/FacilitiesDialog.css"; 
import logo192 from '../image/logo192.png';
import me from '../image/me.jpeg';

const FacilityDialog = ({ open, onClose, facility }) => {
  if (!facility || !open) return null; // Return null if no facility or dialog is not open

  return (
    <div className={`facility-dialog-container ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="facility-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="facility-dialog-content">
          <div className="facility-header">
            <h4 className="facility-ministry-heading">Republic of South Sudan</h4>
            <h4 className="facility-ministry-heading">Ministry of Health</h4>
          </div>
          <div className="facility-logo">
            <img src={me} alt="Logo" />
          </div>
          <h4 className="facility-info-heading">Health Facility Information</h4>
<hr></hr>
          {/* Facility Information */}
          <div className="facility-info">
            <div className="facility-info-item">
              <p><strong>Facility Name:</strong> {facility.name}</p>
              <p><strong>Type:</strong> {facility.type}</p>
            </div>
            <div className="facility-info-item">
              <p><strong>State:</strong> {facility.state}</p>
              <p><strong>County:</strong> {facility.county}</p>
            </div>
            <div className="facility-info-item">
              <p><strong>Payam:</strong> {facility.payam}</p>
              <p><strong>Owner:</strong> {facility.owner}</p>
            </div>
            <div className="facility-info-item">
              <p><strong>Location:</strong> {facility.location}</p>
              <p><strong>Date of Establishment:</strong> {facility.dateOfEstablishment}</p>
            </div>
            <div className="facility-info-item">
              <p><strong>Operating 24 Hours:</strong> {facility.open24Hours === 24 ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>

        <div className="facility-dialog-actions">
          <button className="facility-close-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FacilityDialog;
