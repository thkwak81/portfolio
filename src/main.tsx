import React from 'react';
import ReactDOM from 'react;-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

let root: Root | null = null;

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('root');
	
	if(container && !root) {
		root = ReactDOM.createRoot(container);
	}
	
	if(root) {
		root.render(
			<React.StrictMode>
			 <BrowserRouter>
				<App />
			 </BrowserRouter>
			</React.StrictMode>
		);
	}
});
