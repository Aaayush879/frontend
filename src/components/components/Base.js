import React from 'react';
import {Jumbotron } from 'react-bootstrap';
import './Base.css';
import {Button} from 'react-bootstrap'




import Wellness from './Wellness';

const Base=(props) =>{
    return<div>
        <div className="my bg-info text-center text-light"style={{borderRadius:"10%" , width:"340px" , height:"400px" , borderRadius:"10px"}}>
        <br/>
        <img src ={props.imgsrc} style={{width:"200px",height:"200px" , marginLeft:"20px" ,marginRight:"20px"}}/>
        <br/><br/>
        
        <h6 style={{textAlign:"CENTER" }}>{props.texxt}</h6><br/>
        <h6 style={{textAlign:"CENTER" }}>{props.title}</h6>
        <br/>
        <Button className="btn-success btn-outline-primary">See More</Button>
        <br/><br/>
        </div>
    </div>
}
export default Base;

