import React from "react";
import Tilt from 'react-parallax-tilt';
import './logo.css';
import face from './face.png';


const Logo = () => {
    return (
       <Tilt className="ma4 mt0 Tilt br2 shadow-2" style={{width:'150px', height: '150px'}}>
        
          <img src={face} alt="logo"/>
       
      </Tilt>
    )
}

export default Logo