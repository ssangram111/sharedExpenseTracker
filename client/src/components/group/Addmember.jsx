import React from 'react'
import { useState } from 'react'
import { Button,Row,Container,Col,Form } from 'react-bootstrap';
import Task from './Task';

const Addmember = () => {

  const [tasks,setTasks]= useState([]);
  const [title,setTitle]= useState("");

  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title)
    setTasks([...tasks,{
      title,
    }]);
    setTitle("");
  }

//   const deleteTask = (index)=>{
//     const filteredArr = tasks.filter((val,i)=>{
//      return i!==index;
//     });
//     setTasks(filteredArr);
//     console.log(filteredArr)
//  }

const deleteTask = (index) => {
  const data = [...tasks];
  data.splice(index,1);
  setTasks(data);
}
  return (
    <>
    <Container>

      <h2 className=' shadow-sm text-secondary mt-3   p-3 text-center rounded'>Add Members</h2>
     
     <Row>
      <Col lg={5} md={6} sm={8} className="p-5 m-auto shadow-sm rounded-lg ">

        <Form onSubmit={submitHandler} className='d-flex justify-content-around'>
          <Form.Group>
            <Form.Control
            className='w-100'
            type='text'
            placeholder='Enter Name'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
          </Form.Group>
          <Button className='btn-dark w-25 '
          type='submit' >
            Add</Button>
        </Form>
      
      </Col>
     </Row>
    </Container>

    {/* Map the data */}
    {tasks.map((item,index)=>(
      <Task
      key={index}
      title={item.title}
      index={index}
      deleteTask ={deleteTask}
      />
      ))}
    </>
  )
}

export default Addmember