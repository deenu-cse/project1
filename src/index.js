import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Assuming App is the main component
import Routall from './allrouts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Slider from './slider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/movies/:id" element={<Routall />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
