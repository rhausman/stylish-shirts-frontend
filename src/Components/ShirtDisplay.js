import React, { useContext, StyleSheet } from "react";
import { Jumbotron } from "react-bootstrap"
import ShirtContext from "./ShirtContext"
//import { PhotoContainer } from "./ComponentIndex"
import "./../Styles/OverlapStyles.css" //to overlap shirts
import "./../Styles/DisplayStyles.css" //general display styles


function ShirtDisplay(props) {
    //const { context } = props;
    const { resp, setResp } = useContext(ShirtContext)
    console.log(resp)
    if ("image" in resp) {
        console.log("present")
        console.log(resp["image"].name())
    }
    return (
        <Jumbotron className="display-panel">
            4. Preview
            <hr />




            <div className="container" >
                <img className="img" src={resp.url} alt="none" />
            </div>
        </Jumbotron>
    )
}





//<PhotoContainer file={resp.data} />
export default ShirtDisplay