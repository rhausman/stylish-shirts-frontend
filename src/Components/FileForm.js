import { useEffect, useState } from "react"
import { Form, Jumbotron } from "react-bootstrap"

function FileForm() {
    //const { stylesList = ["starry Night", "escher"] } = props;
    const [hasError, setErrors] = useState(false);
    const [stylesList, setStylesList] = useState([]);
    //on load, fetch API data
    useEffect(() => { getAvailableStyles(setStylesList, setErrors) }, [])

    return (
        <Jumbotron >
            <Form>
                <Form.Group id="styleFormGroup" controlId="inputForm.style">
                    <Form.Label>Choose a Style!</Form.Label>
                    <Form.Control as="select">
                        {stylesList.map((s) => <option key={s}>{s}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group id="fileInputGroup" controlId="inputForm.file">
                    <Form.File id="inputFile" label="Upload Image" />
                </Form.Group>
            </Form>
        </ Jumbotron>
    )
}

async function getAvailableStyles(setter, errorSetter) {
    const ls = await fetch("http://localhost:8000/test_response")
    ls.json()
        .then(ls => setter(ls))
        .catch(err => errorSetter(err))
}

export default FileForm