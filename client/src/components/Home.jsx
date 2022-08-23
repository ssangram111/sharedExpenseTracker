import React from 'react'
// import "./Home.css";
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';





const Home = () => {
    

 let navigate=useNavigate();

       const [event,setEvent] =useState({
        name:""
       });
  
       let name,value;
       const HandleInputs = (e) => {
        // console.log(e);
        name= e.target.name;
        value=e.target.value;
        
        setEvent({...event,[name]:value})
       }
       const PostData = async (e) => {
        e.preventDefault();
       
        console.log(event)

        const {name} = event;
       
        
        const res = await fetch("/",{
          method:"POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body:JSON.stringify({
            name
          })
        })
        const data = await res.json();
        if(res.status ===422 || !data){
          window.alert("please fill the data");
        }
        else {
       navigate('/tabs')
        }
       }
       

  return (
    <>
   <Container>
    <h1 className='shadow-sm text-primary mt-3 p-3 text-center rounded'>Start a new expense sheet</h1>

    <Row>
      <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Create sheet name</Form.Label>
            <Form.Control type="text"
            placeholder="Enter sheet name"
            name="name"
            value={event.name}
            onChange={HandleInputs}
            />
          </Form.Group>
          <Button
          className="btn btn-primary rounded bt-lg btn-block"
          type="submit"
          onClick={PostData}>
           Create
          </Button>
        </Form>
      
      </Col>
    </Row>
   </Container>


   
    </>
  )
}

export default Home