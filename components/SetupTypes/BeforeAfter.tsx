'use client'
  
import Image from 'next/image';
import React, { useState } from 'react'

const BeforeAfter = ({Project}: {Project:Project}) => {
  const {Title, Text, Info} = Project

  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div>
      <div>
        <p>{Text}</p>
        <p>(hvis der ikke er noget prøv at genindlæs siden)</p>
      </div>
      <div className='flex gap-5'>
         {Info.map((card) =>(
          <section key={card.OriginalIMG} className='relative  w-full h-full overflow-hidden'>
            <div className='w-full h-full relative'>
              <Image
                src={card.OriginalIMG}
                alt="Original Image"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute object-cover w-full h-full"
              />
              <Image
                src={card.NewIMG}
                alt="New Image"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover w-full h-full"
              />
            </div>
            <div className='absolute left-[50%] w-11 h-11 top-[50%] -mt-5.5 -ml-5.5 border-solid border-[3px] border-white rounded-full z-40
            after:content-[" "] before:bottom-[50%] before:mb-5.5 before:left-[50%] before:ml-[-1.5px] before:block before:bg-white before:absolute before:z-30 before:w-0.75 before:h-[9999px]
            after:content-[" "] after:top-[50%] after:mt-5.5 after:left-[50%] after:ml-[-1.5px] after:block after:bg-white after:absolute after:z-30 after:w-0.75 after:h-[9999px]
            '>
            </div>
          </section>
         ))}
         
      </div>
    </div>
  )
}

export default BeforeAfter