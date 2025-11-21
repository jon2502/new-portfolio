'use client'
  
import Image from 'next/image';
import React, { useState } from 'react'

const BeforeAfter = ({project}: {project:Project}) => {
  const {Title, Text, Info} = project

  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div>
      <div>
        <p>{Text}</p>
        <p>(hvis der ikke er noget prøv at genindlæs siden)</p>
      </div>
      <div>
         {Info.map((card) =>(
          <div key={card.OriginalIMG}>
            <Image
              src={card.OriginalIMG}
              alt="Original Image"
              width={500}
              height={500}
              className="absolute object-cover"
            />
            <Image
              src={card.NewIMG}
              alt="New Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
         ))}
      </div>
    </div>
  )
}

export default BeforeAfter