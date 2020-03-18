import { createGlobalStyle } from 'styled-components'
import dinotBold from '../fonts/DINOT-Bold.woff'
import dinotBold2 from '../fonts/DINOT-Bold.woff2'
import dinotLight from '../fonts/DINOT-Light.woff'
import dinotLight2 from '../fonts/DINOT-Light.woff2'
import dinotRegular from '../fonts/DINOT-Regular.woff'
import dinotRegular2 from '../fonts/DINOT-Regular.woff2'

export default createGlobalStyle`

@font-face {
        font-family: 'Dinot';
        src: local('Dinot'), local('Dinot'),
        url(${dinotBold2}) format('woff2'),
        url(${dinotBold}) format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dinot';
        src: local('Dinot'), local('Dinot'),
        url(${dinotLight2}) format('woff2'),
        url(${dinotLight}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Dinot';
        src: local('Dinot'), local('Dinot'),
        url(${dinotRegular2}) format('woff2'),
        url(${dinotRegular}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

*,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Dinot;
  }

  html {
    font-size: 16px;
  }

  body {
    padding: 0;
    margin: 0;
    color: #333;
    overflow: hidden;
  }
`
