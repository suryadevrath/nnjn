import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
return (
    <div className='footer-container'>
    <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Join the Adventure and  receive our best vacation deals!!!
        </p>
        <p className='footer-subscription-text'>
        </p>
        <div className='input-areas'>
        <form>
            <input
            className='footer-input'
            name='email'
            type='email'
            placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Join Us</Button>
        </form>
        <small class='website-rights'>TRAVELOVE@2021</small>
        </div>
    </section>
    </div>
);
}

export default Footer;