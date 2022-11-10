import React, { useContext } from "react";
import Card from "../../components/card";
import { PokemonContext } from "../../context/pokemon";

import './styles.css';

const Pokemon = () => {
    const { pokemons, pokemonId } = useContext(PokemonContext);
    const pokemon = pokemons.find(pokemon => pokemon.id === pokemonId);
    
    return (
        <div>
            <Card item={pokemon} />
        </div>
    )
}

export default Pokemon;