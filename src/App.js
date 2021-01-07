import { useState } from "react"
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap";
import './Styles/App.css';

// custom components
import { FileForm, ShirtDisplay, ShirtContext } from './Components/ComponentIndex'



function App() {
  const [resp, setResp] = useState({ name: "empty", img: null, url: "" })
  const value = { resp, setResp }

  return (
    <div className="App">
      <Navbar expand="small" theme="light" sticky="none" style={{ color: "aqua" }}>
        <Container fluid>

          <Col className="col-md-3"><Nav><h1>Stylish-Shirts</h1></Nav></Col>
          <Col className="col-md-7">
            <Nav>
              <h3>Leverage the Power of <a style={{ textDecoration: "none" }} href="https://www.github.com/">Neural Style Transfer</a> to make a T-shirt!</h3>
            </Nav>
          </Col>
          <Col>
            <Nav>
              Like it? Check out <a href="https://richard-website-1d919.firebaseapp.com/" style={{ textDecoration: "none" }}>my site!</a>
            </Nav>
          </Col>
        </Container>
      </Navbar>

      <ShirtContext.Provider value={value}>
        <Row>
          <Col>
            <FileForm responseSetter={setResp} />

          </Col>
          <Col>
            <ShirtDisplay />
          </Col>
        </Row>

      </ShirtContext.Provider>
    </div >
  );
}

export default App;
