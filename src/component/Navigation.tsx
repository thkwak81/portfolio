import React from 'react';
import {NavLink} from 'react-router-dom';
import routes from '../routes';

const Navigation = () => {
	const naviRoutes = routes.find(item => item.children !== null).children;

	return (
		<ul className="gnb">
			{naviRoutes.map((item, index) => {
				const name = item.path.slice(1);
				if(name !== ''){
					return <li key={`${name + index}`}><NavLink to={item.path}>{name}</NavLink></li>
				}
			})}
		</ul>
	);
};

export default Navigation;
