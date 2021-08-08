import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalFonts from './fonts/fonts';
import { GlobalStyle } from './GlobalStyles';

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <GlobalFonts />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
