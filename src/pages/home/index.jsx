import React, { useState, useRef, useEffect, useCallback} from "react";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";

import './styles.css';

const Home = () => {
    const navigate = useNavigate();
    const [pokemons, setPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    const startPokemon = useRef(1);
    const endPokemon = useRef(20);
    const inputRef = useRef(null);

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
            setFilteredPokemons(newPokemons);
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

    const debounce = (func, wait) => {
        let timeout;

        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            }

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
    }

    const onHandleChange = useCallback(debounce((e) => {
        const searchValue = e.target.value.toLowerCase();
        const deleteVowels = searchValue.replace(/[aeiou]/g, '');
        inputRef.current.value = deleteVowels;
        console.log(searchValue);
        const newPokemons = pokemons.filter(pokemon => pokemon.name.includes(searchValue));
        setFilteredPokemons(newPokemons);
    }, 500), [pokemons, setFilteredPokemons]);

        const onHandleKeyDown = (e) => {
            console.log(e.key);
        }
        const handleDetail = (item) => {
            navigate(`/pokemon/${item.id}`, { state: item });
        }
    return (
        <div className="container">
            <h1 className="title">Home</h1>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                <input ref={inputRef} placeholder="filter a pokemon..." className="input" onChange={onHandleChange} onKeyDown={onHandleKeyDown} value={inputRef?.current?.target?.value}/>
                <div className="list-container">
                    {filteredPokemons.map(pokemon => (
                        <Card key={pokemon.id} item={pokemon} goToDetails={handleDetail}  />
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