import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ServicesSection() {
  const downloadFile = () => {
    window.location.href = require("../images/Bhavlist.pdf");
  };
  const services = [
    {
      icon: "🪚",
      title: "Custom Furniture",
      description:
        "Bespoke furniture pieces designed and crafted to your exact specifications and needs.",
    },
    {
      icon: "📏",
      title: "Furniture Design",
      description:
        "Professional design services to create the perfect piece for your space.",
    },
    {
      icon: "🔨",
      title: "Restoration",
      description:
        "Breathe new life into your cherished furniture pieces with our expert restoration services.",
    },

    {
      icon: "🏢",
      title: "Commercial Projects",
      description:
        "Furniture and interior solutions for offices, restaurants, hotels, and other commercial spaces.",
    },
    {
      icon: "🗨️",
      title: "Design Consultation",
      description:
        "Professional advice on furniture selection, layout planning, and interior design concepts.",
    },
    {
      icon: "📦",
      title: "Custom Built-ins",
      description:
        "Space-saving built-in furniture solutions that maximize functionality and aesthetic appeal.",
    },
  ];

  const steps = [
    {
      icon: "💡",
      title: "Consultation",
      number: "01",
      description:
        "We discuss your vision, requirements, and budget to understand your unique needs.",
    },
    {
      icon: "🎨",
      title: "Design",
      number: "02",
      description:
        "Our team creates detailed designs and 3D renderings for your approval.",
    },
    {
      icon: "🔨",
      title: "Crafting",
      number: "03",
      description:
        "Expert craftsmen bring your design to life using premium materials and techniques.",
    },
    {
      icon: "🚚",
      title: "Delivery",
      number: "04",
      description:
        "We carefully deliver and install your custom pieces in your space.",
    },
  ];

  return (
    <>
      <section className="services-section py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-brown">Our Services</h2>
            <p className="lead text-muted">
              Comprehensive furniture and interior design solutions tailored to
              your needs
            </p>
          </div>

          <Row>
            {services.map((service, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="h-100 text-center p-4 shadow-sm hover-card">
                  <div className="service-icon mb-3">{service.icon}</div>
                  <Card.Body>
                    <Card.Title className="text-brown">
                      {service.title}
                    </Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button
            className="text-light mt-5 d-flex justify-content-center align-items-center mb-4 mx-auto"
            variant="brown"
            size="lg"
            onClick={downloadFile}
          >
            Download List (Rate Per SQFT)
          </Button>
        </Container>
      </section>

      <section className="py-5 text-center bg-light">
        <Container>
          <h2 className="display-5 fw-bold text-brown">Our Process</h2>
          <p className="mb-5 text-muted">
            From concept to completion, we ensure every step meets our high
            standards
          </p>
          <Row>
            {steps.map((step, idx) => (
              <Col md={3} key={idx} className="mb-4">
                <div className="position-relative d-inline-block mb-3">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center service-icon"
                    style={{
                      width: "90px",
                      height: "90px",
                      background:
                        "linear-gradient(to bottom, #9e4700, #d06a00)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{
                      backgroundColor: "#ffc9a4",
                      color: "#4e2e00",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      padding: "5px 10px",
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <h5 className="fw-bold" style={{ color: "#7a3e0e" }}>
                  {step.title}
                </h5>
                <p className="text-muted">{step.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ServicesSection;
