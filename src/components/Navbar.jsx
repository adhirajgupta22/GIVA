import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >Product Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">All Products</Nav.Link>
            <Nav.Link href="/add">Add a new product</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navigation;