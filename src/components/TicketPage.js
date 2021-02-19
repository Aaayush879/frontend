import React, { useState , useEffect } from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import TicketForm from './TicketForm';
import axios from 'axios'

const initialFrmDt ={
    subject:"",
    date:"",
    detail:"",
};



const TicketPage =()=>{
    const [ frmData , setFrmData] = useState(initialFrmDt);
    useEffect(()=>{}, [frmData]);
    const handleOnChange =(e)=>{
        const { name , value} = e.target;

       

        setFrmData({
            ...frmData,
            [name]:value,
        });

    };

    const handleOnSubmit = async (e) =>{
        e.preventDefault()

        console.log('form submited',frmData)
        axios.post('http://localhost:3000/Query',initialFrmDt).then(res=>{
            console.log('posted');
            
        });

    }

    return(
        <div className="p-age bg-info" style={{ display:"flex" ,justifyContent:"center" , alignItems:"center" }}>
            <Container >
            <Row>
                <Col>
                <TicketForm  handleOnChange={handleOnChange} 
                handleOnSubmit={handleOnSubmit}
                frmDt={frmData} />
                </Col>
            </Row>
        </Container>

        </div>
        
    );
};
export default TicketPage;
