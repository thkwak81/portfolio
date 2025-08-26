import styled from 'styled-components';

export const Header = styled.header`
	height: 80px;

	& h1 {
		color: #fff;
	},
`;

export const Main = styled.div`
	display: flex;
	flex-direction: row;
	height: calc(100% - 80px);
	background: #000000;

	.breadcrumb {
		position: relative;

		& ul {
			& a {
				text-transform: uppercase;
				font-weight: 900;
				font-size: 5rem;
				line-height: 150%;
				color: #fff;
			}
		},
	},
`;
