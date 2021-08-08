import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import GlobalFonts from './fonts/fonts';
import { GlobalStyle } from './GlobalStyles';
const App = lazy(() => import('./App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<>Loading...</>}>
            <GlobalStyle />
            <GlobalFonts />
            <App />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
