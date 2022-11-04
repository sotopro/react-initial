import './App.css';
import React from 'react';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home, Pokemon} from './pages/index'

const App = () => {
  
  return (
    <div>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemon/:pokemonId" element={<Pokemon />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
