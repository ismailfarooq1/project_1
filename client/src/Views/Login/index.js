import React, { useState, useEffect } from 'react';
import './styles.css';
import bgImage from '../../Assets/images/carousel-2.jpg'
import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { LoginValidation } from '../../Validations.js';
import logo from '../../Assets/images/logo2.png';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

const LoginView = () => {

	const handleLogin = (data) => {
		// console.log('handleLogin');
		// console.log(data);
	}


	return (
		<div id='login-view'>
			<div id='login-form-section' className='row d-flex align-content-center' >
				<div className='background-image'></div>
				<div className='content'>
					<div className='col-md-5 offset-md-7 col-12'>
						{/* <form onSubmit={submitLogin} id='login-form' className='border-secondary rounded p-5 me-md-3'>
						<h2 className='text-white'>Cube Marketing - Login</h2>
						<input id='email' type='email' placeholder='Email' className='form-control my-3'/>
						<input id='password' type='password' placeholder='Password' className='form-control mb-3'/>
						<button type='submit' className='btn btn-primary'>Login</button>
					</form> */}

						<Formik
							initialValues={{
								email: '',
								password: '',
							}}
							validationSchema={LoginValidation}
							onSubmit={data => {
								handleLogin(data);
							}}
						>
							{({ values }) => {
								return (
									<Form
										id='login-form'
										className='border-secondary p-5 me-md-3'
									>
										<h2 className='text-dark'>Cube Marketing - Login</h2>
										<div className='form-group'>
											<div className='row'>
												<div className='col-11'>
													<Field
														className="form-control my-3"
														name="email"
														required value={values.name}
														type="email"
														placeholder="Email"
													/>
												</div>
												<div className='col-1 d-flex align-items-center'>
													<ErrorMessage name='email' component={AiOutlineExclamationCircle} className=""></ErrorMessage>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='col-11'>
												<Field
													className="form-control mb-3"
													name="password"
													required value={values.password}
													type="password"
													placeholder="Password"
												/>
											</div>
											<div className='col-1 d-flex align-items-center'>
												<ErrorMessage name='password' component={AiOutlineExclamationCircle} className=""></ErrorMessage>
											</div>
										</div>
										<button type='submit' className='btn btn-primary'>Login</button>
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>

			</div>
		</div>
	);
};

export default LoginView;
