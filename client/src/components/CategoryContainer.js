import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import UserContext from "./UserContext";
import './components.css'; 

function CategoryContainer(props){
    const [category, setCategory] = useState();
    const user = useContext(UserContext); 
    const jugar = () =>{
        fetch(category)
        .then((res) => res.json(res))
        .then((res) => {
                prepareQuiz(res.results);
                props.category(false);
                props.quiz(true);
        })
    }

    function prepareQuiz(results){
        const questions = [];
        const answers = [];
        results.map(result =>{
            questions.push(result.question);
            answers.push(getAnswers(result.incorrect_answers, result.correct_answer));
        })
        localStorage.setItem("questions",JSON.stringify(questions));
        localStorage.setItem("answers",JSON.stringify(answers));
    }

    function getAnswers(incorrect_answers, correct_answer){
        var answers = [{"answer":correct_answer, "isCorrect":true}];
        incorrect_answers.forEach(answer => {
            answers.push({"answer":answer, "isCorrect":false});
        });
        return shuffleArray(answers);
    }

    function shuffleArray(inputArray){
        return inputArray.sort(()=> Math.random() - 0.5);
    }

    return (
        <div id="bienvenida" className="flex-center-columnn">
            <div className="flex-center-center-column">
                <h2 id="cabecera2-bienvenida"></h2>
                <h2 id="cabecera3-bienvenida"> What do you want to play?</h2>
                <select id="categorias" onChange={(e) => setCategory(e.target.value)}>
                    <option disabled selected>Choose a category</option>  
                    <option value="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple">All categories</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple">General culture</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple">Movies</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple">Books</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple">TV</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple" >Board games</option>
                </select>
                <button id="jugar" onClick={jugar}>PLAY</button>
            </div>  
        </div>
    );
}

export default CategoryContainer;