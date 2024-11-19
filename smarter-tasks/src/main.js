import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { ThemeProvider } from "./context/theme";
createRoot(document.getElementById('root')).render(React.createElement(ThemeProvider, null,
    React.createElement(App, null)));
