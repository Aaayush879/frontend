import React from 'react';
import Present from './present';
import LogoImage from './new.jpg';
import './mom.css'

const mom=()=>{
    return<div style={{ width:"100%", height:"100%" , textAlign:"center" ,backgroundImage: `url(${LogoImage})` , backgroundRepeat:"no-repeat", backgroundSize:"Cover", backgroundPosition: "center"}}>
        <div className="sap text-success text-center" >
            <h1>Happy Mothers Day Mummy</h1>
        </div>
        
        <div className="are" style={{ alignItems:"center", alignContent:"justify" , marginBottom:"20%" , marginLeft:"30%" , borderRadius:"20%"}}>
        <Present/>
        </div>

        <div className="text-center text-white " style={{widht:"100%" , height:"10%" , backgroundColor:"black"}}>
            <h3>Made by me</h3>

        </div>

    </div>
}
export default mom;
