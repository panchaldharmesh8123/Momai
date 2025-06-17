import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold text-brown">
              Crafting Timeless Furniture & Interior Designs
            </h1>
            <p className="lead my-4">
              Transforming spaces with handcrafted furniture and bespoke
              interior solutions. Over 25 years of experience in creating
              functional art pieces.
            </p>
            <div className="d-flex flex-wrap gap-2">
              <Button
                as={Link}
                to="/gallery"
                variant="brown"
                size="lg"
                className="me-2"
              >
                View Our Work
              </Button>
              <Button as={Link} to="/contact" variant="outline-brown" size="lg">
                Get In Touch
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <img
              src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Handcrafted wooden furniture"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
