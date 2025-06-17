import { Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

function ContactCta() {
  return (
    <section className="contact-cta py-5 bg-brown text-white text-center">
      <Container>
        <h2 className="display-5 fw-bold mb-4">Ready to Create Your Dream Furniture?</h2>
        <p className="lead mb-4">
          Let's discuss your project and bring your vision to life with our expert craftsmanship.
        </p>
        <Button as={Link} to="/contact" variant="light" size="lg" className="text-brown">
          Contact Us Today
        </Button>
      </Container>
    </section>
  )
}

export default ContactCta
