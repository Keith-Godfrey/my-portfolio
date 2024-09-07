import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  // const { pathname } = useLocation(); // Get current URL path
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/About', label: 'About Me' },
    { to: '/Portfolio', label: 'Portfolio' },
    { to: '/Contact', label: 'Contact' },
  ];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <nav className="nav nav-tabs">
      <Navbar.Brand className="KG">Keith Godfrey</Navbar.Brand>
      {navItems.map((item) => (
          <Link key={item.to} to={item.to}>
            <Button variant="primary" className="m-2">
              {item.label}
            </Button>
          </Link>
        ))}
      </nav>

    </Navbar>
  );
}

export default NavBar;