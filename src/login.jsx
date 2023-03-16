import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div>
      {/* <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <br />
      <br /> */}
      <Container className="d-flex justify-content-center m-5">
        <Form className="p-5 bg-white rounded shadow-lg m-5">
          <h1 className="text-center mb-5">Login</h1>
          <Form.Group className="p-3 m-2">
            <Form.Label className="text-uppercase">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email@gmail.com"
              className="form-control-lg"
            />
          </Form.Group>

          <Form.Group className="p-3 m-2">
            <Form.Label className="text-uppercase">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className="form-control-lg"
            />
          </Form.Group>

          <Button variant="primary" size="lg" d-block>
            Submit
          </Button>
          <div style={{ display: "flex" }} className="m-2 justify-content-center ">
            <Button variant="danger" size="ms" className="me-2">
              <FontAwesomeIcon icon={faGoogle} />
            </Button>
            <Button variant="primary" size="ms" className="me-2">
              <FontAwesomeIcon icon={faFacebook} />
            </Button>
            <Button variant="dark" size="ms" className="me-2">
              <FontAwesomeIcon icon={faGithub} />
            </Button>
          </div>
        </Form>
      </Container>


        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

    </div>
  );
};

export default Login;
