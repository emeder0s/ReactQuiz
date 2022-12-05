import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import UserContext from "./UserContext";
import useSound from 'use-sound';
import tictoc from '../audio_questions.mp3';
import '../style/components.css'; 

function Quiz(props){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("questions")));
    const [answers, setAnswers] = useState(JSON.parse(localStorage.getItem("answers")));
    const [punctuation, setPunctuation] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [play, { stop }] = useSound(tictoc);
    const {user, setUser} = useContext(UserContext);

    function handleAnswer(isCorrect, e){
        stop();
        if(isCorrect){
            setPunctuation(punctuation + 1)
        }
        e.target.classList.add(isCorrect ? "correct" : "incorrect")
        setTimeout(()=>{
            if(currentQuestion === questions.length-1){
                setIsFinished(true);
            }else{
                setTimeLeft(10);
                setCurrentQuestion(currentQuestion+1)  
                setIsDisabled(false);  
            }
        }, 1500)   
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if (timeLeft === 5 && !isDisabled) {
                play();
            }
            if (timeLeft > 0){
                setTimeLeft(prev => prev-1);
            }
            if (timeLeft === 0){
                stop();
                setTimeLeft(10);
                setCurrentQuestion(currentQuestion+1);
                setIsDisabled(false);
            }
        },1000);
        return () => clearInterval(interval)
    },[timeLeft]);

    if(isFinished){
        setUser({username: user.username, punctuation})
        props.quiz(false);
        props.results(true);
    }

    return (
        <div id="questions">
            <div className="question-num">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="left-time">
                <span>Left Time: {timeLeft} </span>
            </div>
            <div className="question-title">
                <h3 key={currentQuestion} dangerouslySetInnerHTML={{__html: questions[currentQuestion]}}></h3>
            </div>
            <div className="question-answers">
                {answers[currentQuestion].map(ans => {
                    return <button 
                    className="answer"
                    key = {ans.answer}
                    onClick={(e) => {handleAnswer(ans.isCorrect,e); setIsDisabled(true)}}
                    dangerouslySetInnerHTML={{__html: ans.answer}}
                    ></button>
                    })}  
            </div>
        </div>
    );
}

export default Quiz;