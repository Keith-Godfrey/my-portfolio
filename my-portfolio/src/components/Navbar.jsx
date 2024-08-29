import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Container>
      <Navbar>
        <Navbar expand="lg" className="bg-body-tertiary" >


          <Button variant="primary">About Me</Button>{' '}
          <Button variant="primary">Projects</Button>{' '}
          <Button variant="primary">Contact</Button>{' '}
        </Navbar>



      </Navbar>
    </Container>
  );
}

export default NavBar;