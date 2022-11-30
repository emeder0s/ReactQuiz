import React, { useState } from "react";
import './components.css'; 

function LoginContainer(props){
    const [username, setUsername] = useState();
    
    const login = () =>{
        if (username){
            localStorage.setItem("userName",username);
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