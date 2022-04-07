import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { PokemonCard } from './PokemonCard';
import { Searchers } from './Searchers';

export const Pokemons = () => {

    const userName = useSelector(state => state.userName);

    const type = useSelector(state => state.type);

    const [types, setTypes] = useState([]);

    const [pokemonList, setPokemonList] = useState([]);

    const [page, setPage] = useState(1);
    const itemsNumber = 8;
    const lastIndex = page*itemsNumber;
    const firstIndex = lastIndex - itemsNumber;
    const pokemonPaginated = pokemonList?.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(pokemonList?.length / itemsNumber);

    useEffect(()=>{

        axios.get('https://pokeapi.co/api/v2/type/')
            .then(res => setTypes(res.data));

        if(type === ''){
            return (
                axios.get('https://pokeapi.co/api/v2/pokemon')
                    .then(res => setPokemonList(res.data.results))
            )
        } else {
            return(
                axios.get(type)
                    .then(res => setPokemonList(res.data.pokemon))
            )
        }
        
    },[type]);

    return (
    <>
        <h1>Welcome {userName}</h1>
        
        <div>
            <Searchers types={types.results} setPage={setPage}/>
        </div>

        <ul className='pokecontainer'>
            { pokemonPaginated.map(el => (
                <li key={el.name ? el.name : el.pokemon.name} className='pokeCards'>
                    <Link to={`/pokemon/${el.name ? el.name : el.pokemon.name}`}>
                        <PokemonCard key={el.name ? el.name : el.pokemon.name} url={el.url ? el.url : el.pokemon.url}/>
                    </Link>
                </li>
            ))}
        </ul>

        <div>
            <button 
                onClick={()=> setPage(page - 1)}
                disabled={page<=1}
            >
                Anterior
            </button>
            <button 
                onClick={()=> setPage(page + 1)}
                disabled={page >= totalPages}
            >
                siguiente
            </button>
        </div>
    </>
    )
}
