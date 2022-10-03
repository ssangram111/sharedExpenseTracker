import React,{useState} from 'react';
import {Container,Row,Col,Form,Button} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';



function Signin() {
let navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const count = 3;
  
 const userLogin = async (e) => {
    e.preventDefault();
    
    if(count>3){

      const res = await fetch('/login' , {
        method:"POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body:JSON.stringify({
          email,password
        })
      });
    
      let data = await res.json();
       if(res.status === 400 || !data){
        window.alert("Invalid Credentials");
       }else{
        window.alert("login Successfully");
        navigate('/');
       }
    }else{
      window.alert("The account is locked please contact to cognic system ");
    }
  
    
 }

  return (
    <>
    <Container>
          <h1 className='shadow-sm text-primary mt-3   p-3 text-center rounded'>Sign in</h1>
          
          <Row>
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">

    <Form  method='POST'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        
        <Form.Control 
        type="email" 
        value={email}
        onChange= {(e) => setEmail(e.target.value)}
        placeholder= "Enter email" />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        value={password}
        onChange= {(e) => setPassword(e.target.value)}
        placeholder="Password" />
      </Form.Group>
      
      <Button 
      className='btn btn-primary rounded btn-lg btn-block' type="submit"
      value="Log in"
      onClick={userLogin}>
        Login
      </Button>
      
     
    </Form>
            </Col>
          </Row>
        </Container>
    </>
  );
}

export default Signin;