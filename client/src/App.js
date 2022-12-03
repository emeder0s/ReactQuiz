import React, { useState } from "react";
import './App.css';
import Navigation from './components/Navigation';
import LoginContainer from './components/LoginContainer';
import CategoryContainer from './components/CategoryContainer';
import Quiz from './components/Quiz';
import Results from './components/Results';
import UserContext from "./components/UserContext";
import Bubbles from "./components/Bubbles";
import Foam from "./components/Foam";

function App() {
  const [viewLogin,setViewLogin] = useState(true);
  const [viewCategory,setViewCategory] = useState(false);
  const [viewQuiz,setViewQuiz] = useState(false);
  const [viewResults,setViewResults] = useState(false);
  const [user, setUser] = useState();

  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>
        {viewLogin ?
        <div>
          <Foam></Foam> 
          <LoginContainer login={setViewLogin} category={setViewCategory} ></LoginContainer>
        </div> 
        : ""}
        {viewCategory ? 
        <div>
          <Foam></Foam>
          <Navigation></Navigation>
          <CategoryContainer category={setViewCategory} quiz={setViewQuiz}></CategoryContainer> 
        </div> 
        : ""} 
        {viewQuiz ? <Quiz quiz={setViewQuiz} results={setViewResults}></Quiz> : ""}
        {viewResults ?  
        <div>
          <Foam></Foam>
          <Navigation></Navigation>
          <Results login={setViewLogin}></Results>
          </div> 
        : ""}
      </UserContext.Provider>
      <Bubbles></Bubbles>
      </div>
      
  );
}

export default App;
