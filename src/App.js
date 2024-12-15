import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUsPage from './pages/AboutUsPage';
import Main from './pages/Main';
import Reg from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUsPage />} />
        <Route path="/test" element={<Main />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
