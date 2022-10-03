import React from 'react'
import { useState,useEffect } from 'react'
import { Button,Row,Container,Col,Form } from 'react-bootstrap';
import {Table} from 'react-bootstrap';

import axios from 'axios';


 
const Addmember = () => {
  
const [members,setMembers] = useState('');

//get data from database:-
const [myData,setMyData]= useState([]);


const submitHandler = async(event) => {
event.preventDefault();

   await axios.post("/addmember",{
    members:members
  })
  .then(function(res){
    alert.apply(JSON.stringify(res.data))   
  })
  .catch(function(error){
    console.error(error.message);
  })
  setMembers('');
  }
  
  //get data from database

  const getapiData = async() => {
    try{
     const res = await axios.get('/addmember');
     setMyData(res.data.member);
 
    } catch (error){
     console.log(error);
    }
   }
   //using useeffect
   useEffect(() => {
    getapiData();
    },[myData]);
    
   

  return (
    <>
    <Container>

      <h2 className=' shadow-sm text-primary mt-3   p-3 text-center rounded'>Add Members</h2>
     
     <Row>
      <Col lg={5} md={6} sm={8} className="p-5 m-auto shadow-sm rounded-lg ">

        <Form  className='d-flex justify-content-around' 
        onSubmit={submitHandler}>
          <Form.Group>
            <Form.Control
            name="firstName"
            className='w-100'
            type='text'
            value={members}
            placeholder='Enter Name'
          onChange={e=>setMembers(e.target.value)}
            
            />
          </Form.Group>
          <Button className='btn-dark w-25 '
          type='submit' >
            Add</Button>
        </Form>
      
      </Col>
     </Row>
    </Container>

{/* Create Table */}

<Table striped responsive bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>First Name</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

            {
                myData.map((data, index)=>{
                    return(
                        <tr key={index} className='text-primary' >
                          {/* {console.log(data)} */}
                            <td >{index+1}</td>
                            <td>{data.members}</td>
                            
                            <td> <button  className='btn btn-primary'>Delete</button> <button  className='btn btn-primary'>Edit</button></td>
                        </tr>
                    )
                })}
 </tbody>
    </Table>
  
    </>
  )
}

export default Addmember