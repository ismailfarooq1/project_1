import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Views/Home';
import Login from '../Views/Login';
import GuestLayout from '../Views/Layouts/GuestLayout';
// import DashView from './Views/DashView/DashView';
// import AdminLoginView from './Views/AdminView/AdminLoginView';
// import AdminDashboard from './Views/AdminView/AdminDashboard';

// const RequireAuth = ({ children }) => {
// 	let isAuthenticated = false;
// 	if (localStorage.getItem('currentUser')) isAuthenticated = true;
// 	return isAuthenticated ? children : <Navigate to='/' />;
// };

const CheckAuth = ({ children }) => {
	let isAuthenticated = true;

	// console.log("CheckAuth function called.")
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
		<GuestLayout>
			<Routes>
				<Route
					path='/'
					element={
						<CheckAuth>
							<Home />
						</CheckAuth>
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
	);
};

export default MyRoutes;
