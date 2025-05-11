// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#720780e8', textAlign: 'center', padding: '1rem 0' }}>
            <Container>
                <p style={{color: 'white'}}>&copy; 2024 ImageGenerator. All Rights Reserved.</p>
            </Container>
        </footer>
    );
}

export default Footer;
