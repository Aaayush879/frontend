import React from 'react';
import Present from './present';
import LogoImage from './new.jpg';
import './mom.css'

const mom=()=>{
    return<div>
        <div className="sap text-success text-center" >
            <h1>Happy Mothers Day Mummy</h1>
        </div>
        
        <div className="are" style={{ alignItems:"center", alignContent:"justify" , marginBottom:"25%" , marginLeft:"30%" , borderRadius:"20%"}}>
        <Present/>
        </div>

        <div className="text-center text-white " style={{widht:"100%" , height:"8%" , backgroundColor:"black" , marginBottom:"2%"}}>
            <h3>Made by me</h3>

        </div>

    </div>
}
export default mom;

