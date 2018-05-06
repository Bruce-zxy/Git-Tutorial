import styled from 'styled-components';

const AppStyleWrapper = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh
	.example-vertical-track {
	    background-color: transparent;
	    width: 5px;
	    transition: opacity 0.3s;
	}
	.example-vertical-handler {
	    width: 2px;
	    right: 1px;
	    border-radius: 2px;
	    background-color: rgba(0, 0, 0, 0.2);
	    transition: opacity 0.3s;
	    &:hover {
	        background-color: rgba(0, 0, 0, 0.4);
	    }
	}
`;

export default AppStyleWrapper;