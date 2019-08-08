import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }
  
  html,body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #282a36;
  }

  body, input, button {
    font: 14px 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  }

  a {
    text-decoration: none; 
  }

  button {
    cursor: pointer;
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

`;
