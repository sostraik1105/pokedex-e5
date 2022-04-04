import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Searchers = ({ types }) => {

    const [id_nom, setId_nom] = useState(""); 

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const submit = (e)=>{
        e.preventDefault();
        navigate(`/pokemon/${id_nom}`);
    }

    const selectedType = e =>{
            dispatch({
                type: "GET_TYPE",
                payload: e.target.value
            });
    }

    return (
    <> 
        <form>
            <input 
                type="text" 
                value={id_nom}
                id="id_nom"
                onChange={e=> setId_nom(e.target.value)}
            />
            <button onClick={submit}>Search</button>
        </form>

        <div>
            <select onChange={selectedType}>
                <option value="">all types</option>
                {types?.map((e)=>(
                    <option key={e.url} value={e.url}>{e.name}</option>
                ))}
            </select>
        </div>
    </>
    )
}
