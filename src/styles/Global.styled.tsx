import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyled = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
  }

  /* Обнуляющий стиль */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
  }

  a,
  a:visited {
    text-decoration: none;
  }

 
  a:hover {
    text-decoration: none;
  }

  button {
    background-color: unset;
    border: none;
  }

  section {
    padding: 100px 0;

    h2:not(:last-child) {
      margin-bottom: 2.25em;
    }
  }

  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
  }

  h3 {
    font-weight: 700;
    letter-spacing: 1px;
    font-family: Josefin Sans, sans-serif;
  }


  p {
    font-size: 0.875rem;

  }

  img {
    vertical-align: top;
  }

  body,
  html {
    line-height: 1;
  }

  main {
    flex-grow: 1;
    background-color: antiquewhite;
  }

  /* ================================================================ */

`