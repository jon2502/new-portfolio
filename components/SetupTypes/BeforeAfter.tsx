'use client'
  
import React, { useState } from 'react'
import BeforeAfterImage from './BeforeAfterImage';

const BeforeAfter = ({Project}: {Project:Project}) => {
  const {Title, Text, Info} = Project

  return (
    <div>
      <div>
        <p>{Text}</p>
        <p>(hvis der ikke er noget prøv at genindlæs siden)</p>
      </div>
      <div className='flex gap-5 flex-row max-md:flex-col'>
         {Info.map((card) =>(
          <BeforeAfterImage key={card.OriginalIMG} card={card}/>
         ))}
         
      </div>
    </div>
  )
}

export default BeforeAfter