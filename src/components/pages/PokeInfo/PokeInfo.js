import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { colorType } from '../../../helpers/colorHelper';

export const PokeInfo = () => {
    const {id} = useParams();

    const [pokeInfo, setPokeInfo] = useState({});

    const type = pokeInfo.types?.[0]?.type.name;

    useEffect(()=>{
        return (
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => setPokeInfo(res.data))
        )
    },[id]);

    return (
    <div className='pokeInfo'>
        <section>

            <article className='pokeInfoHeader'>
                <figure style={{backgroundColor: `${colorType.color[type]}`}}>
                    <img src={pokeInfo.sprites?.other['official-artwork'].front_default} alt="" />
                </figure>
                <h2>#{pokeInfo.id}</h2>
                <h1>{pokeInfo.name}</h1>
                <section>
                    <div>
                        <p>Weight</p>
                        <h2>{pokeInfo.weight}</h2>
                    </div>
                    <div>
                        <p>Height</p>
                        <h2>{pokeInfo.height}</h2>
                    </div>
                </section>
                <section>
                    <div>
                        <p>type</p>
                        <h2>
                        {
                            pokeInfo.types?.length > 1 ?
                            `${pokeInfo.types?.[0]?.type.name}/${pokeInfo.types?.[1]?.type.name}` :
                            `${pokeInfo.types?.[0]?.type.name}`
                        }
                        </h2>
                    </div>
                    <div>
                        <p>Abilities</p>
                        <h2>
                        {
                            pokeInfo.types?.length > 1 ?
                            `${pokeInfo.abilities?.[0]?.ability.name}/${pokeInfo.abilities?.[1]?.ability.name}` :
                            `${pokeInfo.abilities?.[0]?.ability.name}`
                        }
                        </h2>
                    </div>
                </section>
            </article>

            <article className='stats'>
                <h2>Stats</h2>
                <div>
                    <p>HP</p>
                    <h2>{pokeInfo.stats?.[0].base_stat}/150</h2>
                </div>
                <div>
                    <p>ATTACK</p>
                    <h2>{pokeInfo.stats?.[1].base_stat}/150</h2>
                </div>
                <div>
                    <p>DEFENSE</p>
                    <h2>{pokeInfo.stats?.[2].base_stat}/150</h2>
                </div>
                <div>
                    <p>SPEED</p>
                    <h2>{pokeInfo.stats?.[5].base_stat}/150</h2>
                </div>
            </article>
        </section>

        <section className='movements'>
            <h2>Movements</h2>
            <article> 
            {
                pokeInfo.moves?.map((el,i)=>(
                    <p key={i}>{el.move?.name}</p>
                ))
            }
            </article>
        </section>
    </div>
    )
}
