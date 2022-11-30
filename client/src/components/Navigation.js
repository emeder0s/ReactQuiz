import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
      super(props); //Llama al constructor de la super clase que es Component - para que las props le lleguen bien al componente. 
  }

  createNav(){
    if(this.props.isLogued==="false"){
      console.log("entra aquí");
      var navConent = "";
    }else{
      console.log("aquí no debería aquí");
      var navConent =  <h3>Statictis</h3>; /* <h3><img src={require('../../public/statistics-30-b.png')}/>Statictis</h3> */
    }
    return navConent;
  }

  render(){
    return (
    <nav className="main-nav">
       { this.createNav()}
    </nav>
   );
}
}

export default Navigation;