import {Link} from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import './Navbar.css'

function Navbar(){
    return (
        <header>
            <div className="navbar-logo">
                <Link to="/">
                    <img src={logo}></img>
                </Link>
            </div>
            <nav>
            <ul className="main-items">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="gallery">
                        Gallery
                        </Link>
                </li>
                <li>
                    <Link to="booking">
                        Booking
                    </Link>
                </li>
                <li>
                    <Link to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
        </header>
    )
}

export default Navbar