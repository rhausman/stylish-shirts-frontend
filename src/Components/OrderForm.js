import React, { useState, useContext } from "react"
import { Form, Jumbotron, Button } from "react-bootstrap"
import ShirtContext from "./ShirtContext"
//project-level imports
//import AddressForm from "./AddressForm"
//import axios from "axios"; //for http requests
import "./../Styles/DisplayStyles.css"

function OrderForm() {
    const { resp, setResp } = useContext(ShirtContext) // resp["img"] is the image, resp["url"] is a base64 representation
    const [hasError, setErrors] = useState(false);
    return (
        <Jumbotron className="display-panel">
            <h2>5. Order</h2>
            <Form>
                <Form.Control id="address">

                </Form.Control>
            </Form>
        </Jumbotron>
    )
}

export default OrderForm