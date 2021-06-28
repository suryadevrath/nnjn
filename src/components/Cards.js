import React from 'react';
import CardItem from './CardItems.js';
import './Cards.css';

function Cards() {
return (
    <div className='cards'>
    <h1>Check out your favorite destinations!</h1>
    <div className='cards__container'>
        <div className="cards__wrapper">
            <ul className="cards__items">
                <div>
                <CardItem
                src='images/img-1.jpg'
                text="You could spend months exploring Taiwan’s Buddhist temples, villages, cities, and mountains"
                label="scsvs"
                path='/services'
                />
                <CardItem
                src='images/img-3.jpg'
                text="Largest. Tallest. Biggest. Dubai does ever extreme"
                label="scsvs"
                path='/services'
                /><CardItem
                src='images/img-4.jpg'
                text="Small in size, the ‘Lion City’ offers big delights - Singapore"
                label="scsvs"
                path='/Services'
                /><CardItem
                src='images/img-5.jpg'
                text="taiwan"
                text="The City of Lights dazzles in every way - Paris"
                label="scsvs"
                path='/Services'
                /><CardItem
                src='images/img-6.jpg'
                text="Ancient sights with modern style, the Eternal City continues to shine - Rome"
                path='/Services'
                /><CardItem
                src='images/img-7.jpg'
                text="THe place where Anime born - Japan"
                path='/'
                />
                </div>
                
            </ul>
        </div>

    </div>
        
    </div>
);
}

export default Cards;