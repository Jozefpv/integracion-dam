import { Link } from "react-router-dom"
import './styleNavbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logologo from "./images/logologo.png";
import logotext from "./images/logoLetras.png";
import { FaUserCircle } from 'react-icons/fa';


const NavbarTest = () => {

    return (
        <Navbar expand="lg" style={{backgroundColor:"#dfe3e6"}}>
            <Container>
                <Navbar.Brand><Link to="/"><img src={logologo} style={{height:"40px", }}></img><img src={logotext} style={{height:"40px", }}></img></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ gap: "20%", marginRight: "5%", fontSize: "18px" }}>
                        <Nav.Link>
                            <Link to="/" className="linkNavbar">
                                Inicio
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/apartamentos" className="linkNavbar">
                                Apartamentos
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/conocenos" className="linkNavbar">
                                Conócenos
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTest