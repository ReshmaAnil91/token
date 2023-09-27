import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'

function Homepage() {

  function handleClose(){
  
    

  }
  return (
    <Navbar bg='secondary' variant="dark">
      <Container>
        <Navbar.Brand href="display">TODOLIST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="display">Home</Nav.Link>
            <Nav.Link href="create">Create</Nav.Link>
            <NavDropdown title="Status" id="basic-nav-dropdown">
              <NavDropdown.Item value='pending' href="pending">pending</NavDropdown.Item>
              <NavDropdown.Item onClick={handleClose} href="close" value='closed' >closed</NavDropdown.Item>
            </NavDropdown>
            <Button variant="success" href="/" className='logout'>Logout</Button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Homepage;