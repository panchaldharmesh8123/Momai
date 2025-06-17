import { Container, Row, Col, Card } from "react-bootstrap";
import ContactCta from "../components/ContactCta";

function About() {
  const values = [
    {
      title: "Craftsmanship",
      description:
        "We believe in the value of traditional woodworking techniques combined with modern innovation.",
      icon: "🔨",
    },
    {
      title: "Quality",
      description:
        "We use only the finest materials and pay meticulous attention to every detail.",
      icon: "✓",
    },
    {
      title: "Customer Satisfaction",
      description:
        "We work closely with our clients to ensure their vision becomes reality.",
      icon: "👍",
    },
  ];

  const team = [
    {
      name: "Hasmukhbhai Panchal",
      role: "Master Craftman & Owner of Momai Furnisher",
      image: "https://i.pinimg.com/736x/24/4d/e9/244de92b58dc3fd030d4cb012318b5c3.jpg",
      bio: "With over 25 years of experience in fine woodworking, Hasmukhbhai founded Momai Furnicher to create furniture that combines traditional techniques with modern design.",
    },
    {
      name: "Hiren Panchal",
      role: "Designer",
      image: "https://i.pinimg.com/736x/5f/87/22/5f87224c65b29f77d23b4be6bfaf60c4.jpg",
      bio: "Hiren him background in interior design to create furniture pieces that are both beautiful and functional, perfectly suited to each client's space and needs.",
    },
    {
      name: "Suresh Panchal",
      role: "Craftman",
      image: "https://i.pinimg.com/736x/24/4d/e9/244de92b58dc3fd030d4cb012318b5c3.jpg",
      bio: "With over 25 years of experience in fine woodworking",
    },
  ];

  return (
    <main>
      <div className="bg-light py-5">
        <Container>
          <h1 className="display-4 fw-bold text-brown text-center mb-3">
            About Us
          </h1>
          <p className="lead text-center text-muted mb-5">
            Learn about our story, our passion for woodworking, and the team
            behind our handcrafted furniture.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="h2 text-brown mb-4">Our Story</h2>
            <p className="mb-3">
              Welcome to my world of handcrafted excellence. With over 25 years
              of dedicated experience in furniture crafting and interior design,
              I transform raw materials into functional art pieces that tell
              stories and create lasting memories.
            </p>
            <p className="mb-3">
              My journey began in a small workshop where I discovered my passion
              for woodworking. Today, I specialize in creating custom furniture
              that seamlessly blends traditional craftsmanship with contemporary
              design aesthetics.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src="https://images.unsplash.com/photo-1426927308491-6380b6a9936f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmtzaG9wfGVufDB8fDB8fHww"
              alt="Workshop-image"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>

        <div className="mb-5">
          <h2 className="h2 text-brown text-center mb-4">Our Values</h2>
          <Row>
            {values.map((value, index) => (
              <Col key={index} md={6} lg={4} className="mb-4">
                <Card className="h-100 text-center p-4 shadow-sm">
                  <div className="value-icon mb-3">{value.icon}</div>
                  <Card.Body>
                    <Card.Title className="text-brown">
                      {value.title}
                    </Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div>
          <h2 className="h2 text-brown text-center mb-4">Meet Our Team</h2>
          <Row>
            {team.map((member, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img
                    variant="top"
                    src={member.image}
                    alt={member.name}
                  />
                  <Card.Body>
                    <Card.Title className="text-brown">
                      {member.name}
                    </Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">
                      {member.role}
                    </Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>

      <ContactCta />
    </main>
  );
}

export default About;
