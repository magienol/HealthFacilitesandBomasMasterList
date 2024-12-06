import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { facilitiesData } from '../data/facilitiesData'; // Assuming this is where your generated data is stored

const FacilitiesChart = () => {
  // Count the number of facilities per type
  const countByType = facilitiesData.reduce((acc, facility) => {
    acc[facility.type] = (acc[facility.type] || 0) + 1;
    return acc;
  }, {});

  // Prepare chart data for individual facility types
  const chartData = Object.keys(countByType).map(type => ({
    name: type,
    count: countByType[type],
  }));

  // Sum the total of 'Hospital', 'PHCC', 'PHCU', and 'Clinic'
  const totalFacilitiesCount = ['Hospital', 'PHCC', 'PHCU', 'Clinic'].reduce((sum, type) => {
    return sum + (countByType[type] || 0); // Add the count if the type exists
  }, 0);

  // Add the total facilities data as a new entry
  const totalFacilitiesData = {
    name: 'Total Facilities',
    count: totalFacilitiesCount,
  };

  // Combine individual facility types and the Total Facilities into one data array
  const combinedData = [...chartData, totalFacilitiesData];

  // Sort the combined data from high to low by count
  const sortedCombinedData = combinedData.sort((a, b) => b.count - a.count);

  return (
    <div className="chart-container" style={{ width: '100%', height: 500 }}>
      {/* Display Total Facilities at the top */}
      <div style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        <p>Total Facilities by Type: {totalFacilitiesCount}</p>
      </div>

      {/* Combined Chart (Individual Types + Total Facilities) */}
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={sortedCombinedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FacilitiesChart;
