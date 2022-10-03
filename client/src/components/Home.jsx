import React from 'react'
// import "./Home.css";
import {Container,Row,Col,Form,Button,Table} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';



const Home = () => {
 
    const [event,setEvent] =useState('');
    const [myData,setMyData]= useState([]);
  
     
       const submitHandler = async (e) => {
        e.preventDefault();
        
        //post data to dabase
        await axios.post("/" ,{
          name: event
        })
        .then(function(res){
          alert.apply(JSON.stringify(res.data))
        })
        .catch(function(error){
          console.error(error.message);
        })
        setEvent('');
       }
    
       //get data from database
       const getapiData =async() => {
        try{
          const res = await axios.get('/');
          setMyData(res.data);
          console.log(myData);
        }catch (error){
          console.log(error);
        }
       }
       //using useeffect
   useEffect(() => {
    getapiData();
    },[]);


  return (
    <>
   <Container>
    <h1 className='shadow-sm text-primary mt-3 p-3 text-center rounded'>Start a new expense sheet</h1>

    <Row>
      <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Create sheet name</Form.Label>
            <Form.Control type="text"
            placeholder="Enter sheet name"
            name="name"
            value={event}
            onChange={e=>setEvent(e.target.value)}
            />
          </Form.Group>
          <Button
          className="btn btn-primary rounded bt-lg btn-block"
          type="submit">
           Create
          </Button>
        </Form>
      
      </Col>
    </Row>
   </Container>



   <Table striped responsive bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Event Name</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

            {/* {
                event.map((data, index)=>{
                    return(
                        <tr key={index} className='text-primary' >
                          {console.log(data)}
                            <td >{index+1}</td>
                            <td>{data.firstName}</td>
                            
                            <td> <button  className='btn btn-primary'>view expenses</button></td>
                        </tr>
                    )
                })} */}
 </tbody>
    </Table>


   
    </>
  )
}

export default Home