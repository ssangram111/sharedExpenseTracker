import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import logo from './Images/logo.png';
import MainTab from './MainTab';
import React from 'react';






function Navbars() {
  return (
    <div>
   
         <Navbar bg="dark" variant="dark" expand="sm">
         <Container fluid>
         <Navbar.Brand as={Link} className="px-3" to="/"><img src={logo} alt="logo" height={40}/> Expense Tracker</Navbar.Brand>
           
           <Navbar.Toggle area-controls="navbarScroll"/>
           <Navbar.Collapse id='navbarScroll' className='text-center'>
           <Nav className='justify-content-end flex-grow-1 pe-3'>
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link as={Link} to="/login">Sign in</Nav.Link>
             <Nav.Link as={Link} to="/signup">Sign up</Nav.Link>
           </Nav>
           </Navbar.Collapse>
         
         </Container>
       </Navbar>

    
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/tabs' element={<MainTab/>}/>
      </Routes>
 </div>
  );
}

export default Navbars;