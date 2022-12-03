import React from 'react';
import './components.css'; 

class Navigation extends React.Component {
  constructor(props) {
      super(props); //Llama al constructor de la super clase que es Component - para que las props le lleguen bien al componente. 
  }

  createNav(){
    if(this.props.isLogued==="false"){
      var navConent = "";
    }else{
      var navConent =  <h4>Statictis</h4>; /* <h3><img src={require('../../public/statistics-30-b.png')}/>Statictis</h3> */
    }
    return navConent;
  }

  render(){
    return (
    <header className="header">
      <nav className="main-nav">
        { this.createNav()}
      </nav>
    </header>
   );
}
}

export default Navigation;