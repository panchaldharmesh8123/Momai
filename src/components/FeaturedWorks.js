import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeaturedWorks() {
  const works = [
    {
      id: 1,
      title: "Modern Dining Table",
      description: "Custom Furniture",
      image: require("../images/dining3.jpg"),
    },
    {
      id: 2,
      title: "Minimalist Living Room",
      description: "Interior Design",
      image: require("../images/sofa.jpg"),
    },
    {
      id: 3,
      title: "Vintage Room Restoration",
      description: "Restoration",
      image: require("../images/restro.avif"),
    },
  ];

  return (
    <section className="featured-works py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-brown">Our Portfolio</h2>
          <p className="lead text-muted">
            Explore our collection of handcrafted furniture and interior design
            projects
          </p>
        </div>

        <Row>
          {works.map((work) => (
            <Col key={work.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm hover-card">
                <Card.Img
                  variant="top"
                  style={{ height: "450px" }}
                  src={work.image}
                  alt={work.title}
                />
                <Card.Body>
                  <Card.Title className="text-brown">{work.title}</Card.Title>
                  <Card.Text>{work.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button
                    variant="link"
                    as={Link}
                    to="/gallery"
                    className="text-brown p-0"
                  >
                    View Details &rarr;
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button as={Link} to="/gallery" variant="brown">
            View All Works
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default FeaturedWorks;
