import React, { useState, useEffect } from "react";
import './components.css'; 

function CategoryContainer(props){
    const [category, setCategory] = useState();
    const jugar = () =>{
        fetch(category)
            .then((res) => res.json(res))
            .then((res) => {
            localStorage.setItem("questions",JSON.stringify(res.results));
        });  
    }
    return (
        <div id="bienvenida" className="flex-center-columnn">
            <div className="flex-center-center-column">
                <h2 id="cabecera2-bienvenida"></h2>
                <h3 id="cabecera3-bienvenida"> ¿A qué quieres jugar?</h3>
                <select id="categorias" onChange={(e) => setCategory(e.target.value)}>
                    <option value="https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple">Todas las categorías</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple">Cultura General</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple">Películas</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple">Libros</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple">Televisión</option>
                    <option value="https://opentdb.com/api.php?amount=10&category=16&difficulty=easy&type=multiple" >Juegos de mesa</option>
                </select>
                <button id="jugar" onClick={jugar}>PLAY</button>
            </div>  
        </div>
    );
}

export default CategoryContainer;