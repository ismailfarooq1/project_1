import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeView from '../Views/Home';
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

	console.log("CheckAuth function called.")
	console.log("children: " + children );


	// if (localStorage.getItem('currentUser')) isAuthenticated = true;
	return isAuthenticated ? children : <Navigate to='/' />;
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
					<CheckAuth>
						<HomeView />
					</CheckAuth>
				}
				exact
			/>
			
		</Routes>
	);
};

export default MyRoutes;
