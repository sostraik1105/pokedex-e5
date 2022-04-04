import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Access = () => {

    const [userName, setUserName] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const submit = e=>{
        e.preventDefault();
        dispatch({
            type: "GET_USERNAME",
            payload: userName
        });
        setUserName("");
        navigate('/pokemon')
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <form>
                <label htmlFor="userName">User Name</label> <br/>
                <input 
                    type="text" 
                    value={userName}
                    id="userName"
                    onChange={e=> setUserName(e.target.value)}
                /> <br />
                <button onClick={submit}>Log In</button>
            </form>
        </div>
    )
}
