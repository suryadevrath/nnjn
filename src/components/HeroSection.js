import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

export const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted />
            <h1>Book your Adventure</h1>
            <p>Traveling – it leaves you speechless, then turns you into a storyteller</p>
            <div className='hero-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                BOOK HOTELS
                </Button>
            
                
                <Button className='hero' 
                buttuonStyle='btn--primary'
                buttonSize='btn--large'> 
                BOOK FLIGHTS </Button>    
                
            </div>      
        </div>
    );
};

export default HeroSection;