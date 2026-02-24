import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../style/Header.css';
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const { authState, logout } = useAuth();
    const [isSticky, setSticky] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isExpanded) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
        return () => {
            document.body.classList.remove('nav-open');
        };
    }, [isExpanded]);

    useEffect(() => {
        if (!isExpanded) return;
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsExpanded(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isExpanded]);

    const handleNavToggle = (expanded) => {
        setIsExpanded(expanded);
    };

    const closeNav = () => {
        setIsExpanded(false);
    };

    return (
        <Navbar
            bg="light"
            expand="lg"
            className={`theme-main-menu sticky-menu ${isSticky ? 'is-sticky' : ''}`}
            expanded={isExpanded}
            onToggle={handleNavToggle}
        >
            <Container>
                <div className="logo-container">
                    <Navbar.Brand as={Link} to="/" className="brand-link">
                        <img
                            src="/images/transparent-logo.png"
                            alt="TrickyTech"
                            className="logo-img"
                            onError={(e) => {
                                e.currentTarget.src = '/images/transparent-logo.svg';
                            }}
                        />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </Navbar.Toggle>
                {isExpanded && (
                    <div className="nav-overlay" onClick={closeNav} aria-hidden="true"></div>
                )}
                <Navbar.Collapse id="responsive-navbar-nav" className="custom-navbar-collapse">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={NavLink} to="/" end onClick={closeNav}>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us" onClick={closeNav}>About Us</Nav.Link>
                        
                        <NavDropdown 
                            title="Services" 
                            id="services-dropdown"
                        >
                            <NavDropdown.Item as={NavLink} to="/career-coaching" onClick={closeNav}>Career Coaching</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/training-dev" onClick={closeNav}>Training and Development</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/job-opportunities" onClick={closeNav}>Job Opportunities</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/outplacement" onClick={closeNav}>Outplacement Services</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link as={NavLink} to="/our-approach" onClick={closeNav}>Our Approach</Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" onClick={closeNav}>Blog</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" onClick={closeNav}>Contact Us</Nav.Link>
                        
                        {authState.isAuthenticated ? (
                            <>
                                <Nav.Link as={Link} to="/profile" style={{ marginLeft: '10px', color: '#007bff' }} onClick={closeNav}>
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
                                <Nav.Link as={Link} to="/login" className="btn-five ms-4 d-none d-lg-block" onClick={closeNav}>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="btn-five ms-2 d-none d-lg-block" onClick={closeNav}>
                                    Register
                                </Nav.Link>
                                <Nav.Link as={Link} to="/login" className="d-lg-none mt-3 w-100 text-center" onClick={closeNav}>
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register" className="d-lg-none mt-3 w-100 text-center" onClick={closeNav}>
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
