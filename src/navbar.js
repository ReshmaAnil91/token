import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'
import {useNavigate } from 'react-router-dom'; 


function Homepage() {
  const navigate = useNavigate();

  const handleClose=async(status)=>{
    navigate('/close', { state: status});
  }
  const handlePending=async(status)=>{
    navigate('/close' ,{ state: status});
  }
  const handleSort=async(status)=>{
    navigate('/close' ,{ state: status});
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
              <NavDropdown.Item onClick={()=>handlePending('pending')} >pending</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleClose('closed')}>closed</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleSort('sort')}>Descending Order</NavDropdown.Item>
            </NavDropdown>
            <Button variant="success" href="/"  className='logout'>Logout</Button> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Homepage;