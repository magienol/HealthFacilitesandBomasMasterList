import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importing Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Bomas from './components/Bomas';
import DataCard from './components/DataCard';
import Facilities from './components/Facilities';
import About from './components/About';
import Contact from './components/Contact';
import FacilitiesChart from './components/FacilitiesChart';
import OwnershipChart from './components/OwnershipChart';

// Importing Facilities and Bomas data
import { facilitiesData } from './data/facilitiesData';
import { bomasData } from './data/facilitiesData'; // Assuming this is exported similarly

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/facilities' element={<Facilities />} />
            <Route path='/about' element={<About />} />
            <Route path='/boma' element={<Bomas />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// Home Component
const Home = () => {
  // Calculate the totals for Facilities
  const totalFacilities = facilitiesData.length;
  const totalFunctional = facilitiesData.filter(facility => facility.status === 'Functional').length;
  const totalNonFunctional = facilitiesData.filter(facility => facility.status === 'Non-Functional').length;
  const totalHospitals = facilitiesData.filter(facility => facility.type === 'Hospital').length;
  const totalPHCC = facilitiesData.filter(facility => facility.type === 'PHCC').length;
  const totalPHCU = facilitiesData.filter(facility => facility.type === 'PHCU').length;
  const totalClinic = facilitiesData.filter(facility => facility.type === 'Clinic').length;

  // Calculate the totals for Bomas
  const totalBomas = bomasData.length;
  const totalFunctionalBomas = bomasData.filter(boma => boma.status === 'Functional').length;
  const totalNonFunctionalBomas = bomasData.filter(boma => boma.status === 'Non-Functional').length;

  // Ownership Totals for Facilities
  const totalPublic = facilitiesData.filter(facility => facility.owner === 'Public').length;
  const totalPrivate = facilitiesData.filter(facility => facility.owner === 'Private').length;
  const totalFaithBased = facilitiesData.filter(facility => facility.owner === 'Faith Based').length;
  const totalNGOs = facilitiesData.filter(facility => facility.owner === 'NGOs').length;
  const totalOrganizedForces = facilitiesData.filter(facility => facility.owner === 'Organized Forces').length;

  const [showFacilities, setShowFacilities] = useState(false);

  return (
    <div className='home-container'>
      <h1>Welcome to the South Sudan Health Facilities and Bomas Master List</h1>

      {/* Facilities DataCard Components */}
      <h2>Facilities Overview</h2>
      <div className='DataCard'>
        <div className='card' onClick={() => setShowFacilities(true)}>
          <DataCard title='Total Facilities' value={totalFacilities} />
        </div>

        <div className='card'><DataCard title='Public' value={totalPublic} /></div>
        <div className='card'><DataCard title='Private' value={totalPrivate} /></div>
        <div className='card'><DataCard title='Faith Based' value={totalFaithBased} /></div>
        <div className='card'><DataCard title='NGOs' value={totalNGOs} /></div>
        <div className='card'><DataCard title='Organized Forces' value={totalOrganizedForces} /></div>
      </div>

      <h2>Facility Type</h2>
      <div className='DataCard'>
        <div className='card'><DataCard title='Hospitals' value={totalHospitals} /></div>
        <div className='card'><DataCard title='PHCC' value={totalPHCC} /></div>
        <div className='card'><DataCard title='PHCU' value={totalPHCU} /></div>
        <div className='card'><DataCard title='Clinic' value={totalClinic} /></div>
      </div>

      <h2>Facility Functionality</h2>
      <div className='DataCard'>
        <div className='card'><DataCard title='Functional' value={totalFunctional} /></div>
        <div className='card'><DataCard title='Non-Functional' value={totalNonFunctional} /></div>
      </div>

      {/* Bomas DataCard Components */}
      <h2>Bomas Overview</h2>
      <div className='DataCard'>
        <div className='card'><DataCard title='Total Bomas' value={totalBomas} /></div>
        <div className='card'><DataCard title='Total Functional Bomas' value={totalFunctionalBomas} /></div>
        <div className='card'><DataCard title='Total Non-Functional Bomas' value={totalNonFunctionalBomas} /></div>
      </div>

      <FacilitiesChart />
      <OwnershipChart />
    </div>
  );
};

export default App;
