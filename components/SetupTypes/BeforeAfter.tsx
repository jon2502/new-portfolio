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
          <section key={card.OriginalIMG} className='relative  w-[100%] h-[100%]'>
            <div className='w-[100%] h-[100%] relative'>
              <Image
                src={card.OriginalIMG}
                alt="Original Image"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute object-cover w-[100%] h-[100%]"
              />
              <Image
                src={card.NewIMG}
                alt="New Image"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
            <div className='absolute w-[38px] h-[38px] mt-[-22px] ml-[-19px] top-[50%] border-solid border-[3px] border-[#fff] rounded-full after:content-[" "] after:top-[50%] after:mt-[22px] after:w-[3px] after:h-[9999px] after:left-[50%] after:ml-[-1.5px] after:block after:bg-[#fff] after:absolute after:z-30'>
              <span></span>
              <span></span>
            </div>
          </section>
         ))}
         
      </div>
    </div>
  )
}

export default BeforeAfter