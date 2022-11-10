import './App.css';
import React from 'react';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home, Pokemon} from './pages/index'
import { PokemonProvider } from './context/pokemon';

const App = () => {
  return (
    <PokemonProvider>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemon/:pokemonId" element={<Pokemon />} />
        </Routes>
      </main>
    </PokemonProvider>
  );
}

export default App;
