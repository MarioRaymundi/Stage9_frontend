import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  *:focus{
    outline: none;
  }

  body {
    background-color: ${({theme}) => theme.COR.BG800};
    color: ${({theme}) => theme.COR.WHITE};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter:brightness(0.9);
  }
`;