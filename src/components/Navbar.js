// // src/components/Navbar.js
// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const CustomNavbar = () => {
//     return (
//         <Navbar expand="lg" style={{ background: 'linear-gradient(to right, #f06292, #8e24aa, #42a5f5)' }}>
//             <Container>
//                 <Navbar.Brand as={Link} to="/" style={{ color: 'white', fontWeight: 'bold' }}>ImageGenerator</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="ms-auto">
//                         <Nav.Link as={Link} to="/" style={{ color: 'white'}}>Home</Nav.Link>
//                         <Nav.Link as={Link} to="/signup" style={{ color: 'white' }}>Sign Up</Nav.Link>
//                         <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>Login</Nav.Link>
//                         <Nav.Link href="#about" style={{ color: 'white' }}>About</Nav.Link>
//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default CustomNavbar;



// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the custom Navbar CSS file

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" fixed="top" className="custom-navbar">
            <Container>
                <Navbar.Brand as={Link} to="/" className="navbar-brand-text">ImageGenerator</Navbar.Brand>
                {/* Navbar toggle button is aligned to the right */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/signup" className="navbar-link">Sign Up</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="navbar-link">Login</Nav.Link>
                        <Nav.Link href="#about" className="navbar-link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
