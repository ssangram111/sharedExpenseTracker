import React, {useState} from "react";
import { Form,Button,Row,Col, Container } from "react-bootstrap";
import axios from "axios";

// import './AddExpense.css';

const AddExpense = (props) => {

    const [description,setdescription] = useState('');
    const [amount,setamount] = useState('');
    const [date, setDate] = useState();
    const [whoPaid, setwhoPaid] = useState('');
    const [whom, setwhom] = useState([]);
   

   const submitHandler = async(event) => {
    event.preventDefault();
     
   await axios.post("/addexpense",{
      description: description,
      amount: amount,
      date: date,
      whoPaid: whoPaid,
      whom: whom,
   })
   .then(function(res){
    alert(JSON.stringify(res.data))
   })
   .catch(function (error){
    console.error(error.message);
   })

  //  window.location.reload(); 
    setdescription('');
    setamount('');
    setDate('');
    setwhoPaid('');
    setwhom('');
  }


   const handleCheck = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value,checked);
    if(checked){
      setwhom([
        ...whom,value
      ])
    }else{
      setwhom(whom.filter((e) => (e !== value) ))
    }
   }

  



console.log(whom);
    return (
      <>
      <Container>

      <h1 className='shadow-sm text-primary mt-3  p-3 text-center rounded'>New Expense</h1>

        <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
        <Form onSubmit={submitHandler} className='m-3' method='POST'>
             <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
              type="date" value={date} onChange={e=>setDate(e.target.value)}
              />
             </Form.Group>

             <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
             type="text"
              value={description} 
              onChange={e=>setdescription(e.target.value)}
              />
             </Form.Group>

             <Form.Group>
              <Form.Label>Amount</Form.Label>
              <Form.Control
             type="number" 
             min="0.01" step="0.01"
              value={amount} 
              onChange={e=>setamount(e.target.value)}
              />
             </Form.Group>

             <Form.Group>
              <Form.Label>Who Paid</Form.Label>
              <Form.Select aria-label="Default select example" value={whoPaid} onChange={e=>setwhoPaid(e.target.value)}>
                            <option className="option">Who Paid</option>
                                              <option>Shashank</option>
                                              <option>Navjot</option>
                                              <option>Rohit</option>
                                              <option>Sangram</option>
                            </Form.Select>
             </Form.Group> 
                    
                   
             <Form.Group>
              <Form.Label>With Whom</Form.Label>
              </Form.Group>
              <Form.Group>
                <Form.Check
              inline
              value="Shashank"
              label="Shashank"
              name="group"
              onChange={handleCheck} />

               <Form.Check
              inline
              value="Rohit"
              label="Rohit"
              name="group"
              onChange={handleCheck} />

              <Form.Check
              inline
              value="Navjot"
              label="Navjot"
              name="group"
              onChange={handleCheck} />
              </Form.Group>

                         
         <Button type="submit" >Add</Button>
          </Form>
                </Col>
                </Row>
         </Container>
         </> 
    );
  }

export default AddExpense;