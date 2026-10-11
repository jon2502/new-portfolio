import Image from 'next/image'
import React from 'react'

function TwoRows({Project}: {Project:Project}) {
    const imagegallery = Project.ImageGallery
    const Info = Project.Info

  return (
    <section className='flex max-w-285 mx-auto'>
        <section className='flex flex-row items-center p-2.5'>
            <div className='w-[65%]'>
                <h1>Galleri</h1>
                {Project.ImageGallery.length == 2 ? (
                    <section className='flex flex-col items-center'>
                        {imagegallery.map((gallery, index) => (
                            <div key={index} className='flex flex-row'>
                               {gallery.map((image) => (
                                <Image src={image} key={image} alt="logo" width={0} height={0} sizes="50%" style={{ width: '50%', height: 'auto' }}/>
                               ))} 
                            </div>
                        ))}
                    </section>
                ):(
                    <p>one</p>
                )}
            </div>
            <div className='flex justify-start items-start flex-col w-[35%] h-[85%]'>
                {Info.map((Text:string)=>(
                    <p key={Text} className='mb-3.75'>{Text}</p>
                ))}
            </div>
        </section>
    </section>
  )
}

export default TwoRows