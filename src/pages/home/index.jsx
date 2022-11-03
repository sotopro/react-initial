import React, { useState, useRef, useEffect} from "react";
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
                return {
                    id: pokemon.id,
                    name: pokemon.name,
                    image,
                    type: pokemon.types.map(type => type.type.name).join(', '),
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


    console.log('pokemons', pokemons);

    return (
        <div>
            <h1>Home</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : null}
        </div>
    )
}

export default Home;