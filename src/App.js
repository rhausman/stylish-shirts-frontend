import { useState } from "react"
import { Row, Col, Jumbotron } from "react-bootstrap";
import './Styles/App.css';

// custom components
import { FileForm, ShirtDisplay, ShirtContext } from './Components/ComponentIndex'



function App() {
  const [resp, setResp] = useState({ name: "empty", img: null, url: "" })
  const value = { resp, setResp }

  return (
    <div className="App">
      <ShirtContext.Provider value={value}>
        <Row>
          <Col>
            <FileForm responseSetter={setResp} />
          </Col>
          <Col>
            <ShirtDisplay />
          </Col>
        </Row>
        <Row>
          <Col>
            <Jumbotron>
              <div>Result: {resp.name}</div>
            </Jumbotron>
          </Col>
        </Row>
      </ShirtContext.Provider>
    </div >
  );
}

export default App;
