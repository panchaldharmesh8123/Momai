import { Container, Row, Col, Button } from "react-bootstrap";
import ContactCta from "../components/ContactCta";

function Services() {
  const downloadFile = () => {
    window.location.href =
      require("../images/Bhavlist.pdf");
  };
  const services = [
    {
      id: "custom",
      img: "https://soloway-designs.com/wp-content/uploads/2022/07/custom-game-room-simons@2x.jpg",
      icon: "🪚",
      title: "Custom Furniture",
      description:
        "We create bespoke furniture pieces designed and crafted to your exact specifications and needs. From concept to completion, we work closely with you to bring your vision to life.",
      features: [
        "Personalized design consultations",
        "Material selection guidance",
        "Custom dimensions and specifications",
        "Unique, one-of-a-kind pieces",
      ],
    },
    {
      id: "design",
      img: require("../images/design.jpg"),
      icon: "📏",
      title: "Furniture Design",
      description:
        "Our professional design services help you create the perfect piece for your space. We combine aesthetics with functionality to design furniture that enhances your environment.",
      features: [
        "3D modeling and visualization",
        "Space planning and measurements",
        "Material and finish recommendations",
        "Design revisions and refinements",
      ],
    },
    {
      id: "restoration",
      img: "https://i.pinimg.com/474x/05/c0/da/05c0da69cb892c3abc2b6ca1e03ada7c.jpg",
      icon: "🔨",
      title: "Restoration",
      description:
        "Breathe new life into your cherished furniture pieces with our expert restoration services. We carefully preserve the character while repairing damage and refreshing the finish.",
      features: [
        "Structural repairs and reinforcement",
        "Surface refinishing and polishing",
        "Hardware replacement and restoration",
        "Upholstery repair and replacement",
      ],
    },
    {
      id: "installation",
      img: "https://bayareaofficesolutions.com/wp-content/uploads/2017/10/services_002.jpg",
      icon: "🚚",
      title: "Delivery & Installation",
      description:
        "We provide professional delivery and installation of your new furniture pieces. Our team ensures everything is properly set up and positioned in your space.",
      features: [
        "White glove delivery service",
        "Professional installation",
        "Furniture placement and adjustment",
        "Packaging removal and cleanup",
      ],
    },
  ];

  return (
    <main>
      <div className="bg-light py-5">
        <Container>
          <h1 className="display-4 fw-bold text-brown text-center mb-3">
            Our Services
          </h1>
          <p className="lead text-center text-muted mb-5">
            We offer a comprehensive range of furniture crafting services to
            meet your needs, from custom designs to restoration and repair.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="mb-5 pb-5 border-bottom border-light"
          >
            <Row className="align-items-center">
              <Col
                lg={6}
                className={index % 2 === 0 ? "order-lg-1" : "order-lg-2"}
              >
                <div className="service-icon mb-3">{service.icon}</div>
                <h2 className="h2 text-brown mb-3">{service.title}</h2>
                <p className="mb-4">{service.description}</p>

                <h5 className="text-brown mb-3">What we offer:</h5>
                <ul className="list-unstyled">
                  {service.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="bi bi-check-circle-fill text-brown me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col
                lg={6}
                className={index % 2 === 0 ? "order-lg-2" : "order-lg-1"}
              >
                <div className="bg-light rounded p-5 text-center mb-4 mb-lg-0">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid rounded"
                  />
                </div>
              </Col>
            </Row>
          </div>
        ))}
      <Button  className="text-light  d-flex justify-content-center align-items-center mb-4 mx-auto" variant="brown" size="lg"  onClick={downloadFile}>Download List (Rate Per SQFT)</Button>
      </Container>
      <ContactCta />
    </main>
  );
}

export default Services;
