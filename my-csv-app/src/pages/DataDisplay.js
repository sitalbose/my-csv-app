"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/pages/DataDisplay.tsx
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("@mantine/core");
const DataDisplay = () => {
    const location = (0, react_router_dom_1.useLocation)();
    const csvData = location.state;
    if (!csvData || csvData.length === 0) {
        return <div>No data available. Please upload a CSV file.</div>;
    }
    return (<div>
      <h2>Data Display</h2>
      <core_1.Table>
        <thead>
          <tr>
            {Object.keys(csvData[0]).map((header, index) => (<th key={index}>{header}</th>))}
          </tr>
        </thead>
        <tbody>
          {csvData.map((row, rowIndex) => (<tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (<td key={colIndex}>{value || '0'}</td>))}
            </tr>))}
        </tbody>
      </core_1.Table>
    </div>);
};
exports.default = DataDisplay;
