import React from 'react';
import bgImage from '../assets/bgImage.jpg';
import axios from 'axios';
import { useState } from 'react';

export default function Intro() {
  const [quote, setQuote] = useState('Press the button below to get a famous Quote.');
  const [author, setAuthor] = useState('~ Bhanu/DEV');

  const fetch_quote = async (category) =>{
    const config = {
      headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY
      }
    };
  
    const quote = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, config)
    
    setQuote(quote.data[0].quote);
    setAuthor('~'+quote.data[0].author);
  }

  return (
    <div className='wall'>
        <img src={bgImage} alt='no' className='bg-img'></img>
        <div className='text-on-image'>
          {
            quote
          }
          <br/>
          {author}
        </div>

        <button className='get-quote-btn' onClick={()=>{
          fetch_quote('computers')
        }}>
            GET ME A QUOTE
        </button>
    </div>
  )
}
