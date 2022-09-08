import React from 'react'
import { useEffect } from 'react'
import axios from "axios";

const ComputePayments = () => {

useEffect(() => {
axios.get("/addexpense")
.then((res)=>{
  console.log(res.data)
})
},[])
    
  return (
    <div>Welcom to compute ComputePayments</div>
  )
}

export default ComputePayments