import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import UserContext from "./UserContext";
import useSound from 'use-sound';
import coin from '../coin_sound.mp3';
import '../style/components.css'; 
import '../style/beer.css'; 


function Results(props){
    const user = useContext(UserContext);
    const [punctuation, setPunctuation ] = useState(0); 
    const [amountBeer, setAmountBeer] = useState(getNum());
    const [play, { stop }] = useSound(coin);

    function getNum() {
        if (user.user.punctuation >= 1 && user.user.punctuation <= 2){var num = "1"} 
        if (user.user.punctuation >= 3 && user.user.punctuation <= 5){var num = "2"} 
        if (user.user.punctuation >= 6 && user.user.punctuation <= 8){var num = "3"} 
        if (user.user.punctuation >= 9 && user.user.punctuation <= 10){var num = "4"} 
        return num;
    }

    useEffect(()=>{
        const range = setInterval(()=>{
            if (punctuation < user.user.punctuation){
                setPunctuation(prev => prev+1);
                play();
            }
        },100);
        return () => clearInterval(range)
    },[punctuation]);

    return (
        <div className="end-game flex-center-center-column">
            {<h2>{punctuation} of 10</h2> }
            {<h2>Here the beer you deserve!!</h2> }
            <div className="container-beer">
            <div className="counter"></div>  
            <div className="tap">
                <div className="base">
                <div className="pipes">
                    <span className="pipe1"></span>
                    <span className="pipe2"></span>
                    <span className="pipe-base"></span>
                    <div className="spicket">
                    <div className="spout">
                    <span className="top"></span>
                    <span className="bottom"></span>
                    </div>
                    <span className="cover"></span>
                    <span className="handle"></span>
                </div>
                </div> 
                </div>
            </div>
            <div className="beer-container">
            <div className="beer">
                <span className="stream"></span>
                <span className={"fill"+amountBeer}></span>
                <span className={"splash"+amountBeer}></span>
                <span className={"foam"+amountBeer}></span>
            </div>
            </div>
            <div className="beer-glass">
                <span className="glass">
                <span className="handle"></span>
                <span className="main"></span>
                </span>
            </div>
            {/* <div className="divide"></div> */}
            </div>
            <button onClick={()=> window.location.href="/"}>Play Again?</button>
        </div>
       
    );
}

export default Results;