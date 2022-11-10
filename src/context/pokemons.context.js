import { createContext, useState } from "react";

const initialState = {
    pokemons: [],
    setPokemons: () => {},
    pokemonId: null,
    setPokemonId: () => {},
}

export const PokemonsContext = createContext(initialState);

export const PokemonsProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonId, setPokemonId] = useState(null);

    return (
        <PokemonsContext.Provider value={{ pokemons, setPokemons, pokemonId, setPokemonId }}>
            {children}
        </PokemonsContext.Provider>
    )
}