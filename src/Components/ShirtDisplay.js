import { useContext } from "react";
import { Jumbotron, Button } from "react-bootstrap"
import ShirtContext from "./ShirtContext"

function ShirtDisplay(props) {
    //const { context } = props;
    const {resp, setResp} = useContext(ShirtContext)

    return (
        <Jumbotron>
            The result c'est {resp["Hello"]}
        </Jumbotron>
    )
}

export default ShirtDisplay