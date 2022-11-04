import React, { useState, useRef, useEffect} from "react";
import Card from "../../components/card";
import './styles.css';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const startPokemon = useRef(1);
    const endPokemon = useRef(20);

    const getPokemons = async (start = '1', end = '20') => {
        try {
            setIsLoading(true);
            const promises = [];
            for (let i = start; i <= end; i++) {
                promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
            }
            const results = await Promise.all(promises);
            const newPokemons = results.map((pokemon) => {
                const paddedIndex = ('00' + pokemon.id).slice(-3);
                const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
                const types = pokemon.types.map(type => type.type.name).join(', ');

                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image,
                    type: types,
                }
            });
            setPokemons(newPokemons);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
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

    const handlePrev = async () => {
        startPokemon.current -= 20;
        endPokemon.current -= 20;
        getPokemons(startPokemon.current, endPokemon.current);
    }

    return (
        <div className="container">
            <h1 className="title">Home</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                <div className="list-container">
                    {pokemons.map(pokemon => (
                        <Card key={pokemon.id} item={pokemon} />
                    ))}
                </div>
                <div className="button-container">
                    <button disabled={startPokemon.current <= 1 || isLoading} onClick={handlePrev}>Previous</button>
                    <button disabled={endPokemon.current >= 300 || isLoading}  onClick={handleNext}>Next</button>
                </div>
                </>
            )}
        </div>
    )
}

export default Home;