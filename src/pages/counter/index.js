import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./style.css"

export default function Counter() {
    const [counter, setCounter] = useState(0);
    useEffect(
        function() {
            document.title = "counter" + " " + counter;
        },
        [counter]
    );
    function add() {
        setCounter(counter + 1);
    }
    function subtract() {
        setCounter(counter - 1);
    }
    return(
        <div class="counter">
            <div class="container">
                <div class="counter-wrapper">
                    <button onClick={subtract}>-</button>
                    <div id="number">{counter}</div>
                    <button onClick={add}>+</button>
                </div>
                <Link to="/"><h5>return to Home Page</h5></Link>
            </div>
        </div>
    )
}