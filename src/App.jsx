// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ChatbotApp from './components/ChatbotApp';

function App() {
    console.log("App component rendered"); // Debug log
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/chatbot" element={<ChatbotApp />} />
            </Routes>
        </Router>
    );
}

export default App;
