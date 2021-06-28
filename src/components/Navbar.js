import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const closeMobileMenu = () => setClick(false);

    return ( 
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRAVELOVE
                    </Link>
                    <ul className="nav-menu">
                        <li className='nav-item'>
                            <Link to="/" className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/services" className='nav-links'>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/sign-up" className='nav-links'>
                                Sign-up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>         
            
    );
}

export default Navbar
