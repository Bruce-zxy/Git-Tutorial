import { injectGlobal } from 'emotion';
import styled from 'react-emotion';

injectGlobal`
	body,html {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`

const AppStyleWrapper = styled('div')`
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: distribute;
    justify-content: space-around;
	-ms-flex-align: center;
	align-items: center;
	height: 100vh;
	.terminal-base {
		box-shadow: 4px 2px 20px #333;
	}
	.terminal-base>div {
		font-weight: bold;
		font-size: 2em!important;
	}
	.terminal-base>div div:first-child svg {
		position: relative;
	    top: -5px;
	}
	.terminal-base>div div:last-child {
		overflow-x: hidden;
	}
	.terminal-base pre>span {
		color: #FFF80B;
	}
`;

export default AppStyleWrapper;