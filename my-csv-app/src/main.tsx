// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CSVForm from './components/CSVForm';
import DataDisplay from './pages/DataDisplay';
import './styles.css';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CSVForm />} />
        <Route path="/display" element={<DataDisplay />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
