import logo from './Assets/logo.svg';
import { Jumbotron, Button, Row, Col } from "react-bootstrap";
import './Styles/App.css';

// custom components
import FileForm from './Components/FileForm'



function App() {

  return (
    <div className="App">
      <Row>
        <Col>
          <Jumbotron style={{ background: "rgba(62, 224, 191, 0.8)" }}>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron >
        </Col>
        <Col>
          <Jumbotron style={{ background: "rgba(62, 224, 191, 0.8)" }}>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron >
        </Col>
      </Row>
    </div >
  );
}

export default App;
