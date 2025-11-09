import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../style/Header.css';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { authState, logout } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <Navbar bg="light" expand="lg" className={`theme-main-menu sticky-menu ${isSticky ? 'is-sticky' : ''}`} expanded={!isNavCollapsed} onToggle={handleNavCollapse}>
            <Container>
                <div className="logo-container">
                    <Navbar.Brand as={Link} to="/">
                        <img src="/images/transparent-logo.svg" alt="TrickyTech" className="logo-img" />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" className="custom-navbar-collapse">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
                        
                        <NavDropdown 
                            title="Services" 
                            id="services-dropdown"
                        >
                            <NavDropdown.Item as={NavLink} to="/career-coaching">Career Coaching</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/training-dev">Training and Development</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/job-opportunities">Job Opportunities</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/outplacement">Outplacement Services</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/our-approach">Our Approach</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">ContactUs</Nav.Link>
                        
                        {authState.isAuthenticated ? (
                            <>
                                <Nav.Link as={Link} to="/profile" style={{ marginLeft: '10px', color: '#007bff' }}>
                                    Profile
                                </Nav.Link>
                                <button
                                    onClick={logout} 
                                    style={{
                                        backgroundColor: '#28a745',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        marginLeft: '10px'
                                    }}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" className="btn-five ms-4 d-none d-lg-block">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="btn-five ms-2 d-none d-lg-block">
                                    Register
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login" className="d-lg-none mt-3 w-100 text-center">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="d-lg-none mt-3 w-100 text-center">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
