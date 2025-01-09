import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot API
import App from './App';
import './index.css'; // Optional for additional styles

// Get the root element
const rootElement = document.getElementById('root');

// Create a root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
