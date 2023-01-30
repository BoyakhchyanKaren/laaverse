import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

import "swiper/css";
import "swiper/css/pagination";
import DrawerContextProvider from 'context/drawerContext';
import StackingContextProvider from 'context/stackingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DrawerContextProvider>
            <StackingContextProvider>
                <App />
            </StackingContextProvider>
        </DrawerContextProvider>
    </React.StrictMode>
);

