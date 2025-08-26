import React from 'react';
import {useRoutes} from 'react-router-dom';
import routes from './routes';
import './assets/css/includes.css';

const App = () => {
	const element = useRoutes(routes);
	return element;
}

export default App;
