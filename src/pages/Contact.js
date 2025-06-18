"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function Contact() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (event) => {
  //   const form = event.currentTarget;
  //   event.preventDefault();

  //   if (form.checkValidity() === false) {
  //     event.stopPropagation();
  //   } else {
  //     // Here you would typically send the data to your server
  //     console.log("Form submitted:", formData);
  //     alert("Thank you for your message! We will get back to you soon.");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       subject: "",
  //       message: "",
  //     });
  //   }

  //   setValidated(true);
  // };
  //   const handleSubmit = (event) => {
  //     const form = event.currentTarget;
  //     event.preventDefault();

  //     if (form.checkValidity() === false) {
  //       event.stopPropagation();
  //     } else {
  //       fetch("http://localhost:5000/api/send", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.success) {
  //             alert(
  //               "Thank you for your message🙏! We will get back to you soon."
  //             );

  //             // whatsappnumber mate
  //             const whatsappNumber = "+919879661139"; // Replace with your WhatsApp number
  //             const message = `Hello Momai Furniture,
  // Name: ${formData.name}
  // Email: ${formData.email}
  // Phone: ${formData.phone}
  // Subject: ${formData.subject}
  // Message: ${formData.message}`;

  //             const encodedMessage = encodeURIComponent(message);
  //             window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  //             setFormData({
  //               name: "",
  //               email: "",
  //               phone: "",
  //               subject: "",
  //               message: "",
  //             });
  //             navigate("/");
  //           } else {
  //             alert("Failed to send message.");
  //           }
  //         })
  //         .catch((err) => {
  //           console.error("Error sending message:", err);
  //           alert("An error occurred.");
  //         });
  //     }

  //     setValidated(true);
  //   };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // 👇 Your WhatsApp number (without + or spaces)
      const whatsappNumber = "919879661139";

      const { name, email, phone, subject, message } = formData;

      const whatsappMessage = `Hello Momai Furniture🙏,
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Subject: ${subject}
        Message: ${message}`;

      // 👇 Open WhatsApp with pre-filled message
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setValidated(false);
      navigate("/"); // reset validation
    }

    setValidated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main>
      <div className="bg-light py-5">
        <Container>
          <h1 className="display-4 fw-bold text-brown text-center mb-3">
            Contact Us
          </h1>
          <p className="lead text-center text-muted mb-5">
            Have a question or want to discuss a project? Get in touch with us
            and we'll be happy to help.
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <Row>
          <Col lg={5} className="mb-4 mb-lg-0">
            <h2 className="h2 text-brown mb-4">Get In Touch</h2>
            <p className="mb-4">
              We'd love to hear from you. Fill out the form and we'll get back
              to you as soon as possible.
            </p>

            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex mb-3">
                  <div className="contact-icon me-3">
                    <i className="bi bi-telephone text-brown"></i>
                  </div>
                  <div>
                    <h5 className="text-brown">Phone</h5>
                    <p className="mb-0">+91 9879661139</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex mb-3">
                  <div className="contact-icon me-3">
                    <i className="bi bi-envelope text-brown"></i>
                  </div>
                  <div>
                    <h5 className="text-brown">Email</h5>
                    <p className="mb-0">hasmukhbhaipanchal221277@gmail.com</p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="mb-4 border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex mb-3">
                  <div className="contact-icon me-3">
                    <i className="bi bi-geo-alt text-brown"></i>
                  </div>
                  <div>
                    <h5 className="text-brown">Chandlodia</h5>
                    <p className="mb-0">
                      Ahmedabad, Gujarat
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="d-flex mb-3">
                  <div className="contact-icon me-3">
                    <i className="bi bi-clock text-brown"></i>
                  </div>
                  <div>
                    <h5 className="text-brown">Workshop Hours</h5>
                    <p className="mb-0">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                      <br />
                      Sunday: 9:00 AM - 2:00 PM
                      <br />
                      Punam: half day
                      <br />
                      Amash: Closed
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card> */}
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <h3 className="text-brown mb-4">Send Us a Message</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide your name.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid email.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="Custom Furniture">
                            Custom Furniture
                          </option>
                          <option value="Furniture Design">
                            Furniture Design
                          </option>
                          <option value="Restoration">Restoration</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please select a subject.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter your message.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="brown" type="submit" className="w-100">
                    Please Send Your Details
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Contact;
