import { lazy } from 'react';
import type {RouteObject} from 'react-router-dom';

const GlobalLayout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Career = lazy(() => import('./pages/Career'));
const Works = lazy(() => import('./pages/Works'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const NotFound = lazy(() => import('./component/NotFound'));

const routes: RouteObject[] = [
	{
		path: '/',
		element: <GlobalLayout />,
		children: [
			{path: '/', element: <Home />},
			{path: '/about', element: <About />},
			{path: '/career', element: <Career />},
			{path: '/works', element: <Works />},
			{path: '/contact', element: <ContactUs />},
		],
	},
	{
		path: '*',
		element: <NotFound />,
	},
];

const pages =  [
	{route: '/'},
	{route: '/about'},
	{route: '/career'},
	{route: '/works'},
	{route: '/contact'},
];

export default routes;
