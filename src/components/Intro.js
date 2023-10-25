import React from 'react';
import bgImage from './bgImage.jpg';

export default function Intro() {



  return (
    // return html
    <div className='wall'>
        <img src={bgImage} alt='no' className='bg-img'></img>
        <p className='text-on-image'>Thanks for coming this far.
            <br />
            Scroll down to view more.
        </p>
    </div>
  )
}
