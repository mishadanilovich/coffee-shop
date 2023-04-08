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
  overflow-x: hidden;
  
  color: ${({ theme }) => theme.palette.white};
  background: ${({ theme }) => theme.palette.black};
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

h2 {
  ${({ theme }) => theme.typography['40B']};
}

h3 {
  ${({ theme }) => theme.typography['25B']};
}
`;
