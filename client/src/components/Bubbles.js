import React, { useState, useEffect } from "react";
import '../style/components.css'; 

function Bubbles(props){

    return (
        <div className="bubbles">
            {/* for (let i = 0; i < 5; i++) { */}
                <div className="bubble"></div>  
                <div className="bubble"></div>  
                <div className="bubble"></div>  
                <div className="bubble"></div>  
                <div className="bubble"></div>  
                <div className="bubble"></div>   
            {/* }  */}
        </div>
       
    );
}

export default Bubbles;