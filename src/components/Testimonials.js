import { Container, Row, Col, Card } from "react-bootstrap"

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Naresh bhai",
      role: "Homeowner",
      quote:
        "The custom furniture we received exceeded all our expectations. The impeccable craftsmanship and attention to detail have added both beauty and functionality to our space—be it home or office. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Mr. Rakesh Shah ",
      role: "GSEC Limited Owner",
      quote:
       "Our bungalow exceeded every expectation. The craftsmanship is impeccable, with thoughtful design in every detail—it’s not just a house, it's a masterpiece we proudly call home. Highly recommended!",
      rating: 5,
    },
    {
      id: 3,
      name: "Dipen Badoriya",
      role: "Office | Home Owner",
      quote:
        "The restoration work on our family heirloom cabinet was amazing. It looks brand new while still maintaining its vintage character. True artistry!",
      rating: 5,
    },
  ]

  const renderStars = (count) => {
    return Array(count)
      .fill()
      .map((_, i) => (
        <span key={i} className="text-warning">
          ★
        </span>
      ))
  }

  return (
    <section className="testimonials py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-brown">What Our Clients Say</h2>
          <p className="lead text-muted">
            Don't just take our word for it. Here's what our clients have to say about our craftsmanship and service.
          </p>
        </div>

        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} md={4} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <div className="mb-3">{renderStars(testimonial.rating)}</div>
                  <Card.Text className="mb-4 fst-italic">"{testimonial.quote}"</Card.Text>
                  <div className="d-flex align-items-center">
                    <div className="testimonial-avatar me-3">
                      <img
                        src={`https://placehold.co/50x50?text=${testimonial.name.charAt(0)}`}
                        alt={testimonial.name}
                        className="rounded-circle"
                      />
                    </div>
                    <div>
                      <h5 className="mb-0 text-brown">{testimonial.name}</h5>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Testimonials
