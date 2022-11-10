import './App.css';
import React from 'react';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home, Pokemon} from './pages/index'
import { ThemeProvider } from './context/theme.context';
import { PokemonsProvider } from './context/pokemons.context';

const App = () => {
  
  return (
    <ThemeProvider>
      <NavBar />
      <PokemonsProvider>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pokemon/:pokemonId" element={<Pokemon />} />
          </Routes>
        </main>
      </PokemonsProvider>
    </ThemeProvider>
  );
}

export default App;
