import React from 'react';
import {Jumbotron,Form,Button , Row , Col} from 'react-bootstrap';
import PropeTypes from 'prop-types';
import './add-new-ticket.css'


const TicketForm =({handleOnChange , handleOnSubmit,  frmDt})=>{
    console.log(frmDt);
    return( 
        <Jumbotron className="mt-3 add-new-ticket bg-light" >
            <h1 className="text-center text-success">ANY QUERY ??</h1>
            <hr/>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3} style={{fontSize:"20px"}}>Email</Form.Label>
                    <Col sm={9}>
                    <Form.Control
                    name="subject"
                    
                    placeholder="subject"
                    value={frmDt.subject}
                    onChange={handleOnChange}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label className="text-info" style={{fontSize:"20px"}} >Current Date</Form.Label>
                    <Col >
                    <Form.Control
                    width="25%"
                    name="date"
                    type="date"
                    value= {frmDt.date}
                    placeholder="date"
                    onChange={handleOnChange}
                    required
                    /></Col>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{marginLeft:"250px" , fontSize:"30px"}}>Query</Form.Label>
                    <Form.Control
                    name="detail"
                    as="textarea"
                    value={frmDt.detail}
                    placeholder="enter your QUERY"
                    row="5"
                    onChange={handleOnChange}
                    required
                    />
                </Form.Group>
                <Button className="button btn-success btn-outline-primary" type="submit" block>submit</Button>
            </Form>
        </Jumbotron>
    );
    
};
TicketForm.PropeTypes ={
    handleOnSubmit:PropeTypes.func.isRequired,
    handleOnChange:PropeTypes.func.isRequired,
    frmDt:PropeTypes.func.isRequired
}

export default TicketForm;

