import React, { useState, useEffect } from "react";
import './components.css'; 

function Quiz(props){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [punctuation, setPunctuation] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [areDisabled, setAreDisabled] = useState(false);

    const questions = JSON.parse(localStorage.getItem("questions"));
    const answers = questions.map(question => getAnswers(question.incorrect_answers,question.correct_answer))
    answers[currentQuestion].forEach(ans => {console.log(ans.answer)})
    
    function shuffleArray(inputArray){
        return inputArray.sort(()=> Math.random() - 0.5);
    }

    function getAnswers(incorrect_answers, correct_answer){
        var answers = [{"answer":correct_answer, "isCorrect":true}];
        incorrect_answers.forEach(answer => {
            answers.push({"answer":answer, "isCorrect":false});
        });
        return shuffleArray(answers);
    }

    function handleAnswer(isCorrect, e){
        if(isCorrect){
            setPunctuation(punctuation + 1)
        }
        e.target.classList.add(isCorrect ? "correct" : "incorrect")
        setTimeout(()=>{
            if(currentQuestion === questions.length-1){
                setIsFinished(true);
            }else{
                setCurrentQuestion(currentQuestion+1)
            }
        }, 1500)   
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if ({timeLeft}>0){
                setTimeLeft(prev => prev-1);
            }
            if ({timeLeft}===0){
                setAreDisabled(true);
            }
        },1000);
        return () => clearInterval(interval)
    },{timeLeft});

    if(isFinished) return(
        <div className="end-game">
            <p>{punctuation} of {questions.length}</p>
            <button onClick={()=> window.location.href="/"}>Play Again?</button>
        </div>
    );
    return (
        <div id="questions">
            <div className="question-num">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
            </div>
            <div className="left-time">
                <span>Left Time: {timeLeft} </span>
            </div>
            <div className="question-title">
                <h3>{questions[currentQuestion].question}</h3>
            </div>
            <div className="question-answers">
                {answers[currentQuestion].forEach(ans => {
                    <button 
                    className="answer" 
                    key={ans.answer}
                    disabled= {areDisabled}
                    onClick={(e) => handleAnswer(ans.isCorrect,e)}
                    >{ans.answer}</button>
                })}  
            </div>
 
        </div>
    );
}

export default Quiz;