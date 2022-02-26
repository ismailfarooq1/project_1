import React from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './Routes';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const App = () => {
	return (
		<BrowserRouter>
			<MyRoutes />
		</BrowserRouter>
	);
};
export default App;
