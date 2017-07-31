/* HERESY!!!! */
import {injectGlobal, ThemeProvider} from 'styled-components';


const baseTheme = {
  textColor: '#454545',
  fontFamily: 'San Francisco, Rotobo, Helvetica Neue, sans-serif'
}

const blueTheme = {
  textColor: '#00f',
  fontFamily: 'Imact, Arial Bold, Cabin, sans-serif'
}


injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: San Francisco, Rotobo, Helvetica Neue, sans-serif;
    font-size: 16px;
    color: #454545;
  }

  html {
    background-color: lightpink;
  }
`;

// class ThemeContainer
module.exports = {
  baseTheme,
  blueTheme
};