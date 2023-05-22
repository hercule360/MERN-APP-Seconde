import { Button, Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';




const Navigation = () =>  {
const navigate=useNavigate()
    
    

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">FILM-Forja</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/MovieList">Movie</Nav.Link>
          </Nav>

          <Button className='login' onClick={()=> navigate ('/login')} >Login</Button>.
          <Link className='register ' to={'/register'}>Register</Link>


          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search movies .."
              className="me-2"
              aria-label="Search"

            />
            <Button variant="outline-success">Search</Button>
          </Form>
       
        </Container>
      </Navbar>
     
  
    </>
  );
}


export default Navigation;

