import './App.css';
import React from 'react';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './screens/home/home';
import Detail from './screens/detail/detail';
const App = () => {
  return (
    <div>
     <NavBar />
     <main>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
