import React, { useRef, useState } from 'react'
import Image from 'next/image';

const BeforeAfterImage = ({card}: {card:{OriginalIMG:string, NewIMG:string}}) => {

    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    //setup empty HTMLDivElement reference to later be attached in HTML 
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.PointerEvent<HTMLDivElement>) =>{
    // check if its not dragging or dosent have a reference yet
    if (!isDragging || !containerRef.current) return;
    //get container's dimensions and position
    const rect = containerRef.current.getBoundingClientRect();
    // Calculate where the mouse is relative to the container.
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    console.log("x is: " + x)
    // calculate percentage
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
    }

  return (
    <>
    <section className='relative  w-full h-full overflow-hidden'>
            <div ref={containerRef} className='w-full h-full relative'>
              <Image
                src={card.OriginalIMG}
                alt="Original Image"
                width={0}
                height={0}
                sizes="100vw"
                className="absolute object-cover w-full h-full"
                style = {{clipPath: `rect(0% ${sliderPosition}% 100% 0%)`}}
              />
              <Image
                src={card.NewIMG}
                alt="New Image"
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover w-full h-full"
                style = {{clipPath: `rect(0% 100% 100% ${sliderPosition}%)`}}
              />
            </div>
            <div className={`absolute w-11 h-11 top-[50%] -mt-5.5 -ml-5.5 border-solid border-[3px] border-white rounded-full z-40
            after:content-[" "] before:bottom-[50%] before:mb-5.5 before:left-[50%] before:ml-[-1.5px] before:block before:bg-white before:absolute before:z-30 before:w-0.75 before:h-[9999px]
            after:content-[" "] after:top-[50%] after:mt-5.5 after:left-[50%] after:ml-[-1.5px] after:block after:bg-white after:absolute after:z-30 after:w-0.75 after:h-[9999px]
            `}
            style={{left: `${sliderPosition}%`}}
            onPointerDown={(event) => {
                //
                setIsDragging(true);
                event.currentTarget.setPointerCapture(event.pointerId);
            }}
                onPointerMove={handleMove}
                onPointerUp={() => setIsDragging(false)}
                onPointerCancel={() => setIsDragging(false)}

            >
            <span></span>
            <span></span>
            </div>
          </section>
    </>
  )
}

export default BeforeAfterImage