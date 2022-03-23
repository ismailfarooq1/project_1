import React, { useState, useEffect } from 'react';
import './styles.css';
import bgImage from '../../Assets/images/carousel-2.jpg'
import {useDispatch} from 'react-redux';
import {Formik , Field , Form , ErrorMessage} from 'formik';

const LoginView = () => {

	const submitLogin = () => {
		console.log('submit ligin');
	}
	

	return (
		<div id='login-view'>
			<div id='login-form-section' className='row d-flex align-content-center' >
				<div className='col-md-5 offset-md-7 col-12'>
					{/* <form onSubmit={submitLogin} id='login-form' className='border-secondary rounded p-5 me-md-3'>
						<h2 className='text-white'>Cube Marketing - Login</h2>
						<input id='email' type='email' placeholder='Email' className='form-control my-3'/>
						<input id='password' type='password' placeholder='Password' className='form-control mb-3'/>
						<button type='submit' className='btn btn-primary'>Login</button>
					</form> */}

					<FormIk
				</div>
			</div>
		</div>
	);
};

export default LoginView;
