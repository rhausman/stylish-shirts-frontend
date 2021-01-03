import { Form, Jumbotron } from "react-bootstrap"

function FileForm(props) {
    const { stylesList = ["starry Night", "escher"] } = props;
    return (
        <Jumbotron >
            <Form>
                <Form.Group id="styleFormGroup" controlId="inputForm.style">
                    <Form.Label>Choose a Style!</Form.Label>
                    <Form.Control as="select">
                        {stylesList.map((s) => <option>{s}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group id="fileInputGroup" controlId="inputForm.file">
                    <Form.File id="inputFile" label="Upload Image" />
                </Form.Group>
            </Form>
        </Jumbotron>
    )
}


export default FileForm