import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container>
        <Navbar.Brand><NavLink className="text-decoration-none" to="/"><img className='w-50' src={logo} alt="Book store"></img></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><NavLink className="text-decoration-none link-text" to="/">List of books</NavLink></Nav.Link>
            <Nav.Link><NavLink className="text-decoration-none link-text" to="/create">Add a new book</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;