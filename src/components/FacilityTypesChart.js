import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { facilityTypes } from '../data/facilityTypes';
import './Style/FacilityTypesChart.css';

const FacilityTypesChart = () => {
  const [chartRef, setChartRef] = useState(null);

  const downloadChart = (format) => {
    if (!chartRef) return;

    html2canvas(chartRef).then((canvas) => {
      if (format === 'png' || format === 'jpg') {
        const link = document.createElement('a');
        link.download = `facility-types-chart.${format}`;
        link.href = canvas.toDataURL(`image/${format}`);
        link.click();
      } else if (format === 'pdf') {
        const pdf = new jsPDF();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
        pdf.save('facility-types-chart.pdf');
      }
    });
  };

  return (
    <div className="facility-types-chart-container">
      <h2 className="chart-title">Facility Types</h2>
      <div ref={setChartRef}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={facilityTypes}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="download-buttons">
        <button onClick={() => downloadChart('png')} className="btn-download">Download PNG</button>
        <button onClick={() => downloadChart('jpg')} className="btn-download">Download JPG</button>
        <button onClick={() => downloadChart('pdf')} className="btn-download">Download PDF</button>
      </div>
    </div>
  );
};

export default FacilityTypesChart;
