import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Successful from './successfull'; // PascalCase
import Failure from './failure';         // PascalCase

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/pass' element={<Successful />} />
      <Route path='/fail' element={<Failure />} />
    </Routes>
  </BrowserRouter>
);