import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";
import {generateAdaptiveStyles, rem} from "../assets/generateAdaptiveStyles";

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
    cursor: pointer;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  svg {
    color: ${theme.colors.accent};
  }

  a:hover {
    text-decoration: none;
  }

  button {
    background-color: unset;
    border: none;
    color: ${theme.colors.font};
    cursor: pointer;
    width: 170px;
    height: 32px;
  }

  section {
    ${generateAdaptiveStyles({
      property: 'padding-top',
      startSize: 100,
      minSize: 80,
      keepSize: 1,
    })}
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
    //font-size: inherit;
  }

  h3 {
    font-weight: 700;
    letter-spacing: 1px;
    font-family: Josefin Sans, sans-serif;
  }


  p {
    font-size: ${rem(14)};
    line-height: 1.4;
  }

  small {
    font-size: ${rem(16)};
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
  }

  /* ================================================================ */

`