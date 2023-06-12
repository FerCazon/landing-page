import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ tracks }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        audioRef.current.volume = e.target.value;
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <audio ref={audioRef} src={tracks[0]}></audio>
            <button className="nav-button" onClick={handlePlayPause}>
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
            </button>
            <input 
                type="range" 
                min="0" max="1" 
                step="0.01" 
                onChange={handleVolumeChange} 
                defaultValue="1" 
                style={{ writingMode: 'bt-lr' /* ttb, or vertical writing mode */}}
            />
        </div>
    );
};

export default AudioPlayer;
