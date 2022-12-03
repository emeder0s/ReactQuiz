import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import UserContext from "./UserContext";
import './components.css'; 

function Results(props){
    const user = useContext(UserContext);
    const {punctuation, setPunctuation} = useState(0); 

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (punctuation <= user.punctuation){
                setPunctuation(prev => prev+1);
            }
        },1000);
        return () => clearInterval(interval)
    },[punctuation]);

    return (
        <div className="end-game flex-center-center-column">
            {/* {/* <h2>¡¡{punctuation} of {questions.length}!!</h2> */}
            {/* <button onClick={()=> window.location.href="/"}>Play Again?</button> */}
        </div>
       
    );
}

export default Results;