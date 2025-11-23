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
      <div className='flex'>
         {Info.map((card) =>(
          <section key={card.OriginalIMG} className='mx-[10px] w-[100%] h-[100%]'>
            <div className='w-[100%] h-[100%]'>
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
            <div className='absolute w-[100%] h-[100%] top-0 z-40'>
              <div className='absolute w-[38px] h-[38px] top-[50%] border-solid border-[3px] border-[#fff] rounded-full'>
                <span></span>
                <span></span>
              </div>
            </div>
          </section>
         ))}
         
      </div>
    </div>
  )
}

export default BeforeAfter