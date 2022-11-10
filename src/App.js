import './App.css';
import React from 'react';
import NavBar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import { Home, Pokemon} from './pages/index'
import { ThemeProvider } from './context/theme.context';

const App = () => {
  
  return (
    <ThemeProvider>
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pokemon/:pokemonId" element={<Pokemon />} />
        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;
