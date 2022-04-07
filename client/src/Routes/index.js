import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Views/Home';
import Login from '../Views/Login';
import GuestLayout from '../Views/Layouts/GuestLayout';
import { useSelector } from 'react-redux';
import AdminLayout from '../Views/Layouts/AdminLayout';
import AdminHome from '../Views/AdminHome';
// import DashView from './Views/DashView/DashView';
// import AdminLoginView from './Views/AdminView/AdminLoginView';
// import AdminDashboard from './Views/AdminView/AdminDashboard';

// const RequireAuth = ({ children }) => {
// 	let isAuthenticated = false;
// 	if (localStorage.getItem('currentUser')) isAuthenticated = true;
// 	return isAuthenticated ? children : <Navigate to='/' />;
// };

const CheckAuth = ({ children }) => {
	// let isAuthenticated = useSelector((state) => state.adminData);
	let isAuthenticated = true;

	console.log("isAuthenticated: " + isAuthenticated);
	// console.log("children: " + children );


	// if (localStorage.getItem('currentUser')) isAuthenticated = true;
	return isAuthenticated ? children : <Navigate to='/login' />;
};

// const RequireAdminAuth = ({ children }) => {
// 	let isAuthenticated = false;
// 	if (sessionStorage.getItem('currentAdmin')) isAuthenticated = true;
// 	return isAuthenticated ? children : <Navigate to='/admin-login' />;
// };

const MyRoutes = () => {
	return (
		<div>
			<GuestLayout>
				<Routes>
					<Route
						path='/'
						element={
							<Home />
						}
						exact
					/>
					<Route
						path='/login'
						element={
							<Login />
						}
						exact
					>

					</Route>

				</Routes>
			</GuestLayout>
			<CheckAuth>
				<AdminLayout>
					<Routes>
						<Route
							path='/adminHome'
							element={
								<AdminHome />
							}
							exact
						/>
					</Routes>
				</AdminLayout>
			</CheckAuth>

		</div>

	);
};

export default MyRoutes;
