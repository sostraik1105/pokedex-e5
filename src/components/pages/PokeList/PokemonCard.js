import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { colorType } from '../../../helpers/colorHelper';

export const PokemonCard = ({url}) => {

    const [poke, setPoke] = useState({});

    const type = poke.types?.[0]?.type.name;

    useEffect(()=>{
        return(
            axios.get(url)
                .then(res => setPoke(res.data))
        )
    },[url]);

    return (
    (poke) 
    ? 
        <>
            <header className='pokeCardInfo' style={{backgroundColor: `${colorType.color[type]}`}}>
                <figure>
                    <img src={poke.sprites?.other['official-artwork'].front_default} alt="" />
                </figure>
                <h2>{poke.name}</h2>
                <h3>
                {
                    poke.types?.length > 1 ?
                    `${poke.types?.[0]?.type.name}/${poke.types?.[1]?.type.name}` :
                    `${poke.types?.[0]?.type.name}`
                }
                </h3>
                <p>Type</p>
                <hr />
            </header>
            <article className='pokeCardStats'>
                <div>
                    <p>HP</p>
                    <h2>{poke.stats?.[0].base_stat}</h2>
                </div>
                <div>
                    <p>ATTACK</p>
                    <h2>{poke.stats?.[1].base_stat}</h2>
                </div>
                <div>
                    <p>DEFENSE</p>
                    <h2>{poke.stats?.[2].base_stat}</h2>
                </div>
                <div>
                    <p>SPEED</p>
                    <h2>{poke.stats?.[5].base_stat}</h2>
                </div>
            </article>
            
        </> 
    : 
        <h2>Loading ...</h2>
    )
}
