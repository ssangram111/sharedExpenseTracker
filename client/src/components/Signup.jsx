import React, { useState } from 'react';
import {Container,Col,Row,Form,Button} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";



const Signup = () => {
  let navigate = useNavigate();
  
  const [user,setUser] =useState({
    name:"",
    email:"",
    password:"",
    cpassword:"" 
  });

  let name,value;
  const HandleInputs= (e) => {
    console.log(e);
    name= e.target.name;
    value= e.target.value;

    setUser({...user,[name]:value})
  }

const PostData = async(e) => {
     e.preventDefault();
     
     
     const {name,email,password,cpassword} = user;
     
    const res = await fetch("/register",{
      method:"POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,password,cpassword
      })
    })
    const data = await res.json();

    if(res.status === 422 || !data){
      window.alert("Please fill the data");
    }else{
      window.alert("Successfull registration");
    
      navigate("/login");
    }
}

  return (
    <>
        <Container  >
          <h1 className='shadow-sm text-primary mt-3  p-3 text-center rounded'>Signup</h1>
          
          <Row>
            <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form method='POST' onSubmit={PostData}>
            <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
          <Form.Control
          name="name" 
          type="text" 
          placeholder="Username" 
          value={user.name}
          onChange={HandleInputs}
          />
         
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        name='email' 
        type="email" 
        placeholder="Enter email"
        value={user.email}
        onChange={HandleInputs}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3"       controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
        <Form.Control 
        name='password'
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={HandleInputs}
        />
      </Form.Group>

      {/* confirm passoword */}
      <Form.Group className="mb-3"       controlId="formBasicPassword">
          <Form.Label>Confirm password</Form.Label>
        <Form.Control 
        name="cpassword"
        type="password" 
        placeholder="Confirm passoword"
        value={user.cpassword}
        onChange={HandleInputs}
         />
      </Form.Group>
      
      <Button 
      className='btn-primary rounded btn-lg' 
      type="submit"
       >
        Signup
      </Button>
      
     
    </Form>
            </Col>
          </Row>
        </Container>
    </>
  )
}

export default Signup