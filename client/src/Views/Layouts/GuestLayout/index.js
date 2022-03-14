import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo2.png';
import './styles.css'

const GuestLayout = ({ children }) => {
    return (
        <div className="guest-layout">
            <div className="header-guest">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light p-3">
                    <div className="container-fluid">
                        
                        <a className="navbar-brand" href="#">
                            <img src={logo} className="logo1"></img>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link nav-link-left">
                                    <Link to='/'>Home</Link>
                                </a>
                                <a className="nav-link nav-link-left">
                                    <Link to='/'>Projects</Link>
                                </a>
                                <a className="nav-link nav-link-left">
                                    <Link to='/login'>About Us</Link>
                                </a>
                                <a className="nav-link nav-link-left">
                                    <Link to='/login'>Contact Us</Link>
                                </a>
                                <a className="nav-link nav-link-left">
                                    <Link to='/login'>Blog</Link>
                                </a>
                                <a className="nav-link nav-link-left">
                                    <Link to='/login'>Offers</Link>
                                </a>
                                <a className="nav-link nav-link-left">
                                    <Link to='/login'>Reviews</Link>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="body-guest">
                {children}
            </div>
            <div className="footer-guest">
                Footer here.
            </div>

        </div>
    );
}

export default GuestLayout;