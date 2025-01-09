import React from 'react';

function HomePage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <h1>Welcome to the Rasa Chatbot Application</h1>
            <p>Click the button below to open the chatbot in a new tab.</p>
            <a
                href="/chatbot"
                target="_blank"
                style={{ textDecoration: 'none' }}
            >
                <button style={{ padding: '10px 20px', borderRadius: '5px', background: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>
                    Open Chatbot
                </button>
            </a>
        </div>
    );
}

export default HomePage;
