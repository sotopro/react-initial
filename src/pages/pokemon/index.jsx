import React, { useContext } from "react";
import Card from "../../components/card";
import { PokemonsContext } from "../../context/pokemons.context";
import './styles.css';

const Pokemon = () => {
    const { pokemons, pokemonId } = useContext(PokemonsContext);

    const pokemon = pokemons.find(pokemonItem => pokemonItem.id === pokemonId);
    return (
        <div>
            <Card item={pokemon} />
        </div>
    )
}

export default Pokemon;