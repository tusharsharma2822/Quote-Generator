import React, { useState } from 'react';
import './RandomQuote.css';
import reloadIcon from '../Assets/reload (1).png';
import twitterIcon from '../Assets/logo.png';

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
    }

    const [quote,setQuote] = useState({
        text: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan"
    });

    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter = () =>  {
        window.open(`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author.split(',')[0]}`)
    }

    loadQuotes();

    return (
        <div>
            <div className='container'>
                <div className='quote'>{quote.text}</div>
                <div className='line'></div>
                <div className='bottom'>
                    <div className='author'>
                        {quote.author.split(',')[0]}
                    </div>
                    <div className='icons'>
                        <img src={reloadIcon} onClick={() => {random()}} alt="reloadIcon"  className='reload'/>
                        <img src={twitterIcon} onClick={() => {twitter()}} alt="twitterIcon" className='twitter'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomQuote