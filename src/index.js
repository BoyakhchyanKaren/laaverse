import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

import "swiper/css";
import "swiper/css/pagination";
import DrawerContextProvider from 'context/drawerContext';
import StackingContextProvider from 'context/stackingContext';
import ModalsContextProvider from 'context/modalsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ModalsContextProvider>
            <DrawerContextProvider>
                <StackingContextProvider>
                    <App />
                </StackingContextProvider>
            </DrawerContextProvider>
        </ModalsContextProvider>
    </React.StrictMode>
);

