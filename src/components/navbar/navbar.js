// In navbar.js
import React from 'react';
import './navbar.css';
import AudioPlayer from '../audio/audioPlayer';
import backgroundMusic from '../audio/backgroundmp3.mp3'
const NavBar = () => {
    const tracks = [backgroundMusic]; // Using imported audio file

    return (
        <nav className="navbar">
            <button className="nav-button" onClick={() => window.scrollTo(0, 0)}><span>Home</span></button>
            <button className="nav-button" onClick={() => window.scrollTo(0, document.getElementById('section-about-us').offsetTop)}><span>About Us</span></button>
            <button className="nav-button" onClick={() => window.scrollTo(0, document.getElementById('section-pricing').offsetTop)}><span>Pricing</span></button>
            <div style={{ marginLeft: 'auto' }}>
                <AudioPlayer tracks={tracks} />
            </div>
        </nav>
    );
};

export default NavBar;
