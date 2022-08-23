import React from 'react';
import { Button, Row,Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import './Task.css';
// import Table from 'react-bootstrap/Table';



const Task = ({title,index,deleteTask}) => {
 
  
  return (
    <>
    {/* <Row>
    <Col lg={5} md={6} sm={8} className="p-1 m-auto shadow-sm rounded-lg ">
    <div className='d-flex justify-content-center mt-3 p-2'>
    <ListGroup className='w-75'>
      <ListGroup.Item>{title}</ListGroup.Item>
    </ListGroup>
    <Button variant="dark" type='button' onClick={() => deleteTask(index)}>X</Button>
    </div>
    </Col>
    </Row> */}


    {/* using Table Method */}

    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Person Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title}</td>
            <td >
              <button className='btn btn-primary rounded btn-sm'>edit</button>
              <button className='btn btn-primary rounded btn-sm btn-block' onClick={() => deleteTask(index)}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    




    </>
  )
}

export default Task