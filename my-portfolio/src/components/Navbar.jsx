import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function NavBar() {
  return (
    <Container>
      
        <Navbar expand="lg" className="bg-body-tertiary" >
        <h1 class="KG">Keith Godfrey</h1>


          <Button variant="primary">About Me</Button>{' '}
          <Button variant="primary">Projects</Button>{' '}
          <Button variant="primary">Contact</Button>{' '}
        </Navbar>




    </Container>
  );
}

export default NavBar;