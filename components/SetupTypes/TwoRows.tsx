import Image from 'next/image'
import React from 'react'

function TwoRows({Project}: {Project:Project}) {
    console.log(Project.ImageGallery)
    const imagegallery = Project.ImageGallery
    const Info = Project.Info
  return (
    <section className='flex max-w-[1140px] mx-auto'>
        <section className='flex flex-row items-center p-2.5'>
            <div className='w-[65%]'>
                <h1>gallery</h1>
                {Project.ImageGallery.length == 2 ? (
                    <section className='flex flex-col items-center'>
                        {imagegallery.map((gallery) => (
                            <div className='flex flex-row'>
                               {gallery.map((image) => (
                                <Image src={image} alt="logo" width={0} height={0} sizes="50%" style={{ width: '50%', height: 'auto' }}/>
                               ))} 
                            </div>
                        ))}
                    </section>
                ):(
                    <p>one</p>
                )}
            </div>
            <div className='flex justify-start items-start flex-col w-[35%] h-[85%]'>
                {Info.map((text:any)=>(
                    <p className='mb-[15px]'>{text}</p>
                ))}
            </div>
        </section>
    </section>
  )
}

export default TwoRows