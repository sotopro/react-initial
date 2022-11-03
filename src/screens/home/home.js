import React, { useEffect, useRef, useState } from "react";
import Card from "../../components/card/card";
import './styles.css';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const startPokemon = useRef(1);
  const endPokemon = useRef(20);

  const getPokemons = async (start = '1', end = '20') => {
    try{
        setLoading(true);
        const promises = [];
        for (let i = start; i <= end; i++) {
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }
        const results = await Promise.all(promises);
        console.log(results);
        const newPokemons = results.map((pokemon, index) => {
            const paddedIndex = ('00' + (pokemon.id)).slice(-3);
            const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
            return {
            id: pokemon.id,
            name: pokemon.name,
            image,
            type: pokemon.types.map(type => type.type.name).join(', '),
            }
        });
        setPokemons(newPokemons);
    } catch (error) {
        setError(true);
    } finally {
        setLoading(false);
    }
}

  useEffect(() => {
    getPokemons(startPokemon.current, endPokemon.current);
  }, []);

  const handleNext = async () => {
    startPokemon.current += 20;
    endPokemon.current += 20;
    getPokemons(startPokemon.current, endPokemon.current);
  }

  const handlePrev =  async() => {
    startPokemon.current -= 20;
    endPokemon.current -= 20;
    getPokemons(startPokemon.current, endPokemon.current);

  }
    return (
        <div className="container">
            <h1 className="title">Home</h1>
            <div className='list-container'>
                {pokemons.map((pokemon) => (
                    <Card key={pokemon.id} item={pokemon} />
                ))}
            </div>
            <div className='button-container'>
                <button disabled={startPokemon.current <= 1 || loading} onClick={handlePrev}>Prev</button>
                <button disabled={endPokemon.current >= 300 || loading} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
};

export default Home;