import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../styles/ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the form submission. For example, you can send an email or save the message to a database.
    console.log({ name, email, message });
  }

  return (
    <Container id="contact-me">
      <Row>
        <Col>
          <h2>Contact Me</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input type="text" name="name" value={name} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email:</Label>
              <Input type="email" name="email" value={email} onChange={handleInputChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message:</Label>
              <Input type="textarea" name="message" value={message} onChange={handleInputChange} required />
            </FormGroup>
            <Button type="submit">Send</Button>
          </Form>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;

