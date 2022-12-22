import { createGlobalStyle } from 'styled-components';
import '../fonts/rubik-v23-latin-500.eot';
import '../fonts/rubik-v23-latin-500.svg';
import '../fonts/rubik-v23-latin-500.ttf';
import '../fonts/rubik-v23-latin-500.woff';
import '../fonts/rubik-v23-latin-500.woff2';
import '../fonts/rubik-v23-latin-regular.eot';
import '../fonts/rubik-v23-latin-regular.svg';
import '../fonts/rubik-v23-latin-regular.ttf';
import '../fonts/rubik-v23-latin-regular.woff';
import '../fonts/rubik-v23-latin-regular.woff2';

export const GlobalStyles = createGlobalStyle`
h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}
h1,
h2,
h3 {
  font-weight: 500;
}
ul {
    margin-bottom: 0;
  margin-top: 0;
  padding-left: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
a {
    text-decoration: none;
    color: inherit;
}
button {
  cursor: pointer;
  border: none;
  font-family: inherit;
}
body {
    background-color:  #1D1D1D;
    color: #f4f4f4;
    font-family: 'Rubik', sans-serif;
}
#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

`;
