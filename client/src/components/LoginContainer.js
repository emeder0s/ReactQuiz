import React, { useState } from "react";
import { useContext } from 'react';
import './components.css';
import UserContext from "./UserContext";

function LoginContainer(props){
    const [username, setUsername] = useState();
    const {user, setUser} = useContext(UserContext); 
    
    const login = () =>{
        if (username){
            setUser({username:username,punctuation:0})
            // localStorage.setItem("userName",username);
            props.login(false);
            props.category(true);
        }
    }

    return (
        <div id="container">
            <h1>The Big Quiz</h1>
            <h4>with React</h4>
            <div id="formulario" className="flex-center-column ">
                <div  className="flex-center-column">
                    <label>Player</label>
                    <input onChange={(e) => {setUsername(e.target.value);}} type="text" name="player" />
                    <button id="start" className="button" onClick={login}>START</button>
                </div>
            </div>
        </div>
    );
}

export default LoginContainer;