import { useEffect, useState, useContext } from "react"
import { Form, Jumbotron, Button } from "react-bootstrap"
import ShirtContext from "./ShirtContext"
import axios from "axios"; //for http requests
//import sharp, { format } from "sharp"; // to resize images

import "./../Styles/DisplayStyles.css" //general display styles



function FileForm(props) {
    const { resp, setResp } = useContext(ShirtContext)
    //const { setResp } = props; // this is used to set the App state when we get response
    //const { stylesList = ["starry Night", "escher"] } = props;
    const [validated, setValidated] = useState(false);
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
        // get the form data so we can access it
        const formData = new FormData(event.target),
            formDataObj = Object.fromEntries(formData.entries());
        setValidated(true);

        requestFromApi(setResp, formDataObj["style"], formDataObj["image"])

    };

    return (
        <Jumbotron className="display-panel">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group id="styleFormGroup" controlId="inputForm.style">
                    <Form.Label>1. Choose a Style!</Form.Label>
                    <Form.Control as="select" size="lg" name="style">
                        {stylesList.map((s) => <option key={s}>{s}</option>)}
                    </Form.Control>
                </Form.Group>
                <hr />
                <Form.Group id="fileInputGroup" controlId="inputForm.file" size="lg">
                    <Form.File id="inputFile" label="2. Upload Image" name="image" />
                </Form.Group>
                <hr />
                <Button type="submit">3. Create a Shirt!</Button>
            </Form>

        </ Jumbotron>
    )
}

async function getAvailableStyles(setter, errorSetter) {
    const ls = await fetch("http://localhost:8000/get_available_styles")
    ls.json()
        .then(ls => setter(ls))
        .catch(err => errorSetter(err))
}

async function requestFromApi(setter, style, image) {
    // make the request
    let form_data = new FormData();
    // config the headers and include the image
    let config = {
        headers: {
            'content-type': 'multipart/form-data',
        }
    }
    // send the file with the appropriate key name so it is parsed
    form_data.append('file', image) //, image.name);
    //form_data.append("style", style)
    // form_data.append('content', this.state.content);
    let url = "http://localhost:8000/style_image/" + style; // bas url
    axios.post(url, form_data, config)
        //.then(res => console.log(res))
        //.then(res => res.data)
        // .then(data => console.log(data))
        .then(res => res.data)
        .then(data => {
            // newimg is resized
            //var newImg = new Buffer(data, 'base64');
            //sharp(newImg)
            //    .resize(100, 100)
            //    .toBuffer()
            //.toString("base64")
            return { name: data.name, img: data.img, url: "data:image/png;base64," + data.img }
        })
        //.then(obj => { return { name: obj.name, data: obj.data, url: URL.createObjectURL(obj.data) } })
        .then(res => setter(res))
        .catch(err => console.log(err))
}

export default FileForm