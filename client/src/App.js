import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import LoginContainer from './components/LoginContainer';
import CategoryContainer from './components/CategoryContainer';
import Quiz from './components/Quiz';

function App() {
  return (
      // <header className="header">
      //   <Navigation isLogued="false"></Navigation>
      // </header>
      <div>
          <LoginContainer></LoginContainer>
          <CategoryContainer></CategoryContainer>
          <Quiz></Quiz>
      </div>
   

  );
}

export default App;
