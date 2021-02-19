import React,{Component} from 'react';
import axios from 'axios';

class Query extends Component {
    state = {
        Email : "",
        PhoneNo : "",
        Queryy : ""
        
    };
    handleChange =  async (e) =>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    };
    handleSubmit = async () =>{
        if(this.state.Email!="" && this.state.PhoneNo!="" , this.state.Queryy!="")
        {
            axios.post('http://localhost:5000/login',this.state)
            .then(res=>{
                console.log(`posted sucessfully`);
                this.setState({Email: '' , PhoneNo: '' , Queryy: '' });
            });
    
        }
    };
    render(){
        return(
            <div className="query" >
                <form onSubmit={()=>this.handleSubmit()} style={{marginLeft:"480px",marginRight:"530px" , marginTop:"100px" , backgroundColor:"gray", borderRadius:"10px"}}>
                    <h3 style={{marginLeft:"70px" , marginTop:"10px", color:"white"}}>Enter Details</h3><br/>
                    <hr style={{width:"100%"}}/>
                    <h5 style={{marginLeft:"20px"}}>Enter Email id</h5>
                    <input  name="Email" onChange={(e)=>this.handleChange(e)} value={this.state.Email} style={{width:"250px" , height:"20px" , placeHolder:"name", marginLeft:"20px"}}/>
                    <br/>
                    <h5 style={{marginLeft:"20px"}}>Enter Contact No</h5>
                    <input  name="PhoneNo" onChange={(e)=>this.handleChange(e)} value={this.state.PhoneNo}  style={{width:"250px" , height:"20px" , placeHolder:"name" ,marginLeft:"20px" }}/><br/>
                    <h5 style={{marginLeft:"20px"}}>Enter Your Query</h5>
                    <input  name="Queryy" onChange={(e)=>this.handleChange(e)} value={this.state.Queryy}  style={{width:"250px" , height:"50px" , placeHolder:"name" ,marginLeft:"20px"}}/><br/>
                    <br/><button style={{borderRadius:"20px" ,width:"150px" , color:"white" , backgroundColor:"blue" , marginLeft:"80px" , marginBottom:"20px" }}> Submit</button>


    </form>


</div>

        );
    }
    
}
export default Query;

