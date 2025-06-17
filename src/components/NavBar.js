"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"

function NavBar() {
  const [expanded, setExpanded] = useState(false)

  const closeNav = () => setExpanded(false)

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="shadow-sm"
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-brown">
          Momai Furnicher
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={closeNav}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={closeNav}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
