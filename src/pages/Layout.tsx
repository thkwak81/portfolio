import React, {Suspense} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {Header, Main} from '../shared/styles/main';
import Navigation from '../component/Navigation';

const Layout: React.FC = () => {
	const location = useLocation();

	console.log(location);
	return (
		<div id="container">
			<Header>
				<h1>Publisher</h1>
			</Header>
			<Main>
				<div className="breadcrumb">
					<Navigation />
				</div>
				<div className="contents">
					<Suspense fallback={'loading...'}>
						<Outlet />
					</Suspense>
				</div>
			</Main>
		</div>
	);
};

export default Layout;
