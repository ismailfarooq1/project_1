// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo1.png';
import './styles.css'

const GuestHeader = () => {
    return (
        <div>
            <div className='row p-4 bg-white border'>
                <div className='col-md-2 d-flex justify-content-center'>
                    <img src={logo} className="logo1"></img>
                </div>
                <div className='col-md-8'>
                    <Link to='/'>Home</Link>
                    
                </div>
                <div className='col-md-2'>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default GuestHeader;