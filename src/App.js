// src/App.jsx

import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// IMPORTANT: This import ensures all the CSS rules from style.css are applied
import './style.css'; 

const App = () => {
    // State for simple hash-based routing simulation
    const [currentPage, setCurrentPage] = useState('Home');

    useEffect(() => {
        // Function to determine page from URL hash
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#/', '');
            if (hash === 'about') setCurrentPage('About');
            else if (hash === 'contact') setCurrentPage('Contact');
            else setCurrentPage('Home');
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Check initial URL

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Renders the component corresponding to the current page
    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Contact':
                return <Contact />;
            case 'Home':
            default:
                return <Home />;
        }
    };

    return (
        <div className="travel-website">
            {renderPage()}
        </div>
    );
};

export default App;