"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  const portfolioItems = [
    {
      id: 1,
      title: "Dining Table",
      category: "tables",
      description: "Custom-made dining table with live edge walnut top",
      image: require("../images/dining.jpg"),
    },
    {
      id: 2,
      title: "Dining Table",
      category: "tables",
      description: "Custom-made dining table with live edge walnut top",
      image: require("../images/dining2.jpg"),
    },
    {
      id: 3,
      title: "Dining Table",
      category: "tables",
      description: "Custom-made dining table with live edge walnut top",
      image: require("../images/dining3.jpg"),
    },
    {
      id: 4,
      title: "Moduler Kitchen",
      category: "Kitchen",
      description:
        "A modern kitchen emphasizes sleek, minimalist design with clean lines, handleless cabinets, and integrated appliances, creating a functional and stylish space focused on efficiency",
      image: require("../images/kitchen.jpg"),
    },
    {
      id: 5,
      title: "Moduler Kitchen",
      category: "Kitchen",
      description: "A modern kitchen emphasizes sleek, minimalist design with clean lines, handleless cabinets, and integrated appliances, creating a functional and stylish space focused on efficiency",
      image: require("../images/kitchen2.jpg"),
    },
    {
      id: 6,
      title: "Moduler Kitchen",
      category: "Kitchen",
      description: "A modern kitchen emphasizes sleek, minimalist design with clean lines, handleless cabinets, and integrated appliances, creating a functional and stylish space focused on efficiency",
      image: require("../images/kitchen3.jpg"),
    },
    {
      id: 7,
      title: "Moduler Kitchen crockery set",
      category: "Kitchen",
      description: "A modern kitchen emphasizes sleek, minimalist design with clean lines, handleless cabinets, and integrated appliances, creating a functional and stylish space focused on efficiency",
      image: require("../images/kokary.jpg"),
    },
    {
      id: 8,
      title: "Study Table",
      category: "tables",
      description: "The study table incorporates the essence of focus and productivity by having a favorable study environment.",
      image: require("../images/st.jpg"),
    },
    {
      id: 9,
      title: "Double Bed",
      category: "bedroom",
      description: "a bed big enough for two people to sleep in, but smaller than queen-sized",
      image: require("../images/bad.jpg"),
    },
    {
      id: 10,
      title: "Double Bed",
      category: "bedroom",
      description: "a bed big enough for two people to sleep in, but smaller than queen-sized",
      image: require("../images/bad2.jpg"),
    },
    {
      id: 11,
      title: "Double Bed",
      category: "bedroom",
      description: "a bed big enough for two people to sleep in, but smaller than queen-sized",
      image: require("../images/bad3.jpg"),
    },
    {
      id: 12,
      title: "Sofa Set",
      category: "livigroom",
      description:
        "Sofa set defines the overall mood and tone of your home. It is a must-have furniture piece for every home",
      image: require("../images/sofa.jpg"),
    },
    {
      id: 13,
      title: "Modern Mandir",
      category: "mandir",
      description:
        "A temple (from the Latin templum) is a place of worship, a building used for spiritual rituals and activities such as prayer and sacrifice.",
      image: require("../images/mandir.jpg"),
    },
    {
      id: 14,
      title: "Modern Mandir",
      category: "mandir",
      description:
        "A temple (from the Latin templum) is a place of worship, a building used for spiritual rituals and activities such as prayer and sacrifice.",
      image: require("../images/mandir2.jpg"),
    },
    {
      id: 15,
      title: "Modern Mandir",
      category: "mandir",
      description:
        "A temple (from the Latin templum) is a place of worship, a building used for spiritual rituals and activities such as prayer and sacrifice.",
      image: require("../images/mandir3.jpg"),
    },
    {
      id: 16,
      title: "wardrobe design",
      category: "badroom",
      description: "Contemporary wardrobe design includes neutral colours and clean lines, high-gloss finishes, and frosted glass patterns.",
      image: require("../images/kabot.jpg"),
    },
    {
      id: 17,
      title: "wardrobe design",
      category: "badroom",
      description: "Contemporary wardrobe design includes neutral colours and clean lines, high-gloss finishes, and frosted glass patterns.",
      image: require("../images/kabot2.jpg"),
    },
    {
      id: 18,
      title: "wardrobe design",
      category: "badroom",
      description: "Contemporary wardrobe design includes neutral colours and clean lines, high-gloss finishes, and frosted glass patterns.",
      image: require("../images/kabot3.jpg"),
    },
    {
      id: 19,
      title: "Sofa Set",
      category: "livigroom",
      description:
        "Sofa set defines the overall mood and tone of your home. It is a must-have furniture piece for every home",
      image: require("../images/sofa2.jpg"),
    },
    {
      id: 20,
      title: "Sofa Set",
      category: "livigroom",
      description:
        "Sofa set defines the overall mood and tone of your home. It is a must-have furniture piece for every home",
      image: require("../images/sofa3.jpg"),
    },
    {
      id: 21,
      title: "TV Unit",
      category: "livigroom",
      description:
        "A TV unit, also known as a TV stand or cabinet, is a piece of furniture designed to hold a television and its associated components like media players, gaming consoles, and accessories.",
      image: require("../images/tv.jpg"),
    },
    {
      id: 22,
      title: "TV Unit",
      category: "livigroom",
      description:
        "A TV unit, also known as a TV stand or cabinet, is a piece of furniture designed to hold a television and its associated components like media players, gaming consoles, and accessories.",
      image: require("../images/tv2.jpg"),
    },
  ];

  const categories = [
    "all",
    "tables",
    "Kitchen",
    "livigroom",
    "bedroom",
    "mandir",
  ];

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <main>
      <div className="bg-light py-5">
        <Container>
          <h1 className="display-4 fw-bold text-brown text-center mb-3">
            Our Gallery
          </h1>
          <p className="lead text-center text-muted mb-5">
            Explore our collection of handcrafted furniture pieces. Each item is
            meticulously designed and crafted with the finest materials.
          </p>

          <Nav className="justify-content-center mb-5">
            {categories.map((category) => (
              <Nav.Item key={category}>
                <Button
                  variant={
                    activeCategory === category ? "brown" : "outline-brown"
                  }
                  className="me-2 mb-2 text-capitalize"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              </Nav.Item>
            ))}
          </Nav>

          <Row>
            {filteredItems.map((item) => (
              <Col key={item.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 shadow-sm hover-card">
                  <Card.Img variant="top" style={{ height: "400px" }} src={item.image} alt={item.title} />
                  <Card.Body>
                    <div className="mb-2">
                      <span className="badge bg-light text-brown text-capitalize">
                        {item.category}
                      </span>
                    </div>
                    <Card.Title className="text-brown">{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Button variant="link" as={Link} to="https://in.pinterest.com/search/pins/?q=furnicher&rs=typed" className="text-brown p-0">
                      More Design &rarr;
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default Gallery;
