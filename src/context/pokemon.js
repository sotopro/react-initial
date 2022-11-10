import { createContext, useState  } from 'react'

export const PokemonContext = createContext({
    pokemons: null,
    setPokemon: () => {},
    pokemonId: null,
    setPokemonId: () => {},
});

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonId, setPokemonId] = useState(null);
    
    return (
        <PokemonContext.Provider value={{ pokemons, setPokemons, pokemonId, setPokemonId }}>
        {children}
        </PokemonContext.Provider>
    );
};