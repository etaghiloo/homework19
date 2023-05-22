import {Link} from "react-router-dom";
import "./style.css";

export default function HomePage() {
    return(
        <div class="home">
            <div class="container">
                <div><h3>This is the Home Page</h3></div>
                <Link to="/counter">
                    <h5>go to counter</h5>
                    <i className="fa-solid fa-angle-right"></i>
                </Link>
            </div>
        </div>
    )
}