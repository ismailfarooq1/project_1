import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Views/Home';
import Login from '../Views/Login';
import GuestLayout from '../Views/Layouts/GuestLayout';
import { useSelector } from 'react-redux';
import AdminLayout from '../Views/Layouts/AdminLayout';
import AdminHome from '../Views/AdminHome';
import store from '../Redux';

const CheckAuth = ({ children }) => {


	console.log(store.getState());
	useSelector((state) => {
		console.log(state);
		return state;
	});

	let isAuthenticated = true;
	console.log("isAuthenticated: " + isAuthenticated);
	return isAuthenticated ? children : <Navigate to='/login' />;
};

// const RequireAdminAuth = ({ children }) => {
// 	let isAuthenticated = false;
// 	if (sessionStorage.getItem('currentAdmin')) isAuthenticated = true;
// 	return isAuthenticated ? children : <Navigate to='/admin-login' />;
// };

const MyRoutes = () => {
	return (

		<Routes>
			<Route
				path='/'
				element={
					<GuestLayout>
						<Home />
					</GuestLayout>
				}
				exact
			/>
			<Route
				path='/login'
				element={
					<GuestLayout>
						<Login />
					</GuestLayout>
				}
				exact
			>
			</Route>
			<Route
				path='/adminHome'
				element={
					<CheckAuth>
						<AdminLayout>
							<AdminHome />
						</AdminLayout>
					</CheckAuth>
				}
				exact
			>
			</Route>
		</Routes>
	);
};

export default MyRoutes;
