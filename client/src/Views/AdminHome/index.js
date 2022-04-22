import React from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { index } from '../../Redux/Actions/Post';

const AdminHome = ({ children }) => {

	const dispatch = useDispatch();

	const getPosts = () => {
		console.log('posts');
		dispatch(index());
	}

	const checkToken = () => {
		let cookies = new Cookies();
		console.log(cookies.get('authToken'));
	}

	return (
		<div className='admin-home'>
			<div className='section bg-light'>
				<a className='btn btn-primary' onClick={getPosts}>Get All Posts</a>
				<a className='btn btn-primary' onClick={checkToken}>Check token</a>
			</div>
		</div>
	);
};

export default AdminHome;
