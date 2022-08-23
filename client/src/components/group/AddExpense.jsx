import React, {useState} from "react";
import { Form,Button,Row,Col } from "react-bootstrap";

import './AddExpense.css';

const AddExpense = (props) => {

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

   const titleChangeHandler= (event) => {
      setEnteredTitle(event.target.value);
   };
   const amountChangeHandler = (event) => {
     setEnteredAmount(event.target.value);
   };
   const dateChangehandler = (event) => {
     setEnteredDate(event.target.value);
   };
  
   const submitHandler = (event) => {
    event.preventDefault();
     
       const expensedata ={
              title: enteredTitle,
              amount: enteredAmount,
              date: new Date(enteredDate)
       }
       props.onSaveExpenseData(expensedata);
       console.log(expensedata);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
   }

    return (
        <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangehandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Description</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                
                <div className="w-25 mt-3">
                    <div className="new-expense__control">
                    <label>Who Paid</label>
                    </div>
                
                           <Form.Select aria-label="Default select example">
                            <option className="option">Who Paid</option>
                            <option value="1">Amit</option>
                            <option value="2">Pawan</option>
                            <option value="3">Prince</option>
                            <option value="3">Sangram</option>
                            </Form.Select>
                </div>
                
     {['checkbox'].map((type) => (
        <>
        <div className="new-expense__control mt-3">
        <label>With Whom</label>
        </div>
        <div  className="mb-3">
          <Form.Check
            inline
            label="Amit"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Prince"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Shubham"
            type={type}
            id={`inline-${type}-3`}
          />
             <Form.Check
            inline
            label="Sangram"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
        
</>
      ))}

          </div>
                <Button variant="dark" className="mt-3">Save</Button>
        </form>
         </Col>
         </Row>
    );
}

export default AddExpense;