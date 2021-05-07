import React from 'react';
import {Jumbotron } from 'react-bootstrap';
import './Base.css';
import {Button} from 'react-bootstrap'
import color from './Color';





import Wellness from './Wellness';

const Base=(props) =>{
    
    
    return<div >
        <div className="my bg-light  text-center text-dark d-block w-100 outline-primary " style={{borderRadius:"10%"  , borderRadius:"10px" }}>
        <br/>
        <img className="as" src ={props.imgsrc} style={{width:"60%",height:"55%" , marginLeft:"20px" ,marginRight:"20px"  , borderRadius:"10px"}}/>
        <br/>
        
        <h6 className="a"style={{textAlign:"CENTER" ,width:"auto" , justifyContent:"center" }}>{props.texxt}</h6>
        <h6 className="s"style={{textAlign:"CENTER" , width:"auto" ,  justifyContent:"center"}}>{props.title}</h6>
        <br/>
        <Button className="btn-success btn-outline-primary" style={{width:"65%"}} Link={color}>More</Button>
        <br/><br/>
        </div>
    </div>
}
export default Base;

