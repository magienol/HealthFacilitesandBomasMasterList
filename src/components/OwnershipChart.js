import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { facilitiesData } from '../data/facilitiesData'; 
import html2canvas from 'html2canvas';

const OwnershipChart = () => {
  // Count the number of facilities per ownership type
  const countByOwnership = facilitiesData.reduce((acc, facility) => {
    acc[facility.owner] = (acc[facility.owner] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data for individual ownership types
  const chartData = Object.keys(countByOwnership).map(owner => ({
    name: owner,
    count: countByOwnership[owner],
  }));

  // Sum the total of all facilities (Public, Private, NGOs, Organized Forces, Faith-Based)
  const totalFacilitiesCount = facilitiesData.length;

  // Add the total facilities data as a new entry
  const totalFacilitiesData = {
    name: 'Total Facilities',
    count: totalFacilitiesCount,
  };

  // Combine ownership types and the Total Facilities into one data array
  const combinedData = [...chartData, totalFacilitiesData];

  // Sort the combined data from high to low by count
  const sortedCombinedData = combinedData.sort((a, b) => b.count - a.count);

  return (
    <div className='chart-container' style={{ width: '100%', height: 500 }}>
      {/* Display Total Facilities at the top */}
      <div style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        <p>Total Facilities: {totalFacilitiesCount}</p>
      </div>

      {/* Combined Chart (Ownership Types + Total Facilities) */}
      <ResponsiveContainer width='100%' height={350}>
        <BarChart data={sortedCombinedData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='count' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OwnershipChart;