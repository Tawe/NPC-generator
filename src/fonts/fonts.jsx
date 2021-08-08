import { createGlobalStyle } from 'styled-components';

import MedievalSharp from './MedievalSharp.woff';
import MedievalSharp2 from './MedievalSharp.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'MedievalSharp';
        src: local('MedievalSharp'), local('MedievalSharp'),
        url(${MedievalSharp}) format('woff2'),
        url(${MedievalSharp2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
