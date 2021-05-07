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

        
        

    </div>
}
export default mom;

