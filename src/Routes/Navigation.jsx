
import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/product'>Product</Link></li>
                <li><Link to='/notfound'>NotFound</Link></li>
            </ul>
        </nav>
    );
}