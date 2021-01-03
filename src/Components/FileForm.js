import { useEffect, useState, useContext } from "react"
import { Form, Jumbotron, Button } from "react-bootstrap"
import ShirtContext from "./ShirtContext"



function FileForm(props) {
    const { resp, setResp } = useContext(ShirtContext)
    //const { setResp } = props; // this is used to set the App state when we get response
    //const { stylesList = ["starry Night", "escher"] } = props;
    const [validated, setValidated] = useState(false);
    const [retrievedValue, setRetrievedValue] = useState({});
    const [hasError, setErrors] = useState(false);
    const [stylesList, setStylesList] = useState([]);
    //on load, fetch API data
    useEffect(() => { getAvailableStyles(setStylesList, setErrors) }, [])
    function handleSubmit(event) {
        event.preventDefault(); // stop page from reloading
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        //await requestFromApi(setRetrievedValue); // get the api request
        requestFromApi(setResp) //setRetrievedValue)
        //console.log(retrievedValue)
        /*
        return new Promise(resolve => {
            setTimeout(() => { requestFromApi(setRetrievedValue); console.log(retrievedValue); resolve(); }
                , 1000);

        })
        */
    };

    return (
        <Jumbotron >
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group id="styleFormGroup" controlId="inputForm.style">
                    <Form.Label>Choose a Style!</Form.Label>
                    <Form.Control as="select" size="lg">
                        {stylesList.map((s) => <option key={s}>{s}</option>)}
                    </Form.Control>
                </Form.Group>
                <Form.Group id="fileInputGroup" controlId="inputForm.file" size="lg">
                    <Form.File id="inputFile" label="Upload Image" />
                </Form.Group>
                <Button type="submit">Create a Shirt!</Button>
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

async function requestFromApi(setter) {
    const res = await fetch("http://localhost:8000/")
    res.json()
        .then(res => setter(res))
        .catch(err => console.log(err))
}

export default FileForm