import { createGlobalStyle } from 'styled-components';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin']
});

export const GlobalStyle = createGlobalStyle`
	* {
	  	box-sizing: border-box;
	  	padding: 0;
	  	margin: 0;
	}
	
	html,
	body {
	  	font-family: ${roboto.style.fontFamily};
	  	max-width: 100vw;
	  	min-height: 100vh;
	  
	  	color: ${({ theme }) => theme.palette.white};
	  	background: ${({ theme }) => theme.palette.black};
	}
	
	html {
	  	scroll-behavior: smooth;
	  	scroll-padding-top: 100px;
	
	  	@media ${({ theme }) => theme.device.laptop} {
			scroll-padding-top: 85px;
	  	}
	}
	
	html::-webkit-scrollbar{
	  	width: 8px;
	}
	
	html::-webkit-scrollbar-track{
	  	background: transparent;
	}
	
	html::-webkit-scrollbar-thumb{
	  	background: ${({ theme }) => theme.palette.white};
	  	border-radius: 20px;
	}
	
	a {
	  	color: inherit;
	  	text-decoration: none;
	}
	
	button {
	  	font-family: ${roboto.style.fontFamily};
	  	color: currentColor;
	  	outline: none;
	  	border: none;
	}
	
	input,
	input:active {
	  	font-family: ${roboto.style.fontFamily};
	  	text-transform: none;
	  	background: none;
	  	color: currentColor;
	  	border: none;
	  	outline: none;
	}
	
	h1 {
	  	${({ theme }) => theme.typography['60B']};
	}
	
	h2 {
	  	${({ theme }) => theme.typography['40B']};
	}
	
	h3 {
	  	${({ theme }) => theme.typography['25B']};
	}
`;
