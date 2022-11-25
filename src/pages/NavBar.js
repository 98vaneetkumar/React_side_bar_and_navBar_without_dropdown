import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 
function NavBar() {
  return (
    <div style={{backgroundColor:"#d1d8e0", height:"50px", marginLeft:"-20px",marginTop:"-20px",width:"100vw",color:"white"}}>
      <Navbar bg="black" variant="dark" style={{display:"flex",justifyContent:"space-between",color:"white"}}>
        <Container >
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;