import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavInclude from './Includes/Nav';
import Medaillion from './Includes/Medallion';
import FooterInclude from './Includes/Footer'; 
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavInclude/>
    <Medaillion/>
    <FooterInclude/>
  </React.StrictMode>
);
reportWebVitals();
