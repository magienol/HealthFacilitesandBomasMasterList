import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing Components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Bomas from './components/Bomas';
import DataCard from './components/DataCard';
import Facilities from './components/Facilities';
import About from './components/About';
import Contact from './components/Contact';
import FacilitiesChart from './components/FacilitiesChart';
import OwnershipChart  from './components/OwnershipChart';
//import FacilitiesChart from './components/FacilitiesChart';

// Importing CSS files
//import './components/Style/Bomas.css';
//import './components/Style/DataCard.css';
//import './components/Style/Facilities.css';
//import './components/Style/FacilitiesChart.css';
//import './components/Style/FacilityTypesChart.css';
//import './components/Style/Footer.css';
//import './components/Style/NavBar.css';
//import './components/Style/Contact.css';


// Importing Facilities and Bomas data
import { facilitiesData } from './data/facilitiesData';
import { bomasData } from './data/facilitiesData'; // Assuming this is exported similarly

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/boma" element={<Bomas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
      <Footer />
      </div>
    </Router>
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

  return (
    <div className="home-container">
      <h1>Welcome to the South Sudan Health Facilities and Bomas Master List</h1>

      {/* Facilities DataCard Components */}
      <h2>Facilities Overview</h2>
      <div className="DataCard">
        <div className="card"><DataCard title="Total Facilities" value={totalFacilities} /></div>
        <div className="card"><DataCard title="Total Public" value={totalPublic} /></div>
        <div className="card"><DataCard title="Total Private" value={totalPrivate} /></div>
        <div className="card"><DataCard title="Total Faith Based" value={totalFaithBased} /></div>
        <div className="card"><DataCard title="Total NGOs" value={totalNGOs} /></div>
        <div className="card"><DataCard title="Total Organized Forces" value={totalOrganizedForces} /></div>
        <div className="card"><DataCard title="Total Functional" value={totalFunctional} /></div>
        <div className="card"><DataCard title="Total Non-Functional" value={totalNonFunctional} /></div>
        <div className="card"><DataCard title="Total Hospitals" value={totalHospitals} /></div>
        <div className="card"><DataCard title="Total PHCC" value={totalPHCC} /></div>
        <div className="card"><DataCard title="Total PHCU" value={totalPHCU} /></div>
        <div className="card"><DataCard title="Total Clinic" value={totalClinic} /></div>
      </div>

      {/* Bomas DataCard Components */}
      <h2>Bomas Overview</h2>
      <div className="DataCard">
        <div className="card"><DataCard title="Total Bomas" value={totalBomas} /></div>
        <div className="card"><DataCard title="Total Functional Bomas" value={totalFunctionalBomas} /></div>
        <div className="card"><DataCard title="Total Non-Functional Bomas" value={totalNonFunctionalBomas} /></div>
      </div>
    <FacilitiesChart />
    <OwnershipChart />
    </div>
  );
};

export default App;
