
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./navbar.css"
import FounderPage from 'pages/Founder/founder';

function Navbarv() {
  return (
    <>
      <Navbar className='auto' bg="light" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="#home">About</Navbar.Brand> */}
                  <Nav className="me-auto">
            <Nav.Link href="#home"><h5>About</h5></Nav.Link>         
            <Nav.Link a href='/founder'  ><h5>Police</h5></Nav.Link>
            <Nav.Link href="#features"><h5>Public</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Feedback</h5></Nav.Link>
            <Nav.Link href="#pricing"><h5>Regions</h5></Nav.Link>
            <button className='sign-in'>sign-in</button>
            <button className='register'>Register</button>            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbarv;