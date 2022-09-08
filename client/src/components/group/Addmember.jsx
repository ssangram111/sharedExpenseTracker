import React from 'react'
import { useState } from 'react'
import { Button,Row,Container,Col,Form } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';





const people = [
  {firstName: 'Shashank patel'},
   {firstName: 'Sangram Singh'},
   {firstName: 'Newton School'},
   
];
 
const Addmember = () => {
  let navigate = useNavigate();
const [members,setMembers] = useState(people);
  const [addFormData,setAddFormData] = useState([{
    firstName: "",
  }]);

  const handleAddFormChange = (event) => {
    event.preventDefault();
   

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

 setAddFormData(newFormData);
  }

  const handleAddFormSubmit = async(event) => {
   event.preventDefault();

   await axios.post("/",{
    firstName:members
  }).then(function(res){
      alert.apply(JSON.stringify(res.data))
  }).catch(function(error){
    console.error(error.message);
  })
  
  


  }
  return (
    <>
    <Container>

      <h2 className=' shadow-sm text-primary mt-3   p-3 text-center rounded'>Add Members</h2>
     
     <Row>
      <Col lg={5} md={6} sm={8} className="p-5 m-auto shadow-sm rounded-lg ">

        <Form  className='d-flex justify-content-around' 
        onSubmit={handleAddFormSubmit}>
          <Form.Group>
            <Form.Control
            name="firstName"
            className='w-100'
            type='text'
            placeholder='Enter Name'
          onChange={handleAddFormChange}
            
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
                members.map((data, index)=>{
                    return(
                        <tr key={index} className='text-primary' >
                          {console.log(data)}
                            <td >{index+1}</td>
                            <td>{data.firstName}</td>
                            
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