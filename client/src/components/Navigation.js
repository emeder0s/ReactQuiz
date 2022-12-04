import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import UserContext from "./UserContext";
import './components.css'; 


function Navigation (props) {
  const user = useContext(UserContext);
  const [navContent, setNavCotent] = useState(createNav());

  function createNav(){
    if(props.isLogued==="false"){
      var navConent = "";
    }else{
      var navConent =  <h4>Hello, {user.user.username}! Earn your beer!!</h4>;
    }
    return navConent;
  }

  return (
    <header className="header">
      <nav className="main-nav">
        { navContent}
      </nav>
    </header>
   );

}

export default Navigation;