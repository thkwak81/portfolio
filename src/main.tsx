import React from 'react';
import ReactDOM, {Root} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';
import {createRoot} from 'react-dom/client';

import theme from './shared/styles/theme';

let root: Root | null = null;

document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('root');
	
	if(container && !root) {
		root = createRoot(container);
	}
	
	if(root) {
		root.render(
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</React.StrictMode>
		);
	}
});
