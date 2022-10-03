import React from 'react';
import { useEffect,useState } from 'react'
import axios from "axios";
import {Table} from 'react-bootstrap';


const ComputePayments = () => {

  const [myData, setMyData] = useState([]);
  const [isError,setIsError] =useState('');
  

const getapiData = async() => {
 try{
  const res = await axios.get('/addexpense');
  setMyData(res.data.list);
  
 } catch (error){
  setIsError(error.message);
 }
}

useEffect(() => {
getapiData();
},[]);



  return (
    <>
    <h3>{isError}</h3>
        <Table striped responsive bordered hover variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>From</th>
          <th>To</th>
          <th>Amount</th>
          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

            {
                myData.map((data, index)=>{
                        let whoPaid = data.whoPaid;
                        let whom = data.whom;
                        let n = whom.length;
                        let amount = data.amount;
                        let difference = amount/n;
                 
                       for(let i = 0; i<n; i++){
                        if(whoPaid===whom[i]){
                          let perPersoncost = amount/n;
                              let remainingAmount  = perPersoncost *n-1;
                          console.log(remainingAmount);
                        }else if(whoPaid !== whom[i]){
                          console.log(amount/n)
                        }
                       }

                    return(
                        <tr key={index} className='text-primary' >
                       
                            <td >{index+1}</td>
                            if()
                            <td>{whom[0]}</td>
                            <td>{data.whoPaid}</td>
                            <td>{data.amount/n}</td>
                            
                            
                            <td> <button  className='btn btn-primary'>Delete</button> <button  className='btn btn-primary'>Edit</button></td>
                        </tr>
                    )
                })}
 </tbody>
    </Table>
  
    </>
  )
}

export default ComputePayments