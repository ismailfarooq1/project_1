import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Cookies from 'universal-cookie';
import { index } from '../../Redux/Actions/Post';
import obj from '../../Redux/index';

const AdminHome = ({ children }) => {

	const dispatch = useDispatch();

	let isAuthenticated = useSelector((state) => {
		return state;
	});

	const getPosts = () => {
		console.log('posts');
		dispatch(index());
	}

	const checkToken = () => {
		console.log(isAuthenticated);
		console.log('Check token here.');
		obj.persistor.purge();
	}

	return (
		<div className='admin-home'>
			<div className='section'>
				<a className='btn btn-primary' onClick={getPosts}>Get All Posts</a>
				<a className='btn btn-primary' onClick={checkToken}>Check token</a>

				<div className='row m-2'>
					<div className='col-12 col-md-12 d-flex justify-content-center'>
						<Link className='btn btn-secondary' to={'/admin/users'}>Users</Link>
					</div>

				</div>

			</div>
		</div>
	);
};

export default AdminHome;
