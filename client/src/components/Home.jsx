import React from 'react'
// import "./Home.css";
import {Container,Row,Col,Form,Button,Table} from 'react-bootstrap';
import { useState } from 'react';



const people = [
  {firstName: 'Trip to Manli', 
  
   },
   {firstName: 'Trip to Goa', 
  
    },
    {firstName: 'Trip To banglore', 
    
     },
     {firstName: 'Trip to Thailand', 
     
      }
];



const Home = () => {
 
  const [members,setMembers] = useState(people);



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



   <Table striped responsive bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Event Name</th>
          
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
                            
                            <td> <button  className='btn btn-primary'>view expenses</button></td>
                        </tr>
                    )
                })}
 </tbody>
    </Table>


   
    </>
  )
}

export default Home