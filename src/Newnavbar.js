import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container,Button} from 'react-bootstrap';
import logo from "../src/assets/p1.jpg";
import { Link } from "react-router-dom";
const NewNavbar= () => {
    return ( 
      <div class="container bg-info">
        <Navbar bg="info" expand="lg">
  <Container>
    <Navbar.Brand href="/" class="fs-4"> 
    <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
       XXXX Club</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav "/>
    <Navbar.Collapse id="basic-navbar-nav">
    <div class="collapse navbar-collapse justify-content-center align-center" id="main-nav">
            <ul class="navbar-nav fs-5">
               <li class="navbar-item active">
                    <Link to="/" class="nav-link">Home</Link>
               </li> 
               <li class="nav-item">
                   <Link to="/Classes" class="nav-link">Classes</Link>
               </li>
               <li class="nav-item">
                    <Link to="/" class="nav-link">Coaches</Link>
                </li>
                <li class="/Blog">
                    <Link to="/Blog" class="nav-link">Blog</Link>
                </li>
                <li class="nav-item">
                    <Link to="/Achievement" class="nav-link">Achievement</Link>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse justify-content-end align-center" id="second-nav">
        <ul class="navbar-nav fs-5">
               <li class="navbar-item active mt-2 me-5">
                <Button variant="warning">Become a member</Button>
               </li> 

               <li class="nav-item">
                   <a href="service.html" class="nav-link">Login</a>
               </li>
            </ul>
        </div>
  
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>

     );
}
 
export default NewNavbar ;