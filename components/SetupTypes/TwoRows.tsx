import Image from 'next/image'
import React from 'react'

function TwoRows({Project}: {Project:Project}) {
    const imagegallery = Project.ImageGallery
    const Info = Project.TextArray

  return (
    <section className='flex max-w-285 mx-auto'>
        <section className='flex flex-row items-center p-2.5 max-md:flex-col-reverse'>
            <div className='w-[65%] max-md:w-[90%]'>
                <h1 className='text-center mb-5'>Galleri</h1>
                {Project.ImageGallery.length == 2 ? (
                    <section className='flex flex-col'>
                        {imagegallery.map((gallery, index) => (
                            <div key={index} className={`flex flex-row max-md:flex-col max-md:items-center gap-8 ${index != imagegallery.length-1 && 'mb-8'}`}>
                               {gallery.map((image) => (
                                <Image src={image} key={image} alt="logo" width={0} height={0} sizes="100%" style={{ width: '40%', height: 'auto' }}/>
                               ))} 
                            </div>
                        ))}
                    </section>
                ):(
                    <p>one</p>
                )}
            </div>
            <div className='flex justify-start items-start flex-col w-[35%] h-[85%] max-md:w-[90%]'>
                {Info.map((Text:string)=>(
                    <p key={Text} className='mb-3.75 leading-normal'>{Text}</p>
                ))}
            </div>
        </section>
    </section>
  )
}

export default TwoRows