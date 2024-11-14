// src/pages/DataDisplay.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Table } from '@mantine/core';

const DataDisplay: React.FC = () => {
  const location = useLocation();
  const csvData = location.state as any[];

  if (!csvData || csvData.length === 0) {
    return <div>No data available. Please upload a CSV file.</div>;
  }

  return (
    <div>
      <h2>Data Display</h2>
      <Table>
        <thead>
          <tr>
            {Object.keys(csvData[0]).map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value || '0'}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataDisplay;
