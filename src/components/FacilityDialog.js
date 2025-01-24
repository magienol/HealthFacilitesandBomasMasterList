import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import '../components/Style/FacilitiesDialog.css'; 
import me from '../image/me.jpeg';  // Assuming this is the image to be linked to the QR code

const FacilityDialog = ({ open, onClose, facility }) => {
  if (!facility || !open) return null;

  const facilityData = JSON.stringify({
    name: facility.name,
    type: facility.type,
    facilityId: facility.facilityId,
    state: facility.state,
    county: facility.county,
    countyCode: facility.countyCode,
    payam: facility.payam,
    payamCode: facility.payamCode,
    owner: facility.owner,
    location: facility.location,
    dateOfEstablishment: facility.dateOfEstablishment,
    support: facility.support
  });

  return (
    <div className={`facility-dialog-container ${open ? 'open' : ''}`} onClick={onClose}>
      <div className='facility-dialog' onClick={(e) => e.stopPropagation()}>
        <div className='facility-dialog-content'>
          <div className='facility-header'>
            <h4 className='facility-ministry-heading'>Republic of South Sudan</h4>
            <h4 className='facility-ministry-heading'>Ministry of Health</h4>
          </div>
          <div className='facility-logo'>
            <img src={me} alt='Logo' />
          </div>
          <h4 className='facility-info-heading'>Health Facility Information</h4>
          <hr />

          {/* Facility Information */}
          <div className='facility-info'>
            <div className='facility-info-item'>
              <p><strong>Facility Name:</strong> {facility.name}</p>
              <p><strong>Facility Code:</strong> {facility.facilityId}</p>
              <p><strong>Type:</strong> {facility.type}</p>
            </div>

            <div className='facility-info-item'>
              <p><strong>Owner:</strong> {facility.owner}</p>
            </div>

            <div className='facility-info-item'>
              <p><strong>State:</strong> {facility.state}</p>
              <p><strong>County:</strong> {facility.county}</p>
              <p><strong>County Code:</strong> {facility.countyCode || 'N/A'}</p>
            </div>

            <div className='facility-info-item'>
              <p><strong>payam:</strong> {facility.payam}</p>
              <p><strong>Payam Code:</strong> {facility.payamCode}</p>
              <p><strong>Date of Establishment:</strong> {facility.dateOfEstablishment}</p>
            </div>

            <div className='facility-info-item'>
              <p><strong>Support:</strong> {facility.support}</p>
            </div>
          </div>

          {/* QR Code for Facility Data */}
          <div className='qr-code-container'>
            <QRCodeCanvas value={facilityData} size={150} />
            <p className="qr-code-description">Scan the QR code to view the facility details</p>
            <p className="qr-code-description">This document is system generated and therefore does not require a signature from MOH. </p>
          </div>
        </div>

        <div className='facility-dialog-actions'>
          <button className='facility-close-button' onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FacilityDialog;
