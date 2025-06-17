import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h4 className="text-light">Momai Furnicher</h4>
            <p className="text-light">
              Handcrafted furniture made with passion and precision. Quality
              that lasts generations.
            </p>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/hasmukh.panchal.125?mibextid=rS40aB7S9Ucbxw6v"
                className="text-light me-3"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/hasmukh_panchal_8123?igsh=ZzQ3eTV0Y25tMHJp"
                className="text-light me-3"
              >
                <i className="bi bi-instagram"></i>
              </a>
              {/* <a href="https://twitter.com" className="text-light">
                <i className="bi bi-twitter"></i>
              </a> */}
            </div>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="text-light mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/gallery" className="text-light text-decoration-none">
                  Gallery
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/services"
                  className="text-light text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="text-light mb-3">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#custom" className="text-light text-decoration-none">
                  Custom Furniture
                </a>
              </li>
              <li className="mb-2">
                <a href="#design" className="text-light text-decoration-none">
                  Furniture Design
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#restoration"
                  className="text-light text-decoration-none"
                >
                  Restoration
                </a>
              </li>
              <li>
                <a
                  href="#installation"
                  className="text-light text-decoration-none"
                >
                  Installation
                </a>
              </li>
            </ul>
          </Col>

          <Col md={4}>
            <h5 className="text-light mb-3">Contact Us</h5>
            <ul className="list-unstyled text-light">
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                Chandlodia Ahmedabad, Gujarat, India
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +91 9879661139
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i>
                hasmukhpanchal8123gmail.com
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="mt-4 mb-3 border-secondary" />

        <div className="text-center text-light">
          <small>
            &copy; {new Date().getFullYear()} Momai Furnicher. All rights
            reserved.
          </small>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
