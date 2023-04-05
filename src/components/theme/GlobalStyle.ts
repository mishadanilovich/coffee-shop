import { createGlobalStyle } from 'styled-components';
import { Roboto } from 'next/font/google';
import { theme } from './theme';

const roboto = Roboto({
	weight: ['300', '400', '700'],
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
  overflow-x: hidden;
  
  color: ${theme.palette.white};
  background: ${theme.palette.black};
}

a {
  color: inherit;
  text-decoration: none;
}
`;
