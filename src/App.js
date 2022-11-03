import './App.css';
import React, { useEffect, useState } from 'react';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home, Detail} from './pages/index'

const App = () => {
  
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="detail" element={<Detail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
