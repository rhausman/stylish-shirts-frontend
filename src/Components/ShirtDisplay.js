import { useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap"
import ShirtContext from "./ShirtContext"
import {PhotoContainer} from "./ComponentIndex"

function ShirtDisplay(props) {
    //const { context } = props;
    const {resp, setResp} = useContext(ShirtContext)
    console.log(resp)
    if ("image" in resp){
        console.log("present")
        console.log(resp["image"].name())
    }
    return (
        <Jumbotron>
            The result c'est {resp["name"]} and {"image" in resp? resp["image"].name():""}
            <img src={resp.url} alt="none" />
        </Jumbotron>
    )
}

function responseToB64(response){
    const b64Data = btoa(
        new Uint8Array(response.data).reduce(
            (dataArray, byte) => {
                return dataArray + String.fromCharCode(byte);
            }, 
            ''
        )
    )
    console.log("CONVERTED")
    console.log(b64Data)
    return b64Data
}
//<PhotoContainer file={resp.data} />
export default ShirtDisplay