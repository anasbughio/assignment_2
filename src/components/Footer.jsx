// src/components/Footer.jsx

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // From react-icons

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="social-media-links">
                {/* Note: Classes are retained for CSS styling */}
                <FaFacebookF className="fab fa-facebook fa-4x" />
                <FaTwitter className="fab fa-twitter fa-4x" />
                <FaInstagram className="fab fa-instagram fa-4x" />
            </div>
            <p>World Travel &copy; 2020, All Rights Reserved</p>
        </footer>
    );
};

export default Footer;